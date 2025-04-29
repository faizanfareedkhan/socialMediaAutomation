const User = require('../modals/userDetails');
const sysUser = require('../modals/sysUserModel');
const sysUserToken = require('../modals/sysUserTokenModel');
const workspace = require('../modals/workspaceModel');
const bcrypt = require('bcryptjs');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const email = require('../utilities/emailService');
const sysUserModal = require('../modals/sysUserModel');
const autoGenerate = require('../utilities/autoGenerateNameService');
const token = require('../utilities/jwtTokenService');

// Normal Signup
exports.signup = async (req, res) => {
  const { firstName, lastName, email, password, profile } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Email already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ firstName, lastName, email, password: hashedPassword, profile });

    await user.save();
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (err) {
    res.status(500).json({ message: 'Signup error', error: err.message });
  }
};

// Normal Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid email' });

    
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: 'Invalid password' });

    res.status(200).json({ message: 'Login successful', user });
  } catch (err) {
    res.status(500).json({ message: 'Login error', error: err.message });
  }
};

exports.signUpWithEmail = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await sysUser.findOne({ email: email });
    if (user) return res.status(400).json({ message: 'Email already exists' });

    console.log("Adding workspace");
    var newWorkeSpace = new workspace();
    newWorkeSpace.name = await autoGenerate.enterpriseName();
    await newWorkeSpace.save();
    console.log("Workspace Added");

    console.log("Adding User");
    var person = await autoGenerate.randomPerson();
    var location = await autoGenerate.randomLocation();
    const newSysUser = new sysUser();
    newSysUser.firstName = person.firstName();
    newSysUser.lastName = person.lastName();
    newSysUser.email = email;
    newSysUser.password = await bcrypt.hashSync(await autoGenerate.randomPassword());
    newSysUser.address = location.streetAddress();
    newSysUser.city = location.city();
    newSysUser.state = location.state();
    newSysUser.zipcode = location.zipCode();
    newSysUser.country = location.country();
    newSysUser.isActive = true;
    newSysUser.failedLoginAttempts = 0;
    newSysUser.isBlocked = false;
    newSysUser.isPaymentVerified = false;
    newSysUser.workSpaceId = newWorkeSpace._id;
    await newSysUser.save();
    console.log("User is added");

    if (newSysUser && newSysUser._id) {
      console.log("Adding Token");
      var sysToken = new sysUserToken();
      sysToken.userId = newSysUser._id;
      sysToken.token = await token.createToken(newSysUser._id.toString(), newSysUser.email);
      sysToken.isExpired = false;

      await sysToken.save();
      console.log("Token is added");


    } else {
      console.error('User save failed: No _id returned');
    }


    res.status(200).json({ message: 'SignUp successful', newSysUser });
  } catch (err) {
    res.status(500).json({ message: 'SignUp error', error: err.message });
  }
};

// Google Signup/Login via Token 
exports.googleLoginWithToken = async (req, res) => {
  const { token } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email, given_name, family_name, sub } = payload;

    let user = await User.findOne({ email });

    if (!user) {
      // New user signup with Google
      user = new User({
        firstName: given_name,
        lastName: family_name || '',
        email,
        googleId: sub,
        password: '', // no password for Google users
        profile: {},
      });
    } else {
      // Existing user login/update
      if (!user.googleId) {
        user.googleId = sub;
      }
    }

    await user.save();
    res.status(200).json({ message: 'Google Login Success', user });
  } catch (err) {
    res.status(500).json({ message: 'Google Login Failed', error: err.message });
  }
};

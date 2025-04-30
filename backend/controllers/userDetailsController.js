
const userService = require('../services/userService');
const workspaceService = require('../services/workspaceService');
const tokenService = require('../services/tokenService');
const workspaceUserService = require('../services/workspaceUserService');


const bcrypt = require('bcryptjs');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const emailService = require('../utilities/emailService');
const autoGenerate = require('../utilities/autoGenerateNameService');
const file = require('../utilities/fileReadService');


exports.signUpWithEmail = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await userService.getUserByEmail(email);
    if (user) return res.status(400).json({ message: 'Email already exists' });

    console.log("Adding workspace");
    var newWorkeSpace = await workspaceService.createWorkspace(await autoGenerate.enterpriseName(), null);
    
    console.log("Workspace Added");

    
    var person = await autoGenerate.randomPerson();
    var location = await autoGenerate.randomLocation();
    var newSysUser = await userService.createUser(email, person.firstName(), person.lastName(), await bcrypt.hashSync(await autoGenerate.randomPassword()),
  location.streetAddress(), location.city(), location.state(), location.zipCode(), location.country());

    if(newWorkeSpace && newSysUser){
      var workspaceUser = await workspaceUserService.createWorkspaceUser(newWorkeSpace._id, newSysUser._id, "Sys Admin");
    }
    

    if (newSysUser && newSysUser._id) {
      var token = await tokenService.createToken(newSysUser._id, email);

      console.log("Reading html file");
      let htmlFile = await file.readFileFromPath('../emailtemplates/senduserlink.html');
      console.log("Replacing data in html file");
      htmlFile = htmlFile.replace("{userToken}", token.token);
      htmlFile = htmlFile.replace("{email}", email);

      console.log("Sending email");
      var emailSent =  await emailService.sendEmail(email, "Your sign-in link", htmlFile);
      if(emailSent)
      {
        console.log("email sent");
      }
      else{
        console.log("Error while sending email")
      }


    } else {
      console.error('User save failed: No _id returned');
    }


    res.status(200).json({ message: 'SignUp successful', newSysUser });
  } catch (err) {
    res.status(500).json({ message: 'SignUp error', error: err.message });
  }
};

exports.updatePassword = async (req, res) => {
  var userId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(404).json({ message: "Invalid id" });
    }
  const {  password } = req.body;

  try {
    const updatedUser = await userService.updatePasswordById(userId, password);
    if (!updatedUser) return res.status(400).json({ message: 'User Not Found' });

    res.status(200).json({ message: 'Password updated successfully', updatedUser });
  } catch (err) {
    res.status(500).json({ message: 'Update error', error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  var userId = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(404).json({ message: "Invalid id" });
  }
  const {  firstName, lastName, email, address, city, state, zipCode, country } = req.body;

  try {
    const updatedUser = await userService.updateUserDetailsById(userId, firstName, lastName, email, address, city, state, zipCode, country);
    if (!updatedUser) return res.status(400).json({ message: 'User Not Found' });

    res.status(200).json({ message: 'User details updated successfully', updatedUser });
  } catch (err) {
    res.status(500).json({ message: 'Update error', error: err.message });
  }
}

exports.verifytoken = async (req, res) => {
  var paramToken = req.query.token;

  try {
    console.log(paramToken);
    
    const userToken = await tokenService.getTokenByToken(paramToken);
    if (!userToken) return res.status(400).json({ message: 'Invalid token', token: userToken });

    const now = new Date();
    if(userToken.expiredAt > now) return res.status(400).json({ message: 'Token Expired' });
    
    var user = await userService.getUserById(userToken.userId);
    if (!user) return res.status(400).json({ message: 'User Not Found' });

    res.status(200).json({ message: 'Token Verified and user fetched', user });
  } catch (err) {
    res.status(500).json({ message: 'Token error', error: err.message });
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

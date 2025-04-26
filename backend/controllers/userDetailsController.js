const User = require('../modals/userDetails');
const bcrypt = require('bcryptjs');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

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

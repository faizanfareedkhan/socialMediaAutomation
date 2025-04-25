 
const User = require('../modals/userDetails');
const bcrypt = require('bcryptjs');

// Signup
exports.signup = async (req, res) => {
  const { firstName, lastName, email, password, profile } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Email already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ firstName,lastName,email,password: hashedPassword,profile});

    await user.save();
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (err) {
    res.status(500).json({ message: 'Signup error', error: err.message });
  }
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body; // NOTE: profile NOT needed for login match

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


// Social Login (Google or Facebook)
exports.socialLoginSuccess = async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  res.status(200).json({
    message: 'Social login successful',
    user: req.user,
  });
};

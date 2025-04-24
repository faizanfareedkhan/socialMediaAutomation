// const User = require("../modals/userSinup");
// const bcrypt = require("bcryptjs");

// // Custom Signup
// exports.customSignup = async (req, res) => {
//   const { email, password, name } = req.body;

//   try {
//     const userExists = await User.findOne({ email, provider: 'custom' });
//     if (userExists) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({
//       email,
//       password: hashedPassword,
//       name,
//       provider: 'custom'
//     });

//     await newUser.save();
//     res.status(201).json({ message: "User registered", user: newUser });
//   } catch (err) {
//     res.status(500).json({ message: "Signup error", error: err.message });
//   }
// };

// // Custom Login
// exports.customLogin = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email, provider: 'custom' });
//     if (!user) return res.status(400).json({ message: "Invalid email" });

//     const match = await bcrypt.compare(password, user.password);
//     if (!match) return res.status(400).json({ message: "Invalid password" });

//     res.status(200).json({ message: "Login successful", user });
//   } catch (err) {
//     res.status(500).json({ message: "Login error", error: err.message });
//   }
// };

// // Social Login
// exports.socialLogin = async (req, res) => {
//   const { email, name, avatar, provider } = req.body;

//   try {
//     let user = await User.findOne({ email, provider });

//     if (!user) {
//       user = new User({ email, name, avatar, provider });
//       await user.save();
//     }

//     res.status(200).json({ message: "Social login success", user });
//   } catch (err) {
//     res.status(500).json({ message: "Social login error", error: err.message });
//   }
// };


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

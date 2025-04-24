const User = require("../modals/user"); // Ensure correct path
const { hashPassword, verifyPassword } = require("../hashing/bcryptHasing");
const { encrypt, decrypt } = require("../hashing/cryptoHashing")


// Get All Users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    const decryptedUsers = users.map(user => ({
      ...user.toObject(),
      emailAddress: decrypt(user.emailAddress),
    }));

    res.status(200).json(decryptedUsers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error: error.message });
  }
};

// Get User by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.emailAddress = decrypt(user.emailAddress);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user", error: error.message });
  }
};

// Register a New User
exports.registerUser = async (req, res) => {
  try {
    const { firstName, lastName, emailAddress, password, confirmPassword } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !emailAddress || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Validate password length
    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Encrypt email before checking in database
    const encryptedEmail = encrypt(emailAddress);

    // Check if user already exists
    const existingUser = await User.findOne({ emailAddress: encryptedEmail });
    if (existingUser) {
      return res.status(400).json({ message: "Email address already taken" });
    }

    // Hash the password before saving
    const hashedPassword = await hashPassword(password);

    // Create a new user
    const newUser = new User({
      firstName,
      lastName,
      emailAddress: encryptedEmail,
      password: hashedPassword,
    });

    await newUser.save();

    return res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    return res.status(500).json({ message: "Error registering user", error: error.message });
  }
};

// User Login
exports.loginUser = async (req, res) => {
  try {
    const { emailAddress, password } = req.body;

    if (!emailAddress || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const encryptedEmail = encrypt(emailAddress);

    // Check if user exists
    const user = await User.findOne({ emailAddress: encryptedEmail });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Verify password
    const isMatch = await verifyPassword(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    return res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    return res.status(500).json({ message: "Error logging in", error: error.message });
  }
};

// Update User
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    updatedUser.emailAddress = decrypt(updatedUser.emailAddress);
    res.status(200).json({ message: "User updated", updatedUser });
  } catch (error) {
    res.status(500).json({ message: "Error updating user", error: error.message });
  }
};

// Delete User
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error: error.message });
  }
};

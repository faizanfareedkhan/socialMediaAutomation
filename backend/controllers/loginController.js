const User = require("../modals/login"); // Ensure correct path
const { hashPassword, verifyPassword } = require("../hashing/bcryptHasing");
const { encrypt, decrypt } = require("../hashing/cryptoHashing");

exports.login = async (req, res) => {
    try {
      console.log("Received Email:", req.body.email);
      console.log("Received Password:", req.body.password);
  
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
      }
  
      //  Encrypt email and search in DB
      const encryptedEmail = encrypt(email);
      console.log("Encrypted Email for DB Lookup:", encryptedEmail);
  
      //  Find user
      const user = await User.findOne({ emailAddress: encryptedEmail });
  
      if (!user) {
        console.log(" User not found in DB!");
        return res.status(400).json({ message: "Invalid email or password" });
      }
  
      console.log("User Found:", user);
  
      //  Check Password Hashing
      console.log("Stored Hashed Password in DB:", user.password);
      const isMatch = await verifyPassword(password, user.password);
      console.log("Password Match Result:", isMatch);
  
      if (!isMatch) {
        console.log(" Password mismatch!");
        return res.status(400).json({ message: "Invalid email or password" });
      }
  
      return res.status(200).json({ 
        message: "Login successful", 
        user: {
          id: user._id,
          email: decrypt(user.email) 
        }
      });
    } catch (error) {
      console.error("Login Error:", error);
      return res.status(500).json({ message: "Error logging in", error: error.message });
    }
  };
  
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const Login = mongoose.model("Login", UserSchema, "logins"); // Ensure correct collection name

module.exports = Login;

// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     trim: true
//   },
//   email: {
//     type: String,
//     required: true,
//     lowercase: true,
//     unique: true,
//     trim: true
//   },
//   password: {
//     type: String,
//     required: function () {
//       return this.provider === 'custom';
//     }
//   },
//   avatar: {
//     type: String,
//     default: ''
//   },
//   provider: {
//     type: String,
//     enum: ['custom', 'google', 'facebook'],
//     required: true
//   }
// }, {
//   timestamps: true
// });

// module.exports = mongoose.model("UserLogin", userSchema, "usersLogin");


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile: {
    type: Object,
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model('UserDetails', userSchema, 'UserDetails');

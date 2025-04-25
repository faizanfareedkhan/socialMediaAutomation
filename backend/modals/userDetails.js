const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile: {
    type: Object,
    required: true,
  },
  googleId: { type: String, default: null },
  facebookId: { type: String, default: null }
},

{ timestamps: true });

module.exports = mongoose.model('UserDetails', userSchema, 'UserDetails');

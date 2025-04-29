const mongoose = require('mongoose');

const sysUserToken = new mongoose.Schema({
  token: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,  // 👈 Refers to ObjectId
    ref: 'sysUser'                            // 👈 Name of the model being referenced
  },
  isExpired: Boolean,
  createdAt: { type: Date, default: Date.now }
  
});

module.exports = mongoose.model('sysUserToken', sysUserToken, 'sysUserToken');
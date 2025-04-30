const mongoose = require('mongoose');

const sysUser = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, required: true, unique: true },
  password: String,
  phoneNo: String,
  companyName: String,
  address: String,
  city: String,
  state: String,
  zipcode: String,
  country: String,
  isActive: Boolean,
  failedLoginAttempts: {
    type: Number,
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} is not an integer'
    }
  },
  isBlocked: Boolean,
  isPaymentVerified: Boolean,
  workSpaceId: {
      type: mongoose.Schema.Types.ObjectId,  // 👈 Refers to ObjectId
      ref: 'workspaces'                            // 👈 Name of the model being referenced
    },
  
});

module.exports = mongoose.model('sysUser', sysUser, 'sysUser');
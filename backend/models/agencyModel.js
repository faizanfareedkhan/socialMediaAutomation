const mongoose = require("mongoose");

const agencySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  userId: {type: mongoose.Schema.Types.ObjectId,  // 👈 Refers to ObjectId
      ref: 'sysUser'   },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Agency", agencySchema, "agencies");

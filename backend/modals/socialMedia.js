const mongoose = require('mongoose');

const socialMediaSchema = new mongoose.Schema({
  platform: { 
    type: String, 
    required: true,  
  },
  userId: { 
    type: String, 
    required: true,  
  },
  profileData: {
    name: { type: String },
    email: { type: String },
    avatar: { type: String },
    accessToken: { type: String }
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model('SocialMedia', socialMediaSchema, 'SocialMedia');

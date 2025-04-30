const mongoose = require('mongoose');
 
const agencyUserSchema = new mongoose.Schema({
    agencyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Agency', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    userRole: { type: String},
    
    });

    module.exports = mongoose.model('AgencyUser', agencyUserSchema, 'AgencyUser');
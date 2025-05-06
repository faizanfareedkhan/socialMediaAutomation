const SysTempUser = require('../models/sysTempUser');
const token = require('../utilities/jwtTokenService');


const createTempUser = async function(email) {
  try {
    console.log("check Create Temp User email");
    var newToken = await token.createToken(Math.random().toString(), email);
    const existingUser = await SysTempUser.findOne({email: email});
    console.log("check the exisiting user", req.body);
    if (existingUser) {
        return await SysTempUser.findByIdAndUpdate(existingUser._id, 
            {token: newToken, expiryDate: new Date(Date.now() + 10 * 60 * 1000), isExpired: false}
            , {new: true});
    }
    else{
        console.log("check sysTemp");
        const tempUser = new SysTempUser();
        tempUser.email = email;
        tempUser.token = newToken;
        tempUser.expiryDate = new Date(Date.now() + 10 * 60 * 1000); // 10 min expiry
        return await tempUser.save();        
    }
    
  } 
  catch (error) {
    throw new Error('Error creating temporary user: ' + error.message);
  }
}

const getTempUserByToken = async function(token) {
    console.log("check getUserToken");
  try{
        return await SysTempUser.findOne({token: token});       
    }
    catch (error) {
        throw new Error('Error retrieving temporary user: ' + error.message);
    }
}

module.exports={createTempUser, getTempUserByToken};
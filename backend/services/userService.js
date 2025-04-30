const sysUser = require('../modals/sysUserModel');

const createUser = async function (email, firstName, lastName, password, address, city, state, zipCode, country ){
  
  try {
      console.log("Adding User");
        
        const newSysUser = new sysUser();
        newSysUser.firstName = firstName;
        newSysUser.lastName = lastName;
        newSysUser.email = email;
        newSysUser.password = password;
        newSysUser.address = address;
        newSysUser.city = city;
        newSysUser.state = state;
        newSysUser.zipcode = zipCode;
        newSysUser.country = country;
        newSysUser.isActive = true;
        newSysUser.failedLoginAttempts = 0;
        newSysUser.isBlocked = false;
        newSysUser.isPaymentVerified = false;
        let user = await newSysUser.save();
        console.log("User is added");
      return user;
    
  } catch (err) {
    console.error(err);
    return null;
  }
}

const getUserByEmail = async function (email){
  
  try {
    let user = await sysUser.findOne({ email: email });
    return user;
    
  } catch (err) {
    console.error(err);
    return null;
  }
}

const getUserById = async function(id) {
  try {
    var getUser = await sysUser.findById(id);
    return getUser;
  } catch (error) {    
    return null;
  }
}

module.exports = { createUser, getUserByEmail, getUserById };
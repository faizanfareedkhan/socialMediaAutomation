const tempUserService = require('../services/tempUserService');
const userService = require('../services/userService');
const userTokenService = require('../services/sysUserTokenService');

const emailService = require('../utilities/emailService');
const file = require('../utilities/fileReadService');

async function sendSignUpEmail(tokenString, emailString){
  console.log("Reading html file");
  let htmlFile = await file.readFileFromPath('../emailtemplates/senduserlink.html');
  console.log("Replacing data in html file");
  htmlFile = htmlFile.replace("{userToken}", tokenString);
  htmlFile = htmlFile.replace("{email}", emailString);
  
  console.log("Sending email");
  var emailSent =  await emailService.sendEmail(emailString, "Your sign-in link", htmlFile);
  if(emailSent)
  {
    console.log("email sent");
    return true;
  }
  else{
    console.log("Error while sending email");
    return false;
  }
}


exports.signup = async (req, res) => {
    console.log(req.body);
    const { email } = req.body;
    try {
        var existingUser = await userService.getUserByEmail(email);
        if(existingUser){
            var userToken = await userTokenService.createUserToken(existingUser._id, existingUser.email);
            var emailSent = sendSignUpEmail(userToken.token, email);
            return res.status(201).json({ message: 'User token is created for login', token: userToken.token });
        }
        else{
            console.log("Creating temporary user with email:", email); 
            const tempUser = await tempUserService.createTempUser(email);
            var emailSent = sendSignUpEmail(tempUser.token, email);
            return res.status(201).json({ message: 'Temp User token is created for signup', token: tempUser.token });
        }        
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getUser = async (req, res) => {
    console.log("get User",req.body);
    const { token } = req.params;
    try {
        var existingUserToken = await userTokenService.getUserTokenByToken(token);
        if(existingUserToken && !existingUserToken.isExpired)
        {
            const isExpired = new Date(existingUserToken.expiredAt) < new Date();
            if(isExpired){
                return res.status(404).json({ message: 'Token expired' });
            }
            var existingUser = await userService.getUserById(existingUserToken.userId);
            return res.status(200).json({ message: 'Token is Verified', userType: 'Existing user', email: existingUser.email  });
        }
        else{
            console.log("Retrieving temporary user with token:", req.body);
            const tempUser = await tempUserService.getTempUserByToken(token);            
            if (!tempUser) {
                return res.status(404).json({ message: 'No record found with provided token' });
            }
            const isExpired = new Date(tempUser.expiryDate) < new Date();
            if(isExpired){
                return res.status(404).json({ message: 'Token expired' });
            }
            console.log(req.body);
            return res.status(200).json({ message: 'Token is Verified', userType: 'New user', email: tempUser.email  });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

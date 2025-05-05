const tempUserService = require('../services/tempUserService');
const tokenService = require('../services/tokenService');

exports.signup = async (req, res) => {
    console.log(req.body);
    const { email } = req.body;
    try {
        console.log("Creating temporary user with email:", email); 
        const tempUser = await tempUserService.createTempUser(email);
        res.status(201).json({ message: 'Temporary user created', tempUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getUser = async (req, res) => {
    console.log("get User",req.body);
    const { token } = req.params;
    try {
        console.log("Retrieving temporary user with token:", req.body);
        const tempUser = await tempUserService.getTempUserByToken(token);
        console.log("tempUserCheck", req.body);
        if (!tempUser) {
            return res.status(404).json({ message: 'Temporary user not found' });
        }
        console.log(req.body);
        res.status(200).json({ message: 'Temporary user retrieved', tempUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const express = require('express');
const router = express.Router();
const userDetailsController = require('../controllers/userDetailsController');

// router.post('/signup', userDetailsController.signup);
// router.post('/login', userDetailsController.login);
router.post('/signUpEmail', userDetailsController.signUpWithEmail);
router.get('/verifytoken', userDetailsController.verifytoken);
router.put('/updatePassword', userDetailsController.updatePassword);       //  exists
router.put('/updateUser', userDetailsController.updateUser);       //  this is the correct function name
router.post('/google-login', userDetailsController.googleLoginWithToken); // <-- Google Login Route
router.post('/facebook-login', userDetailsController.facebookLoginWithToken); // <-- Facebook Login Route

module.exports = router;

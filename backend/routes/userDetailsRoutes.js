 
const express = require('express');
const router = express.Router();
const passport = require('passport');
 const signupController = require("../controllers/userDetailsController")

router.post('/signup',signupController.signup);
router.post('/login', signupController.login);


router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Handle callback from Google
router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login-failed' }),
  signupController.socialLoginSuccess
);

//  Facebook Authentication 
// Start Facebook OAuth login
router.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));

// Handle callback from Facebook
router.get('/auth/facebook/callback',passport.authenticate('facebook', { failureRedirect: '/login-failed' }),
  signupController.socialLoginSuccess
);

module.exports = router;

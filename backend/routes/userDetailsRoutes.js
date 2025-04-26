const express = require('express');
const router = express.Router();
const authController = require('../controllers/userDetailsController');

router.post('/signup', authController.signup);
router.post('/login', authController.login);

router.post('/google-login', authController.googleLoginWithToken); // <-- Google Login Route

module.exports = router;

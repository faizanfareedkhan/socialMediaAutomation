const express = require('express');
const router = express.Router();
const userDetailsController = require('../controllers/userDetailsController');

router.post('/signup', userDetailsController.signup);
router.post('/login', userDetailsController.login);

router.post('/google-login', userDetailsController.googleLoginWithToken); // <-- Google Login Route

module.exports = router;

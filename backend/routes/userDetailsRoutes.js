// const express = require('express');
// const router = express.Router();
// const userController = require('../controllers/signupController');

// // Custom Auth
// router.post('/custom-signup', userController.customSignup);
// router.post('/login', userController.customLogin);

// // Social Auth
// router.post('/social-login', userController.socialLogin);

// module.exports = router;



const express = require('express');
const router = express.Router();
 const signupController = require("../controllers/userDetailsController")

router.post('/signup',signupController.signup);
router.post('/login', signupController.login);

module.exports = router;

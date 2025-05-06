const router = require('express').Router();
const tempUserController = require('../controllers/tempUserController');

router.post('/signup', tempUserController.signup);
router.post('/getUser/token', tempUserController.getUser);


module.exports = router;
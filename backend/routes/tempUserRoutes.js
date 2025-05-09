const router = require('express').Router();
const tempUserController = require('../controllers/tempUserController');

router.post('/signup', tempUserController.signup);
router.get('/getUser', tempUserController.getUser);


module.exports = router;
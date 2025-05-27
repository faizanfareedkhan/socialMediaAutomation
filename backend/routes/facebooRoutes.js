const express = require('express');
const router = express.Router();
const facebookController = require('../controllers/facebookController');


router.post('/post-text', facebookController.postTextOnFacebook);
router.post('/post-image-url', facebookController.postImagesByURLOnFacebook);
router.post('/post-image-file', facebookController.postImagesByFileOnFacebook);
router.post('/post-video', facebookController.postVideoOnFacebook);

module.exports = router;
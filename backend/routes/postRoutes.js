const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/getallposts', postController.getAllPosts);        // Get All Posts
router.get('/getposts/:id', postController.getPostById);    // Get Post by ID
router.post('/addposts', postController.addPost);           // Add New Post
router.put('/updateposts/:id', postController.updatePost);     // Update Post
router.delete('/deleteposts/:id', postController.deletePost);  // Delete Post

module.exports = router;

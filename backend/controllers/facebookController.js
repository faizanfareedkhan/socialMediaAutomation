const facebookService = require('../services/facebookService');

exports.postTextOnFacebook = async (req, res) => {
    const { message } = req.body;
    
    try {
        if (!message || typeof message !== 'string') {
            return res.status(400).json({ error: 'Invalid message format' });
        }   
        const postId = await facebookService.postTextOnFacebook(message);
        res.json({ success: true, postId });
    } catch (error) {
        console.error('Error posting text on Facebook:', error);
        res.status(500).json({ error: 'Failed to post text on Facebook' });
    }
    }

exports.postImagesByURLOnFacebook = async (req, res) => {
    const { message, imageUrl } = req.body;
    
    try {
        const postId = await facebookService.postImagesByURLOnFacebook(message, imageUrl);
        res.json({ success: true, postId });
    } catch (error) {
        console.error('Error posting image on Facebook:', error);
        res.status(500).json({ error: 'Failed to post image on Facebook' });
    }
}

  exports.postImagesByFileOnFacebook = async (req, res) => {    
    const { message } = req.body;
    const imageFile = req.file; // Assuming you're using multer for file uploads

    if (!imageFile) {
        return res.status(400).json({ error: 'No image file provided' });
    }

    try {
        const postId = await facebookService.postImagesByHeaderOnFacebook(message, imageFile);
        res.json({ success: true, postId });
    } catch (error) {
        console.error('Error posting image on Facebook:', error);
        res.status(500).json({ error: 'Failed to post image on Facebook' });
    }   
}

exports.postVideoOnFacebook = async (req, res) => {
    const { message } = req.body;
    const videoFile = req.file; // Assuming you're using multer for file uploads

    if (!videoFile) {
        return res.status(400).json({ error: 'No video file provided' });
    }

    try {
        const postId = await facebookService.postVideoByHeaderOnFacebook(message, videoFile);
        res.json({ success: true, postId });
    } catch (error) {
        console.error('Error posting video on Facebook:', error);
        res.status(500).json({ error: 'Failed to post video on Facebook' });
    }
};


const express = require('express');
const fs = require('fs');
const FormData = require('form-data');
const axios = require('axios');


const PAGE_ACCESS_TOKEN = 'EAAsni4llAEsBO4UfeSvQ3ylJi4ZBRQK84u91JZCIqft1RCBZBHdVNGTOoiN8e7ZBh0zTt4FKzAL0HAwwyf426ZAEx9IS6IQfeStbIpbH2ZBmyuuHybeax65fqOthD6ZAC9tuqsyHaLSg6qghsiK2YiD5okLONp56bgGxHvZBZBUZCqCyAS50OnWAaPx7GQDMBpSXtjqT9lZB58kbjtZAUQBZBedFo22AmvmkZD';
const APP_SECRET = '8fac54ac7b5c98ce5cf177148197270f';
const PAGE_ID = '61576755361238';
const CLIENT_TOKEN = 'd3fbeb3c5f330a20d2b4cb3df9d2ea4f';

const postTextOnFacebook = async function(message) {
  try {
    const response = await axios.post(
      `https://graph.facebook.com/v19.0/me/feed`,
      {
        message: message
      },
      {
        params: {
          access_token: PAGE_ACCESS_TOKEN
        }
      }
    );

    res.json({
      success: true,
      postId: response.data.id
    });

  } catch (error) {
    console.error('Facebook Post Error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to post to Facebook' });
  }
}


const postImagesByURLOnFacebook = async function(message, imageUrl) {
  try {
    const response = await axios.post(
      `https://graph.facebook.com/v19.0/${PAGE_ID}/photos`,
      {
        url: imageUrl,
        caption: message
      },
      {
        params: {
          access_token: PAGE_ACCESS_TOKEN
        }
      }
    );

    res.json({
      success: true,
      postId: response.data.post_id || response.data.id
    });

  } catch (error) {
    console.error('Image Post Error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to post image to Facebook' });
  }
}

const postImagesByHeaderOnFacebook = async function(path) {
  try {
    const form = new FormData();
    form.append('caption', 'Hello from Express with local image!');
    form.append('access_token', PAGE_ACCESS_TOKEN);
    form.append('source', fs.createReadStream(path)); // replace with your local path

    const response = await axios.post(
      `https://graph.facebook.com/v19.0/${PAGE_ID}/photos`,
      form,
      {
        headers: form.getHeaders()
      }
    );
    res.json({
      success: true,
      postId: response.data.post_id || response.data.id
    });

  } catch (error) {
    console.error('Local Image Post Error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to post local image to Facebook' });
  }
}

const postVideoByHeaderOnFacebook = async function(path) {
  try {
    const form = new FormData();
    form.append('access_token', PAGE_ACCESS_TOKEN);
    form.append('description', 'My video caption');
    form.append('source', fs.createReadStream(path));

    const response = await axios.post(
      `https://graph.facebook.com/v19.0/${PAGE_ID}/videos`,
      form,
      { headers: form.getHeaders() }
    );

    res.json({
      success: true,
      videoId: response.data.id
    });

  } catch (error) {
    console.error('Video Upload Error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to upload video' });
  }
}

module.exports={postTextOnFacebook, postImagesByURLOnFacebook, postImagesByHeaderOnFacebook, postVideoByHeaderOnFacebook};
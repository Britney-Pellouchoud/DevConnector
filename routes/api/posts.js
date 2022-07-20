const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Post = require('../../models/Post');
    


// @route   GET api/posts
// @desc    Test route
// @access  Public
//router.get('/', (req, res) => res.send('Posts route'));


// @route    GET api/posts
// @desc     Get all posts
// @access   Private
router.get('/', auth, async (req, res) => {
    try {
      const posts = await Post.find().sort({ date: -1 });
      res.json(posts);
    } catch (err) {
        console.log("AHHHHHHHH!");
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });
  

module.exports = router;
const express = require('express');

const apiController = require('../controllers/api');

const router = express.Router();

// GET /api/posts
router.get('/posts', apiController.getPosts);

// POST /api/post
router.post('/calc', apiController.createPost);

module.exports = router;
const express = require('express')
const Blog = require('../models/blog');
const router = express.Router();
const controller = require('../controllers/blogController')
const titles = ["Home Page", "About Page", "Create Page", "404 Not Found"]

router.get('/', controller.blog_index);

router.post('/', controller.blog_create_post);

router.get('/create', controller.blog_create_get);

router.get('/:id', controller.blog_details);

router.delete('/:id', controller.blog_delete);

module.exports = router
const express = require('express')
const { getpost, createPost } = require('../controllers/post')
const validator = require('../helpers/index')

const router = express.Router()

router.get("/", getpost);
router.post("/post", validator.createPostValidator, createPost);


module.exports = router;
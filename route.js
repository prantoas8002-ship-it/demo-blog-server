const express = require('express');

const {getBlog, createBlog, registerUser, loginUser} = require("./controller");
const { checkUser } = require('./middleware');

const router = express.Router();

router.get('/blogs' , getBlog);
router.post('/blogs' ,checkUser, createBlog);
router.post('/register' , registerUser);
router.post('/login' , loginUser);


module.exports = router;
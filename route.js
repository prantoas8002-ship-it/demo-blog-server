const express = require('express');
const rateLimit = require('express-rate-limit');

const { getBlog, createBlog, registerUser, loginUser } = require("./controller");
const { checkUser } = require('./middleware');


const router = express.Router();

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 requests per windowMs
    skipSuccessfulRequests: true, // Skip counting successful requests
    message: { status: "fail"  , message: 'Too many requests, please try again later.' }
});

router.get('/blogs', getBlog);
router.post('/blogs', checkUser, createBlog);
router.post('/register', authLimiter, registerUser);
router.post('/login', authLimiter, loginUser);


module.exports = router;
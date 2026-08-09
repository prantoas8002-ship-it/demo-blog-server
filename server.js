const express = require('express');
require('dotenv').config();
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const MONGODB_URI = process.env.MONGODB_URI;

app.use(express.json());
app.use(cors({origin: "*"}));

// conncetion to database

const connectToDatabase = async function () {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("connected to database");
    } catch (error) {
        console.error("error conneting to database", error);
    }
}

const globalLimit = rateLimit({
    windowMS: 15 * 60 * 60,
    max: 100,
    message: "too many request in this IP , Please try again after 15 minutes"
})

app.use(globalLimit);

app.use('/api', require('./route'));

app.listen(4000, async () => {
    await connectToDatabase();
    console.log("server is running on port 4000");
})

const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const app = express();

const MONGODB_URI = process.env.MONGODB_URI;

app.use(express.json());

// conncetion to database

const connectToDatabase = async function (){
    try{
        await mongoose.connect(MONGODB_URI);
        console.log("connected to database");
    }catch(error){
        console.error("error conneting to database",error);
    }
}



app.use('/api' , require('./route'));

app.listen(4000 , async()=>{
    await connectToDatabase();
    console.log("server is running on port 4000");
})

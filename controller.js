const jwt = require('jsonwebtoken');
require("dotenv").config();
const {blogModel} = require('./model');
const {userModel} = require('./model');
const bcrypt = require('bcrypt');

// getblogs api function

const getBlog =  async  (req, res) => {
    try{
        const result = await blogModel.find();
        res.status(200).json({
            message : "success!",
            content : result
        })
    }catch(error){
        console.error("error occured", error);
        res.status(500).json({message : "error getting books"})
    }
}

//creating a function to get userid 

const getUser = async (token)=>{
    token = token.split(" ")[1];
    const decoded = jwt.verify(token , process.env.JWT_SECRET_KEY);
    const userId = decoded.userId;
    const user = await userModel.findById(userId);
    return user;
}

// create blogs api function

const createBlog = async (req , res)=>{
    try{
    const newBlog = req.body;
    const author = await getUser(req.headers.authorization);
    const result = await blogModel.create({...newBlog , userId : author._id});
    res.status(200).json({
        message : "Success!" ,
        content : result
    })
} catch(error){
    console.error("unsuccess!" , error);
    res.status(500).json({
        message  :"error creating book"
    })
}

}

// register api

const registerUser = async (req , res)=>{
    try{
        const info = req.body;
        
        // hash the password
        info.password = await bcrypt.hash(info.password , 10);


        const result = await userModel.create(info);
        res.status(200).json({
            message : "user registered successfully ",
            body : result
        })

    }catch(error){
        console.error("error occured creating user..." , error);
        res.status(500).json({
            message : "user register unsuccessfull..."
        })
    }
}

//login api

const loginUser = async (req , res)=>{
    try{
        const info = req.body;
        const user =await userModel.findOne({"email" : info.email});
        if(!user)
        {
            return res.status(401).json({message : "invalid username or password"});
        }
        const isMatch = await bcrypt.compare(info.password , user.password);

        if(isMatch)
        {
            const token = jwt.sign(
                {userId : user._id},
                process.env.JWT_SECRET_KEY,
                {expiresIn : "7d"}
            )
            res.status(200).json({
                message : "success!",
                token : token
            })
        }
        else{
            res.status(401).json({message : "invalid username or password"});
        }

    }catch(error){
        console.error("login falid : " , error);
        res.status(500).json({
            message : "invalid username or password"
        })
    }

}

module.exports = { getBlog , createBlog , registerUser , loginUser} ;
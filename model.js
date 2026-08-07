const mongoose = require('mongoose');

const blogSchema =new mongoose.Schema({
    title : {type : String , required : true},
    content : {type : String , required : true},
    userId : {type : mongoose.Schema.Types.ObjectId , ref : "user"}
})

const userSchema =new mongoose.Schema({
    name : {type : String , required : true},
    email : {type : String , required : true},
    password : {type:String , required : true}
})

const blogModel = mongoose.model("Blogs" , blogSchema);
const userModel = mongoose.model("User" , userSchema);

module.exports = {blogModel , userModel};
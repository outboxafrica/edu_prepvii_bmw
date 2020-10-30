const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    
    post:{type:String,required:true},

    userId:{type: String, required:true},

    createdAt:{type:Date ,default:Date.now},

    comment:[{type:Schema.Types.ObjectId,ref:'Comments'}]

});

const Posts = mongoose.model('post',PostSchema); 
module.exports = Posts;
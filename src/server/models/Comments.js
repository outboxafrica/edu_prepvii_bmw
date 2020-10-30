const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    
    comment:{type:String,required:true},

    userId:{type: String, required:true},

    createdAt:{type:Date ,default:Date.now},

    post:[{type:Schema.Types.ObjectId,ref:'Posts'}]

});

const Comments = mongoose.model('comment',CommentSchema); 
module.exports = Comments;
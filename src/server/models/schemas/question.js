const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//create question schema
const Question = new Schema({

    username:String,
    question:String,
    answer:String
    });

module.exports = Question;
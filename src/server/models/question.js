const mongoose = require('mongoose');

//import the QuestionSchema
const QuestionSchema = require('./schemas/question');

module.exports = mongoose.model('collectionQn',QuestionSchema);
const express = require('express');
const router = express.Router();
const Question =require('../models/question');
const bodyParser = require('body-parser');

//body-parser middleware
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());


//list all Qns from db
router.get('/',(req,res) =>{
    Question.find().sort({createdAt:-1})
     .then((result) => {
       res.render('index',{data:result})
     })
     .catch((err) => {
       console.log(err)
     })
   });


//Question form
router.get('/create',(req,res) =>{
  Question.find()
   .then((result) => {
    res.render('create')
   })
   .catch((err) => {
     console.log(err)
   })
 });

//list a Qn from db
router.get('/:id',(req,res) =>{
  Question.findById({_id:req.params.id})
    .then((result) =>{
        res.render('details',{data:result});
    })
    .catch((err) =>{
        console.log(err)
    })
  });

  //delete a Qn from db
  router.delete('/:id',(req,res) =>{
    Question.findByIdAndDelete({_id:req.params.id})
    .then((result) =>{
        res.json({redirect:'/api'})
    })
    .catch((err) =>{
        console.log(err)
    })
  });

//create question
router.post('/create',(req,res) =>{
    const dataObj = new Question();
    dataObj.username = req.body.user;
    dataObj.question = req.body.qn;
    dataObj.answer = req.body.ans;
    dataObj.save()
    .then((result) => {
      res.redirect('/api')
    })
    .catch((err) => {
      console.log(err)
    })
  });

module.exports = router;

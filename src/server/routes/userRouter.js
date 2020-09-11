const express = require('express');
const router = express.Router();
const User =require('../models/user');
const bodyParser = require('body-parser');

//body-parser middleware
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());


  //signup  form
  router.get('/signup',(req,res) =>{
    User.find()
     .then((result) => {
       res.render('signup')
     })
     .catch((err) => {
       console.log(err)
     })
   });

  //create A/C
router.post('/signup',(req,res) =>{
  const dataObj = new User();
  dataObj.username = req.body.user;
  dataObj.password = req.body.pass;
  dataObj.save()
  .then((result) => {
    res.redirect('/api')
  })
  .catch((err) => {
    console.log(err)
  })
});

module.exports = router;

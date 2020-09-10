const Usermodel =require('../models/User');
const jwt = require('jsonwebtoken');
const userScheme = require('../models/schemas/user');


module.exports.signup_get = (req,res) =>{
  // res.json(newUser);
}

module.exports.login_get = (req,res) =>{
  // res.json(newUser);
 }
//creating token
const createToken = (id) =>{
  return jwt.sign({id},'secret');
}


  module.exports.signup_post = (req,res) =>{
   const{user,pass} = req.body;

   let newUser = new Usermodel({
    username:user,
    password:pass
   })
   newUser.save()
   .then((newUser) => {
    const token = createToken(newUser._id);
    res.cookie('jwt',token);
    res.json({newUser:newUser,token:token});
  })
  .catch((err) => {
    res.send(err.message);
  })
   }

module.exports.login_post = async(req,res) =>{
  const{user,pass} = req.body;  
  
  try{
      const newUser = await Usermodel.login(user,pass);
      const token = createToken(newUser._id);
      res.cookie('jwt',token);
      res.json({newUser:newUser,token:token});
    }
    catch(err){
      res.json(err.message);
    }

  }
 
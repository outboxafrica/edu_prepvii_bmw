const Usermodel =require('../models/User');
const jwt = require('jsonwebtoken');
const userScheme = require('../models/schemas/user');

//creating token
const createToken = (id) =>{
  return jwt.sign({id}, process.env.SECRET);
}


  module.exports.signup_post = (req,res) =>{
   const{username,password} = req.body;

   let newUser = new Usermodel({
    username:username,
    password:password
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
  const{username,password} = req.body;  
  
  try{
      const newUser = await Usermodel.login(username,password);
      const token = createToken(newUser._id);
      res.cookie('jwt',token);
      res.redirect('/api/');
    }
    catch(err){
      res.json(err.message);
    }

  }
 
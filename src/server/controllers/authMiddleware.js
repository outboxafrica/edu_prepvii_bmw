const jwt = require('jsonwebtoken');

const requireAuth = (req,res,next) => {
    const token = req.cookies.jwt;

//check json web token exists & is verified
if(token){
 jwt.verify(token,'secret',(err,decodedToken) =>{
     if(err){
        res.send(err,message);
        res.redirect('/login');
     }
     else{
        res.send(decodedToken);
        // res.redirect('/login');
        // next();
     }
 })
}
else{
    res.redirect('/login');
}
}


module.exports = {requireAuth};
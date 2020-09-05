let jwt = require('jsonwebtoken');
const config = require('./config.js');

let checkToken = (req, res, next) => {
 let token = req.headers['x-access-token'] || req.headers['authorization']; 
 // Express headers are auto converted to lowercase
  if (token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length); //authentication token characters are set to 7
  }

  if (token) {
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Token is not valid'
        });//if web token is false it returns token vaild
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.json({
      success: false,
      message: 'Auth token is not supplied'
    });
  }
};

module.exports = {
  checkToken: checkToken
}
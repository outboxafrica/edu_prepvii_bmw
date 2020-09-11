const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

//create user schema
const userScheme = new Schema({

    username:String,
    password:String
    });

//encrypting password
userScheme.pre('save', async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

//static method to login user
    userScheme.statics.login=async function(username,password){
      const user = await this.findOne({username});
      if(user){
        const auth = await bcrypt.compare(password, user.password);
      if(auth){
        return user;
      }
      throw Error('Incorrect password');
    }
    throw Error('incorrect username');
}
  
module.exports = userScheme;
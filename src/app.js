
const express = require('express');
// const qnRoutes = require('./routes/qnRouter');
const qnRoutes = require('./server/routes/qnRouter');
// const authRoutes = require('./routes/authRouter');
const authRoutes = require('./server/routes/authRouter');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

//accessing static files 
app.use(express.static('src/server/public'))


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser());
 
//using routes
app.use('/api', authRoutes);
app.use('/api', qnRoutes);


module.exports = app;
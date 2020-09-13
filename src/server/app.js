
const express = require('express');
const qnRoutes = require('./routes/qnRouter');
const authRoutes = require('./routes/authRouter');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser());
 
//using routes
app.use('/api', authRoutes);
app.use('/api', qnRoutes);


module.exports = app;
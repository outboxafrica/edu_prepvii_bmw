
const express = require('express');
const Routes = require('./routes/routes');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

app.use(cookieParser());
// enable CORS policy error
app.use(cors());

//--------------------------Accessing-Static-Files -------------------------//
app.use(express.static('src/server/public'))

app.use(express.json());


//--------------------------Using-Routes----------------------------------//
app.use('/api',Routes);


module.exports = app;
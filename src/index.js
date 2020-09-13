const mongoose = require('mongoose');
require("dotenv").config();

//DataBase connection

const app = require("./server/app");
const { Mongoose } = require("mongoose");

const dbURI = 'mongodb+srv://bmwuser:bmw123@edu.4pjs5.mongodb.net/bmw-db?retryWrites=true&w=majority';

mongoose.connect(dbURI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
.then(() => {
  console.info("\nDatabase Connection Established!");
})
.catch((err) => {
  console.log("\nDatabase Connection Failed!");
  console.error("Error Details: ", err);
  console.log("\n\nDatabase Connection Failed, Retrying . . .");
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  // console.log(`Using environment: ${process.env.NODE_ENV}`);
  console.log(`Server successfully started and listening on port http://localhost:${port}`);
});

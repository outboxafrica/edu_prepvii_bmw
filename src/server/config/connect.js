//Code adopted from https://github.com/outboxafrica/edu_lookbook

require("dotenv").config();
const mongoose = require("mongoose");
const { DEVELOPMENT, LOCAL } = require("./envTypes");

let DB_URL;
switch (process.env.NODE_ENV) {
  case DEVELOPMENT:
    DB_URL = process.env.DB_URL_PROD;
    break;
  case LOCAL:
    DB_URL = process.env.DB_URL_LOC;
    break;
  default:
    DB_URL = process.env.DB_URL;
}
function establishConnection() {
  console.log("\nEstablishing Database Connection . . . ");
  mongoose
    .connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(() => {
      console.info("\nDatabase Connection Established!");
    })
    .catch((err) => {
      console.log("\nDatabase Connection Failed!");
      console.error("Error Details: ", err);
      console.log("\n\nDatabase Connection Failed, Retrying . . .");
      establishConnection();
    });
}

establishConnection();
const db = mongoose.connection;
module.exports = db;

const mongoose = require('mongoose');
require("dotenv").config();
const app = require("./server/app");

//--------------------------DB-connection------------------------//

const dbURI =  process.env.DB_URL_PROD ;
// const dbURI =  process.env.DB_URL_LOC ;

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology:
   true,
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
  console.log(`Server successfully started and listening on port http://localhost:${port}`);
});

require("dotenv").config();

//DataBase connection
// require("./server/config/connect");
require("./src/server/config/connect");

// const app = require("./server/app");
const app = require("./src/app");

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Using environment: ${process.env.NODE_ENV}`);
  console.log(`Server successfully started and listening on port http://localhost:${port}`);
});

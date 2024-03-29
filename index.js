const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");
require('dotenv').config();

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to ebdpl application." });
});

require("./app/routes/tutorial.routes.js")(app);

// set port, listen for requests
if(process.env.APP_ENV =='local'){
  const PORT = process.env.PORT
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });

}else{
  app.listen();
}

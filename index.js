let express = require("express");
let app = express();
const cors = require("cors");
let router = require("./api-routes");
let mongoose = require("mongoose");
const port = 5000;
const uri = "'mongodb://localhost/ds";

app.get("/", (req, res) => {
  res.send("Hello world");
});

//Configure express to handle post requests
//(boyd-parser)
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(express.json());

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

let db = mongoose.connection;
if (!db) {
  console.log("Connection - error");
} else console.log("Connected");

//Route to API
app.use("/stock-api", router);
app.listen(port, () => {
  console.log("I am working on " + port);
});

const express = require("express");
const app = express();
let router = require("./api-routes");
let mongoose = require("mongoose");
const port = 3000;
const uri ="mongodb+srv://tharindu:tharinduB@cluster0.vnll5.mongodb.net/StockDB?retryWrites=true&w=majority";

app.get("/", (req, res) => {
  res.send("Hello world");
});

//Route to API
app.use("/stock-api", router);

//Configure express to handle post requests
//(boyd-parser)
app.use(express.urlencoded);
app.use(express.json());

mongoose.connect(
  uri,{useUnifiedTopology:true,useNewUrlParser:true}
);

let db =  mongoose.connection;
if(!db){
     console.log("Connection - error");

}  
else
    console.log('Connected');
 

app.listen(port, () => {
  console.log("I am working on " + port);
});

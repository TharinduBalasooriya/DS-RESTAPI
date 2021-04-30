//This file handles all the routes in the api

let router = require("express").Router();
let itemController = require("./controller/item-controller");

router.get("/", (req, res) => {
  res.send("I am on API");
});

router.route("/items").get(itemController.getAllItems);
router.route("/items").post(itemController.addNewItem);
module.exports = router;

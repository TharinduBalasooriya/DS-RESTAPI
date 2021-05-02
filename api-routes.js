//This file handles all the routes in the api

let router = require("express").Router();
let itemController = require("./controller/item-controller");

router.get("/", (req, res) => {
  res.send("I am on API");
});

//get all Items
router.route("/items").get(itemController.getAllItems);

//findItembyId
router.route("/items/:id").get(itemController.getItem);

//add new Item
router.route("/items").post(itemController.addNewItem);

//delete by item id
router.route("/items/:id").delete(itemController.deleteItem);

//update by id
router.route("/items/:id").put(itemController.updateItem);
router.route("/items/:id").patch(itemController.updateItem);
module.exports = router;

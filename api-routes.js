//This file handles all the routes in the api

let router = require("express").Router();
let itemController = require("./controller/item-controller");
let cartController = require("./controller/cart-controller");
let usercontroller = require("./controller/user-controller")
let verify = require("./middleware/verifySignUP")

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

router.route("/cart/:id").get(cartController.getCartItems);
router.route("/cart/:id").post(cartController.addToCart);
router.route("/cart/:userId/:itemId").delete(cartController.removeFromCart);

//userroutes
//create new user profile
router.route("/user").post(verify.checkDuplicateUsernameOrEmail,usercontroller.signUP)
router.route("/auth/login").post(usercontroller.signIn)

module.exports = router;

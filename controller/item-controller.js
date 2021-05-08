const Item = require("../models/item");

//ADD ITEms
exports.addNewItem = (req, res) => {
  var newItem = new Item();
  newItem.Code = req.body.Code;
  newItem.Name = req.body.Name;
  newItem.Quantity = req.body.Quantity;
  newItem.Price = req.body.Price;
  newItem.Status = req.body.Status;
  newItem.ImgUrl = req.body.ImgUrl;

  newItem.save(function (err) {
    if (err) {
      res.json(err);
    } else {
      res.json({
        message: "Contact created",
        data: newItem,
      });
    }
  });
};

//creating controller function
exports.getAllItems = (req, res) => {
  Item.find({}, function (err, docs) {
    res.json(docs);
  });
};

//get item by id
exports.getItem = (req, res) => {
  Item.findById(req.params.id, function (err, item) {
    if (err) throw err;
    res.json(item);
  });
};
//update item

exports.updateItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    item.Code = req.body.Code;
    item.Name = req.body.Name;
    item.Quantity = req.body.Quantity;
    item.Price = req.body.Price;
    item.Status = req.body.Status;
    item.ImgUrl = req.body.ImgUrl;

    const i1 = await item.save();
    res.json(i1);
  } catch (err) {
    res.send(err);
  }
};
//delete by Item code
exports.deleteItem = (req, res) => {
  Item.deleteOne({ _id: req.params.id }, function (err) {
    if (err) {
      throw err;
    }
    res.json({
      message: "Delete Succesfull",
    });
  });
};
//update based on item code

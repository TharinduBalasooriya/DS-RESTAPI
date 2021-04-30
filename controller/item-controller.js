const Item = require("../models/item");

//ADD ITEms
exports.addNewItem = (req, res) => {
  var newItem = new Item();
  newItem.Code = req.body.Code;
  newItem.Name = req.body.Name;
  newItem.Quantity = req.body.Quantity;
  newItem.Price = req.body.Price;
  newItem.Status = req.body.Status;

     newItem.save(function(err){
      if(err){
          res.json(err);
      }else{
          res.json({
              message: 'Contact created',
              data: newItem
          })
      }
  });
};
//creating controller function
exports.getAllItems = (req, res) => {
  Item.find({}, function (err, docs) {
    res.json(docs);
  });
};

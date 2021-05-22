var mongoose = require("mongoose");
// Setup schema
var usertSchema = mongoose.Schema({
  username: String,
  email:String,
  password: String,
usertype:{
    type:String,
    default:"buyer",
    required:true

}

});
// Export Contact model
module.exports = mongoose.model("usermodel", usertSchema);

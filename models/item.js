let mongoose = require('mongoose')

//creating schema for Items

const itemSchema = new mongoose.Schema({
    Code : String,
    Name : String,
    Quantity: Number,
    Price : Number,
    Status : String


})

module.exports =  mongoose.model('ItemModel',itemSchema);

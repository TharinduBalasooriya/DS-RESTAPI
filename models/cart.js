const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    items: [{
        itemId: String,
        itemName: String,
        quantity: {
            type: Number,
            required: true
        },
        price: Number,
    }],
    totalBill: {
        type: Number,
        default: 0,
        required: true
    }
});

module.exports = mongoose.model('cartModel', cartSchema);
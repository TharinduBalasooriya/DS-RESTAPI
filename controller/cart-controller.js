const Cart = require("../models/cart");
const Item = require("../models/item");

exports.addToCart = async (req, res) => {
    const userId = req.params.id;
    //assigning multiple variables at once
    const {itemId, quantity} = req.body;
    try {
        let cart = await Cart.findById({userId});
        let item = await Item.findById({itemId});
        if(!item){
            res.status(404).send("Oops! Item is not found!");
        }
        const name = item.Name;
        const price = item.Price;

        // if the cart doesnt exist for the userId
        if(!cart){
            //create new cart
            const newCart = await Cart.create({
                userId,
                items:[{itemId, name, quantity, price}],
                totalBill: price * quantity
            });
            return res.status(201).send(newCart);
        }else{
            //
            const index = cart.items.findIndex(product => product.itemId === itemId);

            //if product exists in the cart
            if(index > -1){
                let product = cart.items[index];
                product.quantity = quantity + product.quantity;
                cart.items[index] = product;
            }else{
                cart.items.push({itemId, name, quantity, price});
            }

            cart.totalBill = cart.totalBill + (price * quantity);
            cart = await cart.save();
            return res.status(201).send(cart);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Oops Something went wrong!");
    }
};

exports.removeFromCart = async (req, res) => {
    const userId = req.params.userId;
    const itemId = req.params.itemId;

    try {
        const cart = await Cart.findOne({userId});
        const index = cart.items.findIndex(product => product.itemId === itemId);

        if(index > -1 ){
            let product = cart.items[index];
            cart.totalBill = cart.totalBill - (product.quantity * product.price);
            cart.items.splice(index, 1);
        }
        cart = await cart.save();
        return res.status(201).send(cart);
    } catch (error) {
        console.log(error);
        res.status(500).send("Oops Something went wrong!");
    }

};

exports.updateCartItem = (req, res) => {

};

exports.getCartItems = async (req, res) => {
    const userId = req.params.id;
    try {
        let cart = await Cart.findOne({userId});
        if(cart && cart.items.length>0){
            res.send(cart);
        }else{
            res.send(null);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Oops Something went wrong!");
    }
};
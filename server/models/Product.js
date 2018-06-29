const mongoose = require('mongoose')

var Product = mongoose.model("Product", new mongoose.Schema({
    name: {type: String, required: true, minlength: ['3', "Name must contain at least 3"]},
    price: {type: Number, required: true, min: [0.01, "Price can't be less than 0.01"]},
    qty: {type: Number, required: true, min: [0, "Quantity can't be less than 0"]},
    _id: {type: Number, required: true}
}, {timestamps: true}))

module.exports = Product

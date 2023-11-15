
const mongoose = require('mongoose');

const objectSchema = {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'provider'
    }
};

const productSchema = mongoose.Schema(objectSchema)
const Product = mongoose.model('product', productSchema)


module.exports = Product

const mongoose = require('mongoose');
const Provider = require("./providers.model");

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



// async function createProduct(title, price, description, company_name) {

//     const provider = await Provider.find({company_name});
//     const provider_id = provider[0]._id.toString();    
    
//     if (!provider) {

//         console.log('Provider not found!');
//         return;
//     }

//     const product = new Product({
//         title,
//         price,
//         description,
//         provider:provider_id
       
//     });

//     const result = await product.save();
//     console.log(result)
       

// }
module.exports = Product
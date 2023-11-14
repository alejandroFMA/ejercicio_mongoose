const Product = require("../models/products.model");
const Provider  = require("../models/providers.model");

const getProducts = async(req, res) => {
    try {
        const title  = req.params.title; 
        let Products;

        if (title) {
            Products = await Product.find({ title  });
        } else {
            Products = await Product.find({});
        }

        res.status(200).json(Products);
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    

    }

}


const createProduct = async (req, res) => {
    try {
        const { title, price, description, company_name } = req.body;

        const provider = await Provider.find({ company_name: company_name });
        if (!provider) {
            return res.status(404).send('Proveedor no encontrado');
        }

        const newProduct = new Product({
            title,
            price,
            description,
            provider: provider._id 
        });

        await newProduct.save();

        res.status(201).send(newProduct);
    } catch (error) {
        res.status(500).send(error.message);
    }
};




/* 
{
"title": "aceitunas",
"price": "2.50",
"description": "Aceitunas increibles",
"provider": "Hiperaceitunas"
}


*/ 
const updateProduct = async (req, res) => {
    try {
        const data = req.body; // El objeto completo del producto

        const title  = productData;

        const result = await Product.findOneAndUpdate(
            { title: title }, 
            { $set: data },
            { new: true, runValidators: true }
        );

        if (!result) {
            return res.status(404).send('Producto no encontrado');
        }

        res.status(200).send({ 
            message: `Producto actualizado correctamente`,
            product: result
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deleteProduct = async (req, res) => {
    try {
        const data = req.params
        const id = data.company_name;
        if(id){
            let result = await Product.deleteOne({company_name:id})
            if(result.deletedCount == 0)
                res.status(400).json({message: `producto ${id} no encontrado`});
            else
                res.status(200).json({message: "producto BORRADO", product:{data}})
        }else{
            res.status(400).json({message: "formato de producto erroneo"});
        }
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}


module.exports = { getProducts,
    createProduct,
    updateProduct,
    deleteProduct}
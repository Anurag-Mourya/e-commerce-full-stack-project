const model = require('../models/productModel');
const Product = model.Product;

//Create Product
exports.createProducts = async (req, res, next) => {

    try {
        const product = new Product(req.body);
        const createProduct = await product.save();
        res.status(201).json({
            success: true,
            createProduct
        });

    } catch (err) {
        console.error(err);
        res.status(400).json({ err });
    }

}


//Get All Products
exports.getAllproducts = (req, res) => {
    res.status(200).json({ message: 'Route is working fine' })
}
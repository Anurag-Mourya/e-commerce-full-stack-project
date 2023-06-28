const model = require('../models/productModel');
const Product = model.Product;



//Create Product -- Admin
exports.createProduct = async (req, res, next) => {

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


//Update Products
exports.updateProduct = async (req, res, next) => {
    const id = req.params.id;

    try {
        const product = await Product.findOneAndUpdate({ _id: id }, req.body);
        res.status(200).json({
            success: true,
            product
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Product not found',
            err,
        })
    }
}


//Delete Product --Admin
exports.deleteProduct = async (req, res, next) => {
    const id = req.params.id;
    try {
        const product = await Product.findOneAndDelete({ _id: id });
        res.status(200).json({
            success: true,
            product
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Product is not deleted',
            err,
        })
    }

}

//Get Product Details
exports.getProductDetails = async (req, res, next) => {
    const id = req.params.id;
    try {
        const product = await Product.findOne({ _id: id });
        res.status(200).json({
            success: true,
            product
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Product is not found',
            err,
        })
    }
}


//Get All Products
exports.getAllproducts = async (req, res) => {
    const allProducts = await Product.find();
    res.status(200).json({
        success: true,
        allProducts
    })
}


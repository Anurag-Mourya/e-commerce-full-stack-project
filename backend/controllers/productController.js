const model = require('../models/productModel');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const Product = model.Product;



//Create Product -- Admin
exports.createProduct = catchAsyncErrors(async (req, res, next) => {

    const product = new Product(req.body);

    if (!product) {
        return next(new ErrorHandler('Product not found', 404))
    }

    const createProduct = await product.save();
    res.status(201).json({
        success: true,
        createProduct
    });

});


//Update Products
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
    const id = req.params.id;

    const product = await Product.findOneAndUpdate({ _id: id }, req.body);

    if (!product) {
        return next(new ErrorHandler('Product not found', 404))
    }

    res.status(200).json({
        success: true,
        product
    })

})


//Delete Product --Admin
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
    const id = req.params.id;

    const product = await Product.findOneAndDelete({ _id: id });

    if (!product) {
        return next(new ErrorHandler('Product not found', 404))
    }

    res.status(200).json({
        success: true,
        product
    })

})

//Get Product Details
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
    const id = req.params.id;

    const product = await Product.findOne({ _id: id });

    if (!product) {
        return next(new ErrorHandler('Product not found', 404))
    }

    res.status(200).json({
        success: true,
        product
    })

})


//Get All Products
exports.getAllproducts = catchAsyncErrors(async (req, res) => {
    const allProducts = await Product.find();
    res.status(200).json({
        success: true,
        allProducts
    })
})

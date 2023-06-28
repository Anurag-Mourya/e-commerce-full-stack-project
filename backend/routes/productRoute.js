const express = require('express');
const { getAllproducts, updateProduct, createProduct, deleteProduct, getProductDetails } = require('../controllers/productController');

const router = express.Router();


router.route('/products/new').post(createProduct)

router.route('/products/:id').put(updateProduct).delete(deleteProduct).get(getProductDetails)

router.route('/products').get(getAllproducts)


module.exports = router;
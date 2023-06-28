const express = require('express');
const { getAllproducts, createProducts } = require('../controllers/productController');

const router = express.Router();

router.route('/products').get(getAllproducts)
router.route('/products/new').post(createProducts)


module.exports = router;
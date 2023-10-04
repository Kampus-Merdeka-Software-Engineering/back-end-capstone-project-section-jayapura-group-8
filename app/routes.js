const express = require('express');
const router = express.Router();
const controller = require("./controller/products")

/* route init */
// router.post('/products', controller.addProduct);
router.get('/products', controller.getAllProducts);
router.get('/products/:category', controller.getProductsByCategory);
// router.put('/products:/id', controller.updateProductById);
// router.delete('products:/id', controller.deleteProductById);

// router.get('/checkoutorder', controller.checkoutorder);

// router.post('/order', controller.order);

module.exports = router
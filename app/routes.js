const express = require('express');
const router = express.Router();
const controllerProduct = require("./controller/products")
const controllerOrder = require("./controller/orders")

/* route init */
// router.post('/products', controller.addProduct);
router.get('/products', controllerProduct.getAllProducts);
// router.get('/products/:category', controllerProduct.getProductsByCategory);

router.post('/orders', controllerOrder.createOrder);
// router.put('/products:/id', controller.updateProductById);
// router.delete('products:/id', controller.deleteProductById);

// router.get('/checkoutorder', controller.checkoutorder);

// router.post('/order', controller.order);

module.exports = router
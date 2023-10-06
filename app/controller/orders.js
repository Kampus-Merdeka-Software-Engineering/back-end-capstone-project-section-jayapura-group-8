const orders = require('../model/orders')
const orderItem = require('../model/orderItem')

// function orders(req, res, next) {
//     orders.create({
//         order_id: req.body.order_id,
//         first_name: req.body.first_name,
//         last_name: req.body.last_name,
//         email: req.body.email,
//         phone_number: req.body.phone_number,
//         address: req.body.address,
//         country: req.body.country,
//         city: req.body.city,
//         zipcode: req.body.zipcode
//     })
//     .then(function(){
//         res.status(201).json({
//             message: "orders berhasil ditambahkan"
//         })
//     })
//     .catch(function(err){
//         res.status(500).json({
//             error: err,
//         })
//     })
// }

// function createOrder(req, res, next){
//     orders.create({
//         first_name: req.body.personalInfo.firstName,
//         last_name: req.body.personalInfo.lastName,
//         email: req.body.personalInfo.email,
//         phone_number: req.body.personalInfo.phoneNumber,
//         address: req.body.personalInfo.address,
//         country: req.body.personalInfo.country,
//         city: req.body.personalInfo.city,
//         zipcode: req.body.personalInfo.zip
//     })
//     .then(function(data) {
//         createOrderItem(req)
//         .then(function() {
//             res.json(data);
//         })
//     })
// }

// function createOrderItem(req, res, next){
//     req.body.items.forEach(element => {
//         orderItem.create({
//             product_id: element.productId,
//             quantity: element.quantity
//         })
//     });
// }

async function createOrder(req, res, next) {
    try {
      const orderData = {
        first_name: req.body.personalInfo.firstName,
        last_name: req.body.personalInfo.lastName,
        email: req.body.personalInfo.email,
        phone_number: req.body.personalInfo.phoneNumber,
        address: req.body.personalInfo.address,
        country: req.body.personalInfo.country,
        city: req.body.personalInfo.city,
        zipcode: req.body.personalInfo.zip,
      };
  
      // Create the order and wait for the result
      const createdOrder = await orders.create(orderData);
  
      // Call the createOrderItem function to create order items
      await createOrderItem(req.body.items, createdOrder);
  
      res.json(createdOrder);
    } catch (error) {
      // Handle any errors here
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  }
  
  async function createOrderItem(orderItems, createdOrder) {
    const promises = [];
  
    for (const element of orderItems) {
      const orderItemData = {
        product_id: element.productId,
        quantity: element.quantity,
        order_id: createdOrder.Order_id, // Assuming "id" is the primary key of the order
      };
  
      // Push the promise into the array
      promises.push(orderItem.create(orderItemData));
    }
  
    // Use Promise.all to execute all the promises concurrently
    await Promise.all(promises);
  }

module.exports = {
    createOrder
}
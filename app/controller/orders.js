const order = require('../model/orders')
const productsData = require('../model/productsData');

function orders(req, res, next) {
    order.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        country: req.body.country,
        city: req.body.city,
        zip: req.body.zip,
    })
    .then(function(){
        res.status(201).json({
            message: "orders berhasil ditambahkan"
        })
    })
    .catch(function(err){
        res.status(500).json({
            error: err,
        })
    })
}

module.exports = {
    orders
}
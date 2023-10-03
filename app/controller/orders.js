const orders = require('../model/orders')

function orders(req, res, next) {
    orders.create({
        order_id: req.body.order_id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        address: req.body.address,
        country: req.body.country,
        city: req.body.city,
        zipcode: req.body.zipcode
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
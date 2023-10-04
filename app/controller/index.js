// const productsData = [
//   {
//     id: 1,
//     name: "Beach Shirt #01",
//     imageSrc: "img/f1.jpg",
//     price: "$15.99",
//     stars: 5,
//     categories: ["all", "best-sellers"],
//   },
//   {
//     id: 2,
//     name: "Beach Shirt #02",
//     imageSrc: "img/f2.jpg",
//     price: "$13.99",
//     stars: 4.5,
//     categories: ["all", "new"],
//   },
//   {
//     id: 3,
//     name: "Beach Shirt #03",
//     imageSrc: "img/f3.jpg",
//     price: "$14.99",
//     stars: 4.5,
//     categories: ["all", "new", "best-sellers"],
//   },
//   {
//     id: 4,
//     name: "Beach Shirt #04",
//     imageSrc: "img/f4.jpg",
//     price: "$14.99",
//     stars: 4.5,
//     categories: ["all", "new", "best-sellers"],
//   },
//   {
//     id: 5,
//     name: "Beach Shirt #05",
//     imageSrc: "img/f5.jpg",
//     price: "$15.99",
//     stars: 4,
//     categories: ["all", "new"],
//   },
//   {
//     id: 6,
//     name: "Flower Trouser",
//     imageSrc: "img/f7.jpg",
//     price: "$21.99",
//     stars: 5,
//     categories: ["all", "best-sellers", "specials"],
//   },
//   {
//     id: 7,
//     name: "Windy Shirt",
//     imageSrc: "img/f8.jpg",
//     price: "$14.99",
//     stars: 5,
//     categories: ["all", "best-sellers", "specials"],
//   },
//   {
//     id: 8,
//     name: "Grey Short Super Fluffy",
//     imageSrc: "img/n6.jpg",
//     price: "$19.99",
//     stars: 4,
//     categories: ["all", "best-sellers", "specials"],
//   },
// ];

const orders = require('../model/orders');
const productsData = require('../model/productsData');

  const checkOut = [
    {

      firstName: "ais",
      lastName: "ais",
      email: "ais",
      phoneNumber: 3232,
      address: "dirumah",
      country: "usbekitan",
      city: "bandung bet",
      zip: 3232,
    }
  ]

async function products(req, res) {
    // res.json({
    //     message: "halo cok"
    // })
    // return
    try {
      const products = await productsData.findOne();
      res.json(products);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
}

function order(req, res, next) {
    res.json({
        message: "Halo ini order"
    })
    return
}

function checkoutorder(req, res, next){
  res.json({
    checkOut
})
  return
}

module.exports =  {
products,
order,
checkoutorder,
}
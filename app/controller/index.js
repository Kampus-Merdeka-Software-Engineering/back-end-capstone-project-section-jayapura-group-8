const productsData = [
    {
      id: 1,
      name: "Anggur",
      imageSrc: "img/anggur.png",
      price: "$3.99",
      stars: 5,
      categories: ["all"],
    },
    {
      id: 2,
      name: "Fresh Orange",
      imageSrc: "img/jeruk.png",
      price: "$3.99",
      stars: 5,
      categories: ["all", "new"],
    },
    {
      id: 3,
      name: "Watermelon",
      imageSrc: "img/semangka.png",
      price: "$3.99",
      stars: 4.5,
      categories: ["all", "new", "best-sellers"],
    },
    {
      id: 4,
      name: "Salak",
      imageSrc: "img/salak.png",
      price: "$4.99",
      stars: 4,
      categories: ["all", "new", "best-sellers", "specials"],
    }
  ];

function products(req, res, next) {
    res.json({
        productsData
    })
    return
}

function order(req, res, next) {
    res.json({
        message: "Halo ini order"
    })
    return
}

module.exports =  {
products,
order
}
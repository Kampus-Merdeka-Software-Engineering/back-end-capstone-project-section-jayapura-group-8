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

const customerOrderData = {}

function products(req, res, next) {
    res.json({
        productsData
    })
    return
}

function order(req, res, next) {
    customerOrderData.id = customerOrderData.length + 1;
    customerOrderData.first_name = req.body.id_first_name;
    customerOrderData.last_name = req.body.id_last_name;
    customerOrderData.email = req.body.id_email;
    customerOrderData.phone_number = req.body.id_phone_number;
    customerOrderData.address = req.body.id_address;
    customerOrderData.country = req.body.id_country;
    customerOrderData.city = req.body.id_city;
    customerOrderData.zip = req.body.id_zip;
    customerOrderData.item = productsData[4];
    res.json({
        message: "Pesanan anda sedang di Proses",
        customerOrderData
    })
}
function customerOrder(req, res, next) {
  res.json({
      customerOrderData
  })
  return
}

module.exports =  {
products,
order,
customerOrder
}
const product = require('../model/products')

// // Fungsi untuk menambahkan produk baru
// async function addProduct(req, res, next){
//     try {
//         const { name, image_src, price, stars, categories } = req.body;
//         // Buat produk baru
//         const newProduct = await productsData.create({ name, image_src, price, stars, categories });
//         res.status(201).json(newProduct);
//     } catch (error) {
//         res.status(500).json({
//             error: "Gagal menambahkan produk."
//         });                 
//       }
// }

// Fungsi untuk mengambil semua produk
function getAllProducts(req, res) {
    product.findAll()
    .then(function(data){
        res.status(200).json({
            success: true,
            message: "Data fetched successfully!",
            productsData: data,
        });
    })
    .catch(function(err){
        res.status(500).json({
            success: false,
            message: "Unsuccessful",
            error: err,
        });
    });
}

// Fungsi untuk mengambil produk berdasarkan kategori
function getProductsByCategory(req, res) {
    const category = req.params.category;
  
    // Gunakan Sequelize atau metode lain untuk mengambil produk berdasarkan kategori
    product.findAll({ where: { categories: category } })
      .then(data => {
        if (data.length === 0) {
          return res.status(404).json({
            success: false,
            message: 'No products found for the specified category.',
          });
        }
        
        res.status(200).json({
          success: true,
          message: 'Data fetched successfully!',
          productsData: data,
        });
      })
      .catch(err => {
        res.status(500).json({
          success: false,
          message: 'Unsuccessful',
          error: err,
        });
      });
  }
  

// // Fungsi untuk mengambil produk berdasarkan kategori
// async function getProductsByCategory(req, res) {
//     try {
//         const category = req.params.category;
//         const products = await productsData.findAll({
//             where: {
//                 categories: {
//                     [Op.contains]: [category],
//                 },
//             },
//         });
//         if (!products || products.length === 0) {
//             res.status(404).json({ error: 'Produk tidak ditemukan.' });
//         } else {
//             res.json(products);
//         } 
//     } catch (error) {
//         res.status(500).json({ error: 'Gagal mengambil produk.' });
//     }
// }

// // Fungsi untuk mengupdate produk berdasarkan ID
// async function updateProductById(req, res) {
//     try {
//         const productId = req.params.id;
//         const { name, image_src, price, stars, categories } = req.body;
  
//         const product = await productsData.findByPk(productId);
//         if (!product) {
//             res.status(404).json({ error: 'Produk tidak ditemukan.' });
//         } else {
//             product.name = name;
//             product.image_src = image_src;
//             product.price = price;
//             product.stars = stars;
//             product.categories = categories;
//             await product.save();
  
//             res.json(product);
//         }
//     } catch (error) {
//         res.status(500).json({ error: 'Gagal mengupdate produk.' });
//     }
// }

// // Fungsi untuk menghapus produk berdasarkan ID
// async function deleteProductById(req, res) {
//     try {
//         const productId = req.params.id;
  
//         const product = await productsData.findByPk(productId);
//         if (!product) {
//             res.status(404).json({ error: 'Produk tidak ditemukan.' });
//         } else {
//             await product.destroy();
//             res.json({ message: 'Produk berhasil dihapus.' });
//         }
//     } catch (error) {
//         res.status(500).json({ error: 'Gagal menghapus produk.' });
//     }
// }

module.exports = {
    // addProduct,
    getAllProducts,
    getProductsByCategory,
    // updateProductById,
    // deleteProductById
}
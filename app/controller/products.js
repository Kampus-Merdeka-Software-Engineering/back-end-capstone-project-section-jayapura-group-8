const productsData = require('../model/products')

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
async function getAllProducts(req, res) {
    try {
        const products = await productsData.findAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({
            error: "Gagal mengambil produk."
        });
    }
}

// Fungsi untuk mengambil produk berdasarkan kategori
async function getProductsByCategory(req, res) {
    try {
        const category = req.params.category;
        const products = await productsData.findAll({
            where: {
                categories: {
                    [Op.contains]: [category],
                },
            },
        });
        if (!products || products.length === 0) {
            res.status(404).json({ error: 'Produk tidak ditemukan.' });
        } else {
            res.json(products);
        } 
    } catch (error) {
        res.status(500).json({ error: 'Gagal mengambil produk.' });
    }
}

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
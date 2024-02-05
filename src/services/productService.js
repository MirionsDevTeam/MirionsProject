const productRepository = require('../repositories/productRepository');

const getAllProducts = async () => {
    try {
        const products = await productRepository.getAllProducts();
        return products;
    } catch(err){
        throw err;
    }
};

module.exports = {
    getAllProducts,
};
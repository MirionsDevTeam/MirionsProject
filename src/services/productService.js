const productRepository = require('../repositories/productRepository');

const getAllProducts = async () => {
    try {
        const products = await productRepository.getAllProducts();
        return products;
    } catch(err){
        throw err;
    }
};
/*
const getProductById = async (id) => {};
const createProduct = async (product) => {};
const updateProduct = async (id, productData) => {
    try {
        const product = await productRepository.getProductById(id);

        if (!product){
            throw new Error("producto no encontrado");
        }

        const updatedProduct = await productRepository.updateProduct(id, productData);
        return updatedProduct;
    } catch(err){
        throw err;
    }
};

const deleteProduct = async (id) => {};
*/

module.exports = {
    getAllProducts,
};
// const { Product } = require('../models');

const getAllProducts = async () => {
    try {
        const products = await Product.findAll();
        return products;
    } catch(err){
        throw err;
    }
};
/*
const getProductById = async (id) => {
    try {
        const product = await Product.findByPk(id);
        return product;
    } catch(err){
        throw err;
    }
};

const createProduct = async (productData) => { 
    try {
    const newProduct = await Product.create(productData);
    return newProduct;
} catch(err){
    throw err;
}};

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
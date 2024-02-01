const productService = require('../services/productService');

const getAllProducts = async (req, res, next) => {
    try {
        const products = await productService.getAllProducts();
        res.status(200).json(products);
    } catch(err){
        console.error(err);
        res.status(500).send('Error');
    }
};

/*
const getProductById = async (req, res, next) => {};
const createProduct = async (req, res, next) => {};
const updateProduct = async (req, res, next) => {
    try {
        const { productId } = req.params.productId;
        const payload = req.body;

        const product = await productService.updateProduct(productId, payload);
        res.status(200).json(product);
    } catch(err){
        console.error(err);
        res.status(500).send('Error');
    }
};

const deleteProduct = async (req, res, next) => {};
*/

module.exports = {
    getAllProducts,
};
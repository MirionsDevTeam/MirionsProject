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

const createProduct = async (req, res, next) => {
    try {
        const products = await productService.getAllProducts();
        res.status(200).json(products);
    } catch(err){
        console.error(err);
        res.status(500).send('Error');
    }
};

const updateProduct = async (req, res, next) => {
    try {
        console.log(req.params.idProduct);

        const products = await productService.getAllProducts();
        res.status(200).json(products);
    } catch(err){
        console.error(err);
        res.status(500).send('Error');
    }
};

module.exports = {
    getAllProducts,
    createProduct,
    updateProduct,
};
const Product = require('../models/Product');

const getAllProducts = async () => {
    try {
        const products = [new Product("patatas", "comida"), new Product("cocacola", "bebida")];
        return products;
    } catch(err){
        throw err;
    }
};

module.exports = {
    getAllProducts,
};
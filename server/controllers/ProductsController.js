const products = require('express').Router();
const db = require('../models');
const { Product } = db;

// get all products
products.get('/', async (req, res) => {
    try {
        const fetchedProducts = await Product.findAll();
        res.status(200).json(fetchedProducts);
    } catch (err) {
        res.status(500).json("Server error");
        console.log(err);
    }
})

module.exports = products;
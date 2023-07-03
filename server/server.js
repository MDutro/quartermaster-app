const express = require('express');
const app = express();
const { Seqelize } = require('sequelize');
const path = require('path');
const cors = require('cors');

require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const productsController = require('./controllers/ProductsController');
app.use('/api/products', productsController);

app.listen(4005, () => {
    console.log("Server is running on port 4005");
})
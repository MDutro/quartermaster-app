const products = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const db = require("../models");
const { Product } = db;

// get all products
products.get("/", async (req, res) => {
  try {
    const fetchedProducts = await Product.findAll();
    res.status(200).json(fetchedProducts);
  } catch (err) {
    res.status(500).json("Server error");
    console.log(err);
  }
});

// get one product
products.get("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    console.log(id);
    let product = await Product.findOne({ where: { id: id } });
    res.status(200).send(product);
  } catch (err) {
    res.status(400).json("Product not found");
    console.log(err);
  }
});

products.post("/create-product", async (req, res) => {
  try {
    const id = uuidv4();
    const newProduct = {
      id: id,
      name: req.body.name,
      adjective: req.body.adjective,
      description: req.body.description,
      quantity: req.body.quantity,
      country_of_origin: req.body.country_of_origin,
      createdAt: new Date().toISOString(),
    };
    const createdProduct = await Product.create(newProduct);
    res.status(200).send(createdProduct);
  } catch (err) {
    res.status(500).json("Internal server error");
    console.log(err);
  }
});

// update product
products.put("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    const product = await Product.update(req.body, { where: { id: id } });
    res.status(200).send(product);
  } catch (err) {
    res.status(400).json("Product not found");
    console.log(err);
  }
});

products.delete("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    await Product.destroy({ where: { id: id } });
    res.status(200).send("Product is deleted !");
  } catch (err) {
    res.status(400).json("Product not found or already deleted");
    console.log(err);
  }
});

module.exports = products;

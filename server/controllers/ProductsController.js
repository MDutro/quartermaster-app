const products = require("express").Router();
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

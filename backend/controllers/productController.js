const Product = require("../models/Product");

// GET all products
const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// POST product
const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
};

module.exports = { getProducts, createProduct };
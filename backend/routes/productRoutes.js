const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

const {
  getProducts,
  createProduct,
} = require("../controllers/productController");

router.post("/", createProduct);

router.get("/", getProducts);

router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});
module.exports = router;
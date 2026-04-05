const express = require("express");
const router = express.Router();

const {
  getProducts,
  createProduct,
} = require("../controllers/productController");

// ✅ ONLY ONE POST
router.post("/", createProduct);
// ✅ GET
router.get("/", getProducts);

module.exports = router;
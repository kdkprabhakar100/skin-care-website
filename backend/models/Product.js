const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: String,
  price: Number,
  image: String,
  description: String,

  category: String,        
  stock: Number,          
  rating: { type: Number, default: 0 },
  numReviews: { type: Number, default: 0 },

  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", productSchema);
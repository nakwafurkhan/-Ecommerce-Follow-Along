const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true, index: true },
  subtitle: { type: String },
  price: { type: Number, required: true },
  images: { type: [String], required: true },
  imageAlt: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);

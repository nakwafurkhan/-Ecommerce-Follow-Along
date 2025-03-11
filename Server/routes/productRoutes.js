const express = require('express');
const asyncHandler = require('express-async-handler');
const Product = require('../models/Product');
const multer  = require('multer');

const router = express.Router();

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '././uploads');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  }
});

const upload = multer({ storage: storage });

// POST /products - Create a new product (unchanged)
router.post(
  '/',
  upload.array('images', 10),
  asyncHandler(async (req, res) => {
    const { title, subtitle, price, imageAlt } = req.body;
    const images = req.files?.map(file => `/uploads/${file.filename}`);

    const data = { title, subtitle, price, imageAlt, images };
    const newProduct = new Product(data);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  })
);

// GET /products - Retrieve all products
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find();
    res.json(products);
  })
);

// GET /products/:title - Retrieve a product by title
router.get(
  '/:title',
  asyncHandler(async (req, res) => {
    const product = await Product.findOne({ title: req.params.title });
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  })
);

// PUT /products/:title - Update a product using its title
router.put(
  '/:title',
  upload.array('images', 10),
  asyncHandler(async (req, res) => {
    const { title, subtitle, price, imageAlt } = req.body;
    let images;
    if (req.files && req.files.length > 0) {
      images = req.files.map(file => `/uploads/${file.filename}`);
    }
    // Find the product by its title
    const product = await Product.findOne({ title: req.params.title });
    if (product) {
      product.title = title || product.title;
      product.subtitle = subtitle || product.subtitle;
      product.price = price || product.price;
      product.imageAlt = imageAlt || product.imageAlt;
      if (images) {
        product.images = images;
      }
      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  })
);

// DELETE /products/:title - Delete a product using its title
router.delete(
  '/:title',
  asyncHandler(async (req, res) => {
    const product = await Product.findOne({ title: req.params.title });
    if (product) {
      await product.remove();
      res.json({ message: 'Product removed' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  })
);

module.exports = router;

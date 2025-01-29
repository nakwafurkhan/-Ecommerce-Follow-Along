const express = require('express');
const multer = require('multer');
const { productModel } = require('../models/product.js'); 

let productRouter = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/'); 
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

productRouter.post("/upload", upload.array('productImage', 12), async (req, res) => {
    try {
        const { productName, productDescription, productPrice } = req.body;

        const imgPaths = req.files.map((file) => `/uploads/${file.filename}`);

        const newProduct = new productModel({
            productName,
            productDescription,
            productPrice,
            productImage: imgPaths
        });

        await newProduct.save();
        res.status(201).json({ message: "Product created successfully" });

    } catch (error) {
        res.status(500).json({ message: "Error creating product", error: error.message });
        console.log(error);
    }
});

module.exports = { productRouter };
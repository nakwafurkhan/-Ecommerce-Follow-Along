const express=require('express');
const multer=require('multer');
const path=require('path');
const { productModel } = require('../model/product.model');
// const { productModel } = require('../model/product.model');

let productRouter=express.Router();

productRouter.get("/",async(req,res)=>{
  try {
    const products= await productModel.find();
    res.send({"message":"Successfully retrived the data from database",data:products})
  } catch (error) {
    res.send({"Error-message":error})
  }
})

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '././uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
  })
  
  const upload = multer({ storage: storage })

  productRouter.get("/",(req,res)=>{
    res.send({"msg":"Hello"})
  })

productRouter.post("/create",upload.array('productImage', 12),async(req,res)=>{

    try {
        const {productName, productDescription,productPrice}=req.body;

        const imgPaths=req.files.map((file)=>`/uploads/${file.filename}`);

        console.log(imgPaths)

        const newProduct=new productModel({
            productName, 
            productDescription,
            productPrice,
            productImage:imgPaths
        });

        await newProduct.save();
        res.json({"message":"Hurray! Successfully added the product on database"})
    } catch (error) {
        console.log(error);
        res.send({error});
    }

});



module.exports={productRouter}
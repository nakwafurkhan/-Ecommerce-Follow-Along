const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    productName:{
        type:String,
        required:true,
    },
    productDescription:{
        type:String,
        required:true,
    },
    productPrice:{
        type:Number,
        required:true,
    },
    productImage:{
        type:[String],
        required:true,
    }
})

const productModel=mongoose.model("productCollection",productSchema);

module.exports={productModel};
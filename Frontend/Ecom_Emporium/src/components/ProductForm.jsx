import React, { useState } from 'react'
import "./ProductForm.css"

const ProductForm = () => {

  let [productName,setProductName]=useState("");
  let [productDescription,setProductDescription]=useState("");
  let [productPrice,setProductPrice]=useState("");
  let [productImage,setProductImages]=useState([]);

  const handleProductName=(e)=>{
      let name=e.target.value;
      setProductName(name)
  }

  const handleProductDescription=(e)=>{
    let description=e.target.value;
    setProductDescription(description)
  }

  const handleProductPrice=(e)=>{
    let price=e.target.value;
    setProductPrice(price)
  }

  const handleProductImages=(e)=>{
    let files=e.target.files;
    let filesArray=Array.from(files);
    setProductImages([...productImage,...filesArray])
  }

  const handleSubmit=(e)=>{
    e.preventDefault();

    let data={
      productName,
      productDescription,
      productPrice,
      productImage
    }

    console.log(data);

    setProductName("");
    setProductDescription("");
    setProductPrice("");
    setProductImages([])
  }

  return (
    <form action="" onSubmit={handleSubmit}>
 
     <label htmlFor="">Product Name</label>
     <input type="text" placeholder='Enter Product Name' value={productName} onChange={handleProductName}/>
     <label htmlFor="">Product Description</label>
     <input type="text" placeholder='Enter Product Description' value={productDescription} onChange={handleProductDescription}/>
     <label htmlFor="">Product Price</label>
     <input type="text" placeholder='Enter Product Price' value={productPrice} onChange={handleProductPrice}/>
     <label htmlFor="">Product Images</label>
     <input type="file"  placeholder='Add Product Images' multiple onChange={handleProductImages}/>

    <input type="submit" value="Add Product" />
    </form>
  )
}

export default ProductForm
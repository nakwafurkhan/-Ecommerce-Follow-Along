import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const EditProducts = () => {

    const {id}=useParams();
    const [product, setProduct]=useState([])

    useEffect(()=>{
        fetch(`http://localhost:7777/product/${id}`)
        .then((res)=>{
            return res.json();
        }).then((res)=>{
            console.log(res)
            setProduct(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[id]);

    console.log(product)

    return (
        <form action="" >
     
         <label htmlFor="">Product Name</label>
         <input type="text" placeholder='Enter Product Name' value={product.productName} />
         <label htmlFor="">Product Description</label>
         <input type="text" placeholder='Enter Product Description'value={product.productDescrition}  />
         <label htmlFor="">Product Price</label>
         <input type="text" placeholder='Enter Product Price' value={product.productPrice} />
         <label htmlFor="">Product Images</label>
         <input type="file"  placeholder='Add Product Images' />
    
        <input type="submit" value="Edit Product" />
        </form>
      )
}

export default EditProducts
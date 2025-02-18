import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {

    const [product,setProduct]=useState({});

    let {id}=useParams();

    const fetchData=async()=>{

       try {
            let res = await fetch(`http://localhost:7777/product/${id}`);
            res = await res.json();
            console.log(res)
            setProduct(res.data)
       } catch (error) {
           console.log(error)
       }

    }

    useEffect(()=>{

        fetchData();
        
    },[])

  return (
    <div className='cart'>
        <img alt={product.productName} />
        <h3>Product Name: {product.productName}</h3>
        <h4>Price : {product.productPrice}</h4>
        <p>{product.productDescription}</p>
    </div>
  )
}

export default SingleProduct
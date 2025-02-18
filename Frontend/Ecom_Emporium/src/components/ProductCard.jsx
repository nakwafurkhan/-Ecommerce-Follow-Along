import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./ProductCard.css"

// import img from "../../../../Backend/"

const ProductCard = ({product,handleDelete}) => {

  const navigate=useNavigate();

  const handleClick=()=>{
    navigate(`/editproduct/${product._id}`)
  }

  const handleDetails=(id)=>{
    navigate(`/product/${id}`)
  }
  // let imgPath=`../../../../Backend${product.productImage[0]}`;
  // const imgPath='productImage-1738054603618-343930158.jpg'
  
  return (
    <div  className='cart'>
        <img  alt={product.productName} />
        <h3>Product Name: {product.productName}</h3>
        <h4>Price : {product.productPrice}</h4>
        <p>{product.productDescription}</p>
        <button onClick={handleClick}>Edit</button>
        <button onClick={()=>handleDelete(product._id)}>Delete</button>
        <button onClick={()=>handleDetails(product._id)}>View Details</button>
    </div>
  )
}

export default ProductCard
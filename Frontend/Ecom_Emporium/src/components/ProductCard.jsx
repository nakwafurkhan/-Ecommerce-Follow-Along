import React from 'react'
import "./ProductCard.css"
// import img from "../../../../Backend/"

const ProductCard = ({product}) => {

  let imgPath=`../../../../Backend${product.productImage[0]}`;
  // const imgPath='productImage-1738054603618-343930158.jpg'
  return (
    <div className='cart'>
        <img src={imgPath} alt={product.productName} />
        <h3>Product Name: {product.productName}</h3>
        <h4>Price : {product.productPrice}</h4>
        <p>{product.productDescription}</p>
    </div>
  )
}

export default ProductCard
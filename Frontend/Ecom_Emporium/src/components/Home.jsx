import React, { useState, useEffect } from 'react';
import "./Home.css";
import ProductCard from './ProductCard';

const Home = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/product")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProductData(data.data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <>
      {/* Product Grid */}
      <div className="container">
        {productData.length > 0 ? (
          productData.map((product) => <ProductCard key={product.id} product={product} />)
        ) : (
          <p className="loading-text">Loading products...</p>
        )}
      </div>
    </>
  );
};

export default Home;
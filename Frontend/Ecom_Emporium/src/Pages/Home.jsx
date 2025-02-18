import React from 'react';
import "./Home.css";
// import productData from "./data.json"
import { useState } from 'react';
import { useEffect } from 'react';
import ProductCard from '../Components/ProductCard';
import axios from 'axios';

const Home = () => {

  let [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7777/product").then((res) => {
      return res.json();
    }).then((res) => {
      // console.log(res);
      setProductData(res.data)
    }).catch((err) => {
      console.log(err);
    })
  }, []);

  const handleDelete = async (id) => {
    try {
      let response = await axios.delete(`http://localhost:7777/product/delete/${id}`)
      console.log(response.data.message);
      const filteredData = productData.filter((e) => e._id != id);
      setProductData(filteredData);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {/* <nav>
        <div>
            <h1>Kalvium E-cart</h1>
        </div>
        <div className='nav-2'>
        <button className='login-btn'>Login</button>
        <button className='signup-btn'>Sign-Up</button>
        </div>
      </nav> */}

      <div className="container">
        {
          productData?.map((product) => {
            return <ProductCard key={product._id} product={product} handleDelete={handleDelete}>

            </ProductCard>
          })
        }
      </div>

    </>
  )
}

export default Home
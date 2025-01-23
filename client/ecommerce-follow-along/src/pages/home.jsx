import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup"); 
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#fff", fontSize: "36px", fontWeight: "bold" }}>
        Welcome to Our E-commerce Website!
      </h1>
      <p style={{ color: "#fff", marginTop: "20px", fontSize: "20px", fontWeight: "bold" }}>
        Discover the best products at unbeatable prices. Shop now and enjoy great deals!
      </p>
      <button
        onClick={handleSignUpClick}
        style={{
          marginTop: "30px",
          padding: "12px 24px",
          backgroundColor: "#007bff",
          color: "#fff",
          fontSize: "18px",
          fontWeight: "bold",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Sign Up
      </button>
    </div>
  );
  
};

export default Home;

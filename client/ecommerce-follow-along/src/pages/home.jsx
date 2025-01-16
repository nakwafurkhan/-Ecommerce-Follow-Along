import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login"); // Adjust the path based on your routing configuration
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#333" }}>Welcome to Our E-commerce Website!</h1>
      <p style={{ color: "#555", marginTop: "20px", fontSize: "18px" }}>
        Discover the best products at unbeatable prices. Shop now and enjoy great deals!
      </p>
      <button
        onClick={handleLoginClick}
        style={{
          marginTop: "30px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Home;

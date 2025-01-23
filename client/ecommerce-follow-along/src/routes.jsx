import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import LoginSignup from"./pages/loginsignup.jsx"

const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<LoginSignup />} />
      <Route path="/login" element={<LoginSignup />} />


    </Routes>
  );
};

export default AppRoutes;

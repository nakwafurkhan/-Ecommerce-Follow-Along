import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/loginPage.jsx";
import Home from "./pages/home.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;

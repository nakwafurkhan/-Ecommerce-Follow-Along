import React from "react";
import { useNavigate } from "react-router-dom";
import Header  from "./home/components/Header";
import NavBar from "./home/components/NavBar"
import Carousal from './home/components/Carousal'
import CardCarousel from "./home/components/CardCarousal";

function Home() {

  return (
    <>
    <Header />
    <NavBar />
    <Carousal />
    <CardCarousel />
    
    
    
    </>
  );

}

export default Home;

import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Home from "../../Components/Home/Home";
import Contact from "../../Components/Contact/Contact";
import About from "../../Components/About/About";
import Weddings from "../../Components/Weddings/Weddings";
import Products from "../../Components/Products/Products";
import Food from "../../Components/Food/Food";
import Equipments from "../../Components/Equipements/Equipments";
import Testimonials from "../../Components/Testimonials/Testimonials";
import { Route, Routes } from "react-router-dom";
import Loading from "../../Components/LoadingAnimation/Loading";

function Main({ isLoading }) {
  return (
    <div>
      <Navbar />
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/weddings" element={<Weddings />} />
            <Route path="/products" element={<Products />} />
            <Route path="/food" element={<Food />} />
            <Route path="/equipments" element={<Equipments />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
        )}
      </div>
    </div>
  );
}

export default Main;

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

function Main() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/weddings":
      component = <Weddings />;
      break;
    case "/products":
      component = <Products />;
      break;
    case "/food":
      component = <Food />;
      break;
    case "/about":
      component = <About />;
      break;
    case "/equipments":
      component = <Equipments />;
      break;
    case "/contact":
      component = <Contact />;
      break;
    case "/testimonials":
      component = <Testimonials />;
      break;
  }
  return (
    <div>
      <Navbar />
      {component}
    </div>
  );
}

export default Main;

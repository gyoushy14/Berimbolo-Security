import React from "react";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Services from "../components/Services";
import Product_List from "../components/Product_List";
import ClientTestimonials from "../components/ClientTestimonials";
const Home = () => {
  return (
    <div className="">
      <Hero />
      <Services />
      <Product_List/>
      <Contact />
      <ClientTestimonials/>
    </div>
  );
};

export default Home;

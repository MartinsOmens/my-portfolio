import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../pages/Hero";
import About from "../pages/About";
import Footer from "../components/Footer";
import Contact from "../pages/Contact";
import Stack from "../pages/Stack";
import Projects from "../pages/projects/Projects";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Stack/>
      <Projects/>
      <Contact />
      <Footer />
    </div>
  );
};

export default MainLayout;

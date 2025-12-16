import React from "react";
import Header from "../components/layout/Header.jsx";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";
import CVButton from "../components/layout/CVButton.jsx";


const HomePage = ({ onViewProject }) => (
  <>
    <Header />
    <Hero />
    <About />
    <Skills />
    <Projects onViewProject={onViewProject} />
    <Contact />
    <Footer />
    <CVButton />
  </>
);

export default HomePage;

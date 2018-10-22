import React from "react";

import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import About from "./About/About";

import "./Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <About />
      <Projects />
    </div>
  );
};

export default Home;

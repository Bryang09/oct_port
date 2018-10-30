import React from "react";

import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import About from "./About/About";

import "./Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <Projects />
      <About />
    </div>
  );
};

export default Home;

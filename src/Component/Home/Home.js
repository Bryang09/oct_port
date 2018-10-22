import React from "react";

import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import About from "./About/About";

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

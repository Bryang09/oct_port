import React from "react";

import "./About.scss";

const About = () => {
  return (
    <div className="About">
      <h1>About Me</h1>
      <h3>
        My name is Bryan Gonzalez and I am a 22 year old Front End Developer. I
        am based in Houston,TX and am actively looking for a Front End or Junior
        Developer position. I am well versed in HTML5, CSS3, Vanilla Js, ES6,
        and React. I learned most of my skills from Udemy, Team Treehouse,
        YouTube, and most importantly, through Trial and Error. I have spent the
        last 9 months developing my skills full time, and I know I now posses
        the skills to be a valuable asset. If you're willing to give me an
        opportunity, I guarantee you won't regret it.
      </h3>
      <h5>Feel Free To Contact Me</h5>
      <div className="Icons">
        <a
          href="https://github.com/Bryang09"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github fa-3x" />
        </a>
        <a
          href="https://www.linkedin.com/in/bryan-gonzalez09/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin fa-3x" />
        </a>
        <a href="mailto:bryan.gonzalez1020.bg@gmail.com">
          <i className="fas fa-envelope fa-3x" />
        </a>
      </div>
    </div>
  );
};

export default About;

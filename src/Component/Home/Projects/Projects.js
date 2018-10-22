import React, { Component } from "react";

import "./Projects.scss";

class Projects extends Component {
  state = {
    click: false,

    projects: [
      {
        id: 0,
        src: "trainer.png",
        title: "Trainer App",
        desc: "This is a landing page for a personal trainer."
      },
      {
        id: 1,
        src: "restaurant.jpg",
        title: "Restaurant App",
        desc: "A restaurant application for a fictional restaurant"
      },
      {
        id: 2,
        src: "glasses.png",
        title: "The Glasses App",
        desc: "A landing page for an online glasses retailer"
      },
      {
        id: 3,
        src: "movies.jpg",
        title: "The Movies App",
        desc:
          "An application that makes use of the MovieDB api, this app gives a description for any movie."
      },
      {
        id: 4,
        src: "recipes.png",
        title: "The Recipes App",
        desc:
          "An application that makes use of the Food2Fork api, this app will search for any recipe."
      },
      {
        id: 5,
        src: "shelter.png",
        title: "The Shelter App",
        desc:
          "An application that makes use of the PetFinder api, this app will search for any shelter/pet near you."
      }
    ]
  };

  changeColor = () => {
    this.setState({ click: !this.state.click });
  };

  render() {
    const projects = this.state.projects.map(res => {
      return (
        <div
          className="Project"
          key={res.id}
          style={{
            backgroundImage: `url(/Images/${res.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat"
          }}
        >
          <div className="Text">
            <h2>{res.title}</h2>
            <h3>{res.desc}</h3>
          </div>
        </div>
      );
    });

    return (
      <div className="Projects">
        <h1>
          My <span>Projects</span>
        </h1>
        <div className="Categories">
          <h5>All</h5>
          <h5>React</h5>
          <h5>React-Router</h5>
          <h5>Axios</h5>
          <h5>Flexbox</h5>
          <h5>Sass</h5>
        </div>
        <div className="ProjectsDiv">{projects}</div>
      </div>
    );
  }
}

export default Projects;

import React, { Component } from "react";

import "./Projects.scss";

import All from "./Filter/All";
import Rea from "./Filter/React";
import Router from "./Filter/Router";
import Sass from "./Filter/Sass";
import Axios from "./Filter/Axios";
import Flexbox from "./Filter/Flexbox";

class Projects extends Component {
  state = {
    projects: [
      {
        id: 0,
        src: "trainer.png",
        title: "Trainer App",
        desc: "This is a landing page for a personal trainer.",
        react: true,
        reactrouter: false,
        axios: false,
        flexbox: true,
        sass: true,
        code: "https://github.com/Bryang09/trainer",
        demo: "https://bryang09.github.io/trainer/#/"
      },
      {
        id: 1,
        src: "restaurant.jpg",
        title: "Restaurant App",
        desc: "A restaurant application for a fictional restaurant",
        react: true,
        reactrouter: true,
        axios: false,
        flexbox: true,
        sass: false,
        code: "https://github.com/Bryang09/restaurant",
        demo: "https://bryang09.github.io/restaurant/#/"
      },
      {
        id: 2,
        src: "glasses.png",
        title: "The Glasses App",
        desc: "A landing page for an online glasses retailer",
        react: true,
        reactrouter: false,
        axios: false,
        flexbox: true,
        sass: false,
        code: "https://github.com/Bryang09/glasses",
        demo: "https://bryang09.github.io/glasses/#/"
      },
      {
        id: 3,
        src: "movies.jpg",
        title: "The Movies App",
        desc:
          "An application that makes use of the MovieDB api, this app gives a description for any movie.",
        react: true,
        reactrouter: false,
        axios: true,
        flexbox: true,
        sass: false,
        code: "https://github.com/Bryang09/movies",
        demo: "https://bryang09.github.io/movies/#/"
      },
      {
        id: 4,
        src: "recipes.png",
        title: "The Recipes App",
        desc:
          "An application that makes use of the Food2Fork api, this app will search for any recipe.",
        react: true,
        reactrouter: true,
        axios: true,
        flexbox: true,
        sass: false,
        code: "https://github.com/Bryang09/recipes",
        demo: "https://bryang09.github.io/recipes/#/"
      },
      {
        id: 5,
        src: "shelter.png",
        title: "The Shelter App",
        desc:
          "An application that makes use of the PetFinder api, this app will search for any shelter/pet near you.",
        react: true,
        reactrouter: true,
        axios: true,
        flexbox: true,
        sass: false,
        code: "https://github.com/Bryang09/shelter",
        demo: "https://bryang09.github.io/shelter/#/"
      }
    ],
    all: true,
    react: false,
    reactr: false,
    axios: false,
    flexbox: false,
    sass: false
  };

  onAll = () => {
    this.setState({
      all: !this.state.all,
      react: false,
      reactr: false,
      axios: false,
      flexbox: false,
      sass: false
    });
  };
  onReact = () => {
    this.setState({
      all: false,
      react: !this.state.react,
      reactr: false,
      axios: false,
      flexbox: false,
      sass: false
    });
  };
  onRouter = () => {
    this.setState({
      all: false,
      react: false,
      reactr: true,
      axios: false,
      flexbox: false,
      sass: false
    });
  };
  onSass = () => {
    this.setState({
      all: false,
      react: false,
      reactr: false,
      axios: false,
      flexbox: false,
      sass: !this.state.sass
    });
  };
  onAxios = () => {
    this.setState({
      all: false,
      react: false,
      reactr: false,
      axios: !this.state.axios,
      flexbox: false,
      sass: false
    });
  };
  onFlexBox = () => {
    this.setState({
      all: false,
      react: false,
      reactr: false,
      axios: false,
      flexbox: !this.state.flexbox,
      sass: false
    });
  };

  render() {
    return (
      <div className="Projects">
        <h1>
          My <span>Projects</span>
        </h1>
        <div className="Categories">
          <h5 onClick={this.onAll} className={this.state.all ? "Fill" : null}>
            All
          </h5>
          <h5
            onClick={this.onReact}
            className={this.state.react ? "Fill" : null}
          >
            React
          </h5>
          <h5
            onClick={this.onRouter}
            className={this.state.reactr ? "Fill" : null}
          >
            React-Router
          </h5>
          <h5
            onClick={this.onAxios}
            className={this.state.axios ? "Fill" : null}
          >
            Axios
          </h5>
          <h5
            onClick={this.onFlexBox}
            className={this.state.flexbox ? "Fill" : null}
          >
            Flexbox
          </h5>
          <h5 onClick={this.onSass} className={this.state.sass ? "Fill" : null}>
            Sass
          </h5>
        </div>
        <div className="ProjectsDiv">
          {this.state.all ? (
            <All list={this.state.projects} />
          ) : this.state.react ? (
            <Rea list={this.state.projects} />
          ) : this.state.reactr ? (
            <Router list={this.state.projects} />
          ) : this.state.sass ? (
            <Sass list={this.state.projects} />
          ) : this.state.axios ? (
            <Axios list={this.state.projects} />
          ) : this.state.flexbox ? (
            <Flexbox list={this.state.projects} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Projects;

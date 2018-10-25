import React, { Component } from "react";

import "./Projects.scss";

import All from "./Filter/All";
import Rea from "./Filter/React";
import Router from "./Filter/Router";
import Sass from "./Filter/Sass";
import Axios from "./Filter/Axios";
import Flexbox from "./Filter/Flexbox";
import Mern from "./Filter/Mern";

import Menu from "./Menu";

class Projects extends Component {
  state = {
    projects: [
      // prettier-ignore
      {  id: 6, src: "watches.jpg", title: "Watches App", desc: "An online store that specializes in Watches.", react: true, reactrouter: true, axios: true, flexbox: true, sass: false, mern: true, code: "https://github.com/Bryang09/watches", demo: "https://intense-bayou-29884.herokuapp.com/#/" },
      // prettier-ignore
      {  id: 0, src: "trainer.png", title: "Trainer App", desc: "This is a landing page for a personal trainer.", react: true, reactrouter: false, axios: false, flexbox: true, sass: true, code: "https://github.com/Bryang09/trainer", demo: "https://bryang09.github.io/trainer/#/" },
      // prettier-ignore
      { id: 1, src: "restaurant.jpg", title: "Restaurant App", desc: "A restaurant application for a fictional restaurant", react: true, reactrouter: true, axios: false, flexbox: true, sass: false, code: "https://github.com/Bryang09/restaurant", demo: "https://bryang09.github.io/restaurant/#/" },
      // prettier-ignore
      { id: 2, src: "glasses.png", title: "The Glasses App", desc: "A landing page for an online glasses retailer", react: true, reactrouter: false, axios: false, flexbox: true, sass: false, code: "https://github.com/Bryang09/glasses", demo: "https://bryang09.github.io/glasses/#/" },
      // prettier-ignore
      { id: 3, src: "movies.jpg", title: "The Movies App", desc: "An application that makes use of the MovieDB api, this app gives a description for any movie.", react: true, reactrouter: false, axios: true, flexbox: true, sass: false, code: "https://github.com/Bryang09/movies",  demo: "https://bryang09.github.io/movies/#/" },
      // prettier-ignore
      { id: 4, src: "recipes.png",  title: "The Recipes App", desc: "An application that makes use of the Food2Fork api, this app will search for any recipe.", react: true, reactrouter: true, axios: true, flexbox: true, sass: false, code: "https://github.com/Bryang09/recipe", demo: "https://bryang09.github.io/recipe/#/" },
      // prettier-ignore
      { id: 5, src: "shelter.png", title: "The Shelter App", desc: "An application that makes use of the PetFinder api, this app will search for any shelter/pet near you.", react: true, reactrouter: true, axios: true, flexbox: true, sass: false, code: "https://github.com/Bryang09/shelter", demo: "https://bryang09.github.io/shelter/#/" }
    ],
    all: true,
    react: false,
    reactr: false,
    axios: false,
    flexbox: false,
    sass: false,
    mern: false
  };

  onAll = () => {
    // prettier-ignore
    this.setState({ all: !this.state.all, react: false, reactr: false, axios: false, flexbox: false, sass: false });
  };
  onReact = () => {
    // prettier-ignore
    this.setState({ all: false, react: !this.state.react, reactr: false, axios: false, flexbox: false, sass: false, mern: false });
  };

  onRouter = () => {
    // prettier-ignore
    this.setState({ all: false, react: false,  reactr: true, axios: false, flexbox: false, sass: false, mern: false });
  };

  onSass = () => {
    // prettier-ignore
    this.setState({ all: false, react: false, reactr: false, axios: false, flexbox: false, sass: !this.state.sass, mern: false });
  };

  onAxios = () => {
    // prettier-ignore
    this.setState({ all: false, react: false, reactr: false, axios: !this.state.axios, flexbox: false, sass: false, mern: false });
  };

  onFlexBox = () => {
    // prettier-ignore
    this.setState({ all: false, react: false, reactr: false, axios: false, flexbox: !this.state.flexbox, sass: false, mern: false });
  };

  onMern = () => {
    // prettier-ignore
    this.setState({ all: false, react: false, reactr: false, axios: false, flexbox: false ,mern: !this.state.mern, sass: false,  });
  };

  render() {
    return (
      <div className="Projects">
        <h1>
          My <span>Projects</span>
        </h1>
        <div className="Categories">
          {/* prettier-ignore */}
          <Menu onAll={this.onAll} all={this.state.all}  onReact={this.onReact} react={this.state.react} onRouter={this.onRouter} reactr={this.state.reactr} onAxios={this.onAxios} axios={this.state.axios} onFlexBox={this.onFlexBox} flexbox={this.state.flexbox} onSass={this.onSass} sass={this.state.sass} onMern={this.onMern} mern={this.state.mern} />
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
          ) : this.state.mern ? (
            <Mern list={this.state.projects} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Projects;

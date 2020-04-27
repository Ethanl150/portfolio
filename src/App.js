import React from "react";
import { Grid } from "@material-ui/core";
import passwordGenerator from "./images/passwordgenerator.png";
import eatDaBurger from "./images/eatdaburger.png";
import noteTaker from "./images/notetaker.png";
import weatherDashboard from "./images/weatherdashboard.png";
import googleBooksSearch from "./images/googlebookssearch.png"
import foodFinder from "./images/foodfinder.png";
import fyre from "./images/fyre.png";
import singularity from "./images/singularity.png"
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Container from "./components/Container.js";
import Project from "./components/Project.js";
import Footer from "./components/Footer.js";
import "./app.css";

const App = () => {

  const scrollToTop = () => {
    console.log('clicked')
    // window.scrollTo(0, 0)
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <Header />
      <Main />
      <Container>
        <h3 className="my-5 p-5 text-center" id="about-me">I am a full stack web developer with a certificate for completing a 3-month Penn LPS Coding Boot Camp. I am a quick learner and enjoy improving and developing my skills in order to become stronger and more competent. I have experience developing websites alone as well as in teams. My primary technical skills include React, Node, Express, MongoDB, and MySQL.</h3>
        <h1 className="text-center">Solo projects</h1>
        <Grid container spacing={5} justify="space-around" className="mt-5" id="projects">
          <Project
            appLink="https://ethanl150.github.io/PasswordGenerator/"
            name="Password Generator"
            image={passwordGenerator}
            description="An application that generates a random password according to the criteria determined by the end user."
            technologies="HTML, CSS, JavaScript"
            gitHubLink="https://github.com/Ethanl150/passwordgenerator"
          />
          <Project
            appLink="https://eattheburger-app.herokuapp.com/"
            name="Eat-Da-Burger"
            image={eatDaBurger}
            description='An application that allows the user to "create" and "eat" burgers.'
            technologies="Node, jQuery, MySQL, Handlebars, Bootstrap"
            gitHubLink="https://github.com/Ethanl150/eat-da-burger"
          />
          <Project
            appLink="https://notetaker-application.herokuapp.com/"
            name="Note Taker"
            image={noteTaker}
            description="An application that allows the user to create, view, edit, and delete notes."
            technologies="Node, Express, jQuery, Handlebars"
            gitHubLink="https://github.com/Ethanl150/notetaker"
          />
          <Project
            appLink="https://ethanl150.github.io/WeatherDashboard/"
            name="Weather Dashboard"
            image={weatherDashboard}
            description="An application that displays the weather of a specified city."
            technologies="HTML, CSS, jQuery, OpenWeatherMap API"
            gitHubLink="https://github.com/Ethanl150/weatherdashboard"
          />
          <Project
            appLink="https://intense-anchorage-26607.herokuapp.com/"
            name="Google Books Search"
            image={googleBooksSearch}
            description="An application that allows the user to search for and save books."
            technologies="Node, Express, React, Mongoose, Bootstrap, Google Books API"
            gitHubLink="https://github.com/Ethanl150/googlebookssearch"
          />
        </Grid>
        <h1 className="text-center mt-5">Group projects</h1>
        <Grid container spacing={3} justify="space-around" className="mt-5" id="group-projects">
          <Project
            appLink="https://ethanl150.github.io/FoodFinder/"
            name="Food Finder"
            image={foodFinder}
            description="An application that allows the user to search for places at which they can eat in Philadelphia."
            technologies="jQuery, Foundation, Google Maps API, Zomato API"
            gitHubLink="https://github.com/Ethanl150/foodfinder"
          />
          <Project
            appLink="https://fyre-app.herokuapp.com/"
            name="Fyre"
            image={fyre}
            description="An application that allows the user to quickly discover new music."
            technologies="Node, Sequelize, Handlebars, Spotify API, Bootstrap"
            gitHubLink="https://github.com/Ethanl150/fyre"
          />
          <Project
            appLink="https://singularitytcg.herokuapp.com/"
            name="Singularity"
            image={singularity}
            description="An online competitive card game. (In development)"
            technologies="Node, React, Mongoose, Passport, Materialize"
            gitHubLink="https://github.com/Ethanl150/singularity"
          />
        </Grid>
      </Container>
      <Footer scrollToTop={scrollToTop} />
    </>
  );
};

export default App;
import React from "react";
import { Grid } from "@material-ui/core";
import passwordGenerator from "./images/passwordgenerator.png";
import eatDaBurger from "./images/eatdaburger.png";
import noteTaker from "./images/notetaker.png";
import weatherDashboard from "./images/weatherdashboard.png";
import foodFinder from "./images/foodfinder.png";
import fyre from "./images/fyre.png";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Container from "./components/Container.js";
import Project from "./components/Project.js";
import Footer from "./components/Footer.js";
import "./app.css";

const App = () => {

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
      <Header />
      <Main />
      <Container>
        <Grid container spacing={5} justify="space-around">
          <Project
            appLink="https://ethanl150.github.io/PasswordGenerator/"
            name="Password Generator"
            image={passwordGenerator}
            description="An application that generates a random password according to the criteria determined by the end user."
            gitHubLink="https://github.com/Ethanl150/passwordgenerator"
          />
          <Project
            appLink="https://eattheburger-app.herokuapp.com/"
            name="Eat-Da-Burger"
            image={eatDaBurger}
            description='An application that allows the user to "create" and "eat" burgers.'
            gitHubLink="https://github.com/Ethanl150/eat-da-burger"
          />
          <Project
            appLink="https://notetaker-application.herokuapp.com/"
            name="Note Taker"
            image={noteTaker}
            description="An application that allows the user to create, view, edit, and delete notes."
            gitHubLink="https://github.com/Ethanl150/notetaker"
          />
          <Project
            appLink="https://ethanl150.github.io/WeatherDashboard/"
            name="Weather Dashboard"
            image={weatherDashboard}
            description="An application that displays the weather of a specified city."
            gitHubLink="https://github.com/Ethanl150/weatherdashboard"
          />
        </Grid>
        <h1 className="text-center mt-5">Group projects</h1>
        <Grid container spacing={3} justify="space-around" className="mt-5">
          <Project
            appLink="https://ethanl150.github.io/FoodFinder/"
            name="Food Finder"
            image={foodFinder}
            description="An application that allows the user to search for places at which to eat in Philadelphia."
            gitHubLink="https://github.com/Ethanl150/foodfinder"
          />
          <Project
            appLink="https://fyre-app.herokuapp.com/"
            name="Fyre"
            image={fyre}
            description="An application that allows the user to quickly discover new music."
            gitHubLink="https://github.com/Ethanl150/fyre"
          />
        </Grid>
      </Container>
      <Footer scrollToTop={scrollToTop} />
    </>
  );
};

export default App;
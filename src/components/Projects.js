import React from 'react';
import "../css/projects.css";
import school from "../images/school.png";
import budget from "../images/budget.png";
import Burger from "../images/burger.gif";
import Getfit from "../images/Getfit.png";
import userdirectory from "../images/userdirectory.png";
import ProjectOne from "../images/ProjectOne.png";
// import image from "../images/image.png";
// import projectPic from "../css/images/ProjectOne.png";


function Projects () {

return (
    <section ClassName="card">
        <div ClassName="card-body">
          <br></br>
          <br></br>
          <br></br>
          <hr ClassName="my-4" />
          <h2 ClassName="card-title">Projects</h2>
          <div ClassName="container-fluid container">
            <div ClassName="row">
              <div ClassName="col-xs-2 column">
                  <h2>Virtual Reality Note Taker</h2>
                <a href="https://rocky-reaches-21290.herokuapp.com/">
                  <img src={school}
                  alt="Project #2"/>
                </a>
                </div>
            </div>
        </div>
    </div>
    <br></br>
    <div ClassName="card-body">
          <hr ClassName="my-4" />
          <div ClassName="container-fluid container">
            <div ClassName="row">
              <div ClassName="col-xs-2 column">
                  <h2>Impetus</h2>
                <a href="https://tjfitz.github.io/Impetus/">
                  <img src= {ProjectOne}
                  alt="Project #1"/>
                </a>
                </div>
            </div>
        </div>
    </div>
    <br></br>
    <div ClassName="card-body">
          <hr ClassName="my-4" />
          <div ClassName="container-fluid container">
            <div ClassName="row">
              <div ClassName="col-xs-2 column">
                  <h2>Eat More Burgers!!</h2>
                <a href="https://murmuring-basin-88193.herokuapp.com/">
                  <img src={Burger}
                  alt="Eat More burgers"/>
                </a>
                </div>
            </div>
        </div>
    </div>
    <br></br>
    <div ClassName="card-body">
          <hr ClassName="my-4" />
          <div ClassName="container-fluid container">
            <div ClassName="row">
              <div ClassName="col-xs-2 column">
                  <h2>Let's Get Fit!!</h2>
                <a href="https://murmuring-basin-88193.herokuapp.com/">
                  <img src={Getfit}
                  alt="Stay Fit"/>
                </a>
                </div>
            </div>
        </div>
    </div>
    <br></br>
    <div ClassName="card-body">
          <hr ClassName="my-4" />
          <div ClassName="container-fluid container">
            <div ClassName="row">
              <div ClassName="col-xs-2 column">
                  <h2>Budget and Prosper!!</h2>
                <a href="https://fiscalbudgettracker.herokuapp.com/">
                  <img src={budget}
                  alt="Fiscally Responsible"/>
                </a>
                </div>
            </div>
        </div>
    </div>
    <br></br>
    <div ClassName="card-body">
          <hr ClassName="my-4" />
          <div ClassName="container-fluid container">
            <div ClassName="row">
              <div ClassName="col-xs-2 column">
                  <h2>Employee Directory</h2>
                <a href="https://dbolding12.github.io/userdirectory/">
                  <img src={userdirectory}
                  alt="Employee Directory"/>
                </a>
                </div>
            </div>
        </div>
    </div>
</section>

    )
  }


export default Projects;
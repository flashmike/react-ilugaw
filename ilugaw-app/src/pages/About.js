import React from "react";
import "../styles/About.css";
import AboutImage from "../assets/images/nuts.jpg";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          Best porridge in town has arrived! Choose from a wide selection of healthy meal options to cater to your hunger!
        </p>
      </div>
    </div>
  );
}

export default About;
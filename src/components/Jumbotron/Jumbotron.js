import React from "react";
import "./Jumbotron.css";
import "../Footer/Footer.css";
import SocialLinks from "../Footer/SocialLinks";
import smilingTitan from "../../assets/image/smiling-titan.png";

export default function Jumbotron() {
  return (
    <div id="jumbotron" className="row justify-content-center">
      <div className="container">
        <div className="hero-wrapper">
          <img src={smilingTitan} alt="Hero Image" className="hero" />
        </div>
        <h1>
          <a href="index.html">RIJAL GHODI</a>
        </h1>
        <h2>
          A passionate self-taught <span>front-end engineer</span>
        </h2>
        <SocialLinks />
      </div>
    </div>
  );
}

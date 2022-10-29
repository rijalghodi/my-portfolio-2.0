import React from "react";
import "./Jumbotron.css";
import "../Footer/Footer.css";
import SocialLinks from "../Footer/SocialLinks";

export default function Jumbotron() {
  return (
    <div id="jumbotron" className="row justify-content-center">
      <div className="container">
        <h1>
          <a href="index.html">RIJAL GHODI</a>
        </h1>
        {/* Uncomment below if you prefer to use an image logo */}
        {/* <a href="index.html" class="mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a> --> */}
        <h2>
          A passionate self-taught <span>front-end engineer</span>
        </h2>
        <SocialLinks />
      </div>
    </div>
  );
}

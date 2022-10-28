import React from "react";
import "./Jumbotron.css";
import { FaInstagram, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

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

        <div className="social-links">
          <a href="https://twitter.com/rjlghd" className="twitter">
            <FaTwitter />
          </a>
          {/* <a href="#" className="facebook"><i className="bi bi-facebook"></i></a> --> */}
          <a href="https://instagram.com/rizal.ghod" className="instagram">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/rijal-ghodi/" className="linkedin">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/rijalghodi/" className="github">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

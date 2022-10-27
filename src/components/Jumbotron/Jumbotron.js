import React from "react";
import "./Jumbotron.css";
import { FaInstagram, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Jumbotron() {
  return (
    <div id="jumbotron" className="row justify-content-center">
      <div class="container">
        <h1>
          <a href="index.html">RIJAL GHODI</a>
        </h1>
        {/* Uncomment below if you prefer to use an image logo */}
        {/* <a href="index.html" class="mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a> --> */}
        <h2>
          A passionate self-taught <span>front-end engineer</span>
        </h2>

        <div class="social-links">
          <a href="https://twitter.com/rjlghd" class="twitter">
            <FaTwitter />
          </a>
          {/* <a href="#" class="facebook"><i class="bi bi-facebook"></i></a> --> */}
          <a href="https://instagram.com/rizal.ghod" class="instagram">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/rijal-ghodi/" class="linkedin">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/rijalghodi/" class="github">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

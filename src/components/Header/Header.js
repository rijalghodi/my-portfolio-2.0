import React from "react";
import "./Header.css";

export default function () {
  return (
    <div id="header" className="header container">
      <a class="navbar-brand" href="#">
        <h1>RG</h1>
      </a>
      <nav id="navbar" class="navbar">
        <ul>
          <li>
            <a class="nav-link active" href="#header">
              Home
            </a>
          </li>
          <li>
            <a class="nav-link" href="#about">
              About
            </a>
          </li>
          <li>
            <a class="nav-link" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li className="contact-button">
            <a class="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
    </div>
  );
}

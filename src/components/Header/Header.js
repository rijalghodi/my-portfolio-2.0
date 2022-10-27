import React from "react";
import "./Header.css";
import logoDark from "../../assets/image/logo-rg-dark.svg";
import logoLight from "../../assets/image/logo-rg-light.svg";

export default function Header() {
  return (
    <div id="header" className="header container">
      <a className="navbar-brand">
        <img src={logoLight} alt="Logo" />
      </a>
      <nav id="navbar" className="navbar">
        <ul>
          <li>
            <a className="nav-link active" href="#header">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="nav-link" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li className="contact-button">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
    </div>
  );
}

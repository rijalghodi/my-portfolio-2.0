import React from "react";
import "./Header.css";
import myLogoDark from "../../assets/image/logo-rg-dark.svg";
import myLogoLight from "../../assets/image/logo-rg-light.svg";

export default function Header() {
  return (
    <header id="header" className="container-fluid">
      <div className="header-wrap container">
        <a className="navbar-brand">
          <img src={myLogoLight} alt="My Logo" />
        </a>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link" href="#header">
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
    </header>
  );
}

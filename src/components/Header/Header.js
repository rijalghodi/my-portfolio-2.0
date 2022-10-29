import React, { useState } from "react";
import "./Header.css";
import myLogoLight from "../../assets/image/logo-rg-light.svg";
import { HiMenu } from "react-icons/hi";

export default function Header() {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  const handleClick = () => {
    if (openMobileNav) {
      setOpenMobileNav(false);
    } else {
      setOpenMobileNav(true);
    }
  };

  if (openMobileNav) {
    return (
      <nav id="navbar-mobile" className="navbar-mobile">
        <ul>
          <li>
            <a className="nav-link" href="#jumbotron" onClick={handleClick}>
              Home
            </a>
          </li>
          <li>
            <a className="nav-link" href="#about" onClick={handleClick}>
              About
            </a>
          </li>
          <li>
            <a className="nav-link" href="#portfolio" onClick={handleClick}>
              Portfolio
            </a>
          </li>
          <li className="contact-button">
            <a className="nav-link" href="#contact" onClick={handleClick}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  }
  return (
    <header id="header" className="container-fluid ">
      <div className="container header-wrap">
        <a href="http://localhost:3000/" className="navbar-brand">
          <img src={myLogoLight} alt="My Logo" />
        </a>
        <nav id="navbar" className="navbar  navbar-expand-lg  ">
          <ul>
            <li>
              <a className="nav-link" href="#jumbotron">
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
          <div className="mobile-nav-toggle" onClick={handleClick}>
            <HiMenu />
          </div>
        </nav>
      </div>
    </header>
  );
}

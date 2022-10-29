import React from "react";
import "./Footer.css";
import myLogoLight from "../../assets/image/logo-rg-light.svg";
import "../Jumbotron/Jumbotron.css";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer id="footer" className="row justify-content-center pb-3">
      <div className="col-9">
        {/* Logo */}
        <div className="row justify-content-center">
          <div className="col-auto my-logo">
            <img src={myLogoLight} alt="My Logo" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto text-center">
            <p className="motto mb-4">Initialize and Grow</p>
            <SocialLinks />
            <p>Handcrafted by © Rijal Ghodi 2022</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

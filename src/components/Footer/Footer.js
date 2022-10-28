import React from "react";
import "./Footer.css";
import myLogoDark from "../../assets/image/logo-rg-dark.svg";
import myLogoLight from "../../assets/image/logo-rg-light.svg";
import { FaInstagram, FaGithub, FaLinkedinIn, FaTwitter, FaMail, FaHome } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import "../Jumbotron/Jumbotron.css";

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
            <h4 className="mb-4">Initialize and Grow</h4>
            <div className="social-links mb-5">
              <a href="#" className="email" title="Home Website">
                <FaHome />
              </a>
              <a href="mailto:rijalghodi10@gmail.com" className="email" title="Email">
                <GrMail />
              </a>
              <a href="https://github.com/rijalghodi/" className="github" title="Github">
                <FaGithub />
              </a>
              {/* <a href="#" className="facebook"><i className="bi bi-facebook"></i></a> --> */}
              {/* <a href="https://instagram.com/rizal.ghod" className="instagram">
                <FaInstagram />
              </a> */}
              <a href="https://www.linkedin.com/in/rijal-ghodi/" className="linkedin" title="LinkedIn">
                <FaLinkedinIn />
              </a>

              <a href="https://twitter.com/rjlghd" className="twitter" title="Twitter">
                <FaTwitter />
              </a>
            </div>
            <p>Handcrafted by © Rijal Ghodi 2022</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

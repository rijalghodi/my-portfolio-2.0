import React from "react";
import "./Footer.css";
import { FaInstagram, FaGithub, FaLinkedinIn, FaTwitter, FaMail, FaHome } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

export default function () {
  return (
    <div className="social-links  mb-5">
      <a href="#" className="email" title="Home Website">
        <FaHome />
      </a>
      <a href="mailto:rijalghodi10@gmail.com" className="email" title="Email">
        <GrMail />
      </a>
      <a href="https://github.com/rijalghodi/" className="github" title="Github">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/rijal-ghodi/" className="linkedin" title="LinkedIn">
        <FaLinkedinIn />
      </a>
      <a href="https://twitter.com/rjlghd" className="twitter" title="Twitter">
        <FaTwitter />
      </a>
    </div>
  );
}

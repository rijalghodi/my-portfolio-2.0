import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedinIn, FaTwitter, FaHome } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function SocialLinks() {
  return (
    <div className="social-links  mb-4 mt-5">
      <Link to={"/#header"} className="home" title="Home Website">
        <FaHome />
      </Link>
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

import React from "react";
import "./About.css";
import Certificates from "./Certificates";
import Skills from "./Skills";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="introduction container-fluid">
        <div className="row justify-content-center ">
          <div className="introduction col-8" data-aos="fade-left">
            <div className="section-title">
              <h2>Hi, I'm Rijal. Nice to meet you.</h2>
            </div>
            <p>I am a fast-learner & self-taught front-end engineer. I love building responsive, innovative, and interactive web applications. Perseverance, growth mindset, and curiosity are three of my major strengths.</p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <Skills />

      {/* Certificatess */}
      <Certificates />
    </section>
  );
}

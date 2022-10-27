import React from "react";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="introduction-container">
        <div className="row justify-content-center ">
          <div className="introduction col-8" data-aos="fade-left">
            <h3>Hi, I'm Rijal. Nice to meet you.</h3>
            <p>I am a fast-learner & self-taught front-end engineer. I love building responsive, innovative, and interactive web applications. Perseverance, growth mindset, and curiosity are three of my major strengths.</p>
          </div>
        </div>
      </div>

      <div className="interests container">
        <div className="section-title">
          <h2>Skills</h2>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="icon-box">
              <h3>React</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box">
              <h3>Redux</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box">
              <h3>Webpack</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
            <div className="icon-box">
              <h3>JavaScript</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <h3>jQuery</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <h3>CSS</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <h3>Sass</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <h3>Bootstrap</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <h3>HTML 5</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="certificates container">
        <div className="section-title">
          <h2>Certificates</h2>
        </div>

        <div className="certificates-gallery">
          <div className="certificate-item">
            <img className="certificate-img" src="./assets/img/certificates/web-design-fcc.png" alt="Certificate" />
            <div className="certificate-giver">
              <div className="certificate-img-container">
                <img src="assets/img/certificates/freecodecamp.jfif" className="certificate-giver-img" alt="Logo" />
              </div>
              <h3>Responsive Web Design</h3>
              <h4>freecodecamp</h4>
              <a href="https://freecodecamp.org/certification/rijalghodi/responsive-web-design">Verified</a>
            </div>
          </div>
          <div className="certificate-item">
            <img className="certificate-img" src="./assets/img/certificates/javascript-fcc.png" alt="Certificate" />
            <div className="certificate-giver">
              <div className="certificate-img-container">
                <img src="assets/img/certificates/freecodecamp.jfif" className="certificate-giver-img" alt="Logo" />
              </div>
              <h3>JavaScript Algorithms and Data Structures</h3>
              <h4>freecodecamp</h4>
              <a href="https://freecodecamp.org/certification/rijalghodi/javascript-algorithms-and-data-structures">Verified</a>
            </div>
          </div>
          <div className="certificate-item">
            <img className="certificate-img" src="./assets/img/certificates/web-design-fcc.png" alt="Certificate" />
            <div className="certificate-giver">
              <div className="certificate-img-container">
                <img src="assets/img/certificates/codecademy.png" className="certificate-giver-img" alt="Logo" />
              </div>
              <h3>Front End Engineer Career Path</h3>
              <h4>Codecademy</h4>
              <a href="https://freecodecamp.org/certification/rijalghodi/responsive-web-design">Verified</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

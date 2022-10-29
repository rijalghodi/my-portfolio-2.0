import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";
import "./PortfolioFull.css";
import projectsData from "../../store/projectsData";
import "../../index.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import Project from "./Project";

export default function PortfolioFull() {
  return (
    <section id="portfolio-full" className="portfolio">
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-auto">
            <Link to={"/#portfolio"}>
              <button type="button" className="btn dark-btn-primary mb-5">
                <IoMdArrowRoundBack style={{ fontSize: "1.4rem", marginRight: "0.5rem" }} />
                Back to Home
              </button>
            </Link>
          </div>
        </div>
        <div className="section-title">
          <h2>My Recent Works</h2>
        </div>

        <div className="portfolio-container row justify-content-center align-item-start pb-5 mb-4">
          {projectsData &&
            projectsData.map((project) => (
              <div key={project.title} className="col-lg-4 col-md-6 gy-4 gx-4">
                <Project data={project} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

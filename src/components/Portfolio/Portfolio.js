import React from "react";
import "./Portfolio.css";
import projectsData from "../../store/projectsData";

import { Link } from "react-router-dom";
import Project from "./Project";

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>My Recent Works</h2>
        </div>

        <div className="portfolio-container row justify-content-center align-item-start px-2 pb-5 mb-4">
          {projectsData &&
            projectsData
              .filter(({ isPinned }) => isPinned)
              .slice(0, 6)
              .map((project) => (
                <div key={project.title} className="col-lg-4 col-md-6 col-sm-10 col-10 gy-4 gx-4">
                  <Project data={project} />
                </div>
              ))}
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <Link to={"/portfolio-full#portfolio-full"}>
              <button className="btn dark-btn-primary big-btn">See more</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

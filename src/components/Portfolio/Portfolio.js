import React from "react";
import "./Portfolio.css";
import projectsData from "../../store/projectsData";
import { FaGithub } from "react-icons/fa";

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>My Recent Works</h2>
        </div>

        <div className="portfolio-container row justify-content-center align-item-start pb-5 mb-4">
          {projectsData &&
            projectsData
              .filter(({ isPinned }) => isPinned)
              .slice(0, 6)
              .map(({ title, description, githubUrl, deploymentUrl, image }) => (
                <div key={title} className="col-lg-4 col-md-6 gy-4 gx-4">
                  <div className="portfolio-wrap">
                    <img src={image} className="img-fluid" alt="Songify" />
                    <div className="portfolio-info">
                      <h4>{title}</h4>
                      <p>{description}</p>
                      <div className="portfolio-links">
                        <a href={deploymentUrl} target="_blank" rel="noreferrer" title="View project">
                          <button className="btn our-btn-primary">Visit Web</button>
                        </a>
                        <a href={githubUrl} target="_blank" rel="noreferrer" title="Open github">
                          <button className="btn our-btn-secondary">See Github</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <button className="btn dark-btn-primary big-btn">See more</button>
          </div>
        </div>
      </div>
    </section>
  );
}

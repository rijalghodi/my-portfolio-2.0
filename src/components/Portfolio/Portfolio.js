import React from "react";
import "./Portfolio.css";
import projectsData from "../../store/projectsData";
import { FaGithub } from "react-icons/fa";

export default function Portfolio() {
  return (
    <section id="portfolio" class="portfolio">
      <div class="container">
        <div class="section-title">
          <h2>My Recent Works</h2>
        </div>

        <div class="portfolio-container row justify-content-center align-item-start pb-5 mb-4">
          {projectsData &&
            projectsData
              .filter(({ isPinned }) => isPinned)
              .slice(0, 6)
              .map(({ title, description, githubUrl, deploymentUrl, image, category, date, isPinned }) => (
                <div class="col-lg-4 col-md-6 gy-4 gx-4">
                  <div class="portfolio-wrap">
                    <img src={image} class="img-fluid" alt="Songify" />
                    <div class="portfolio-info">
                      <h4>{title}</h4>
                      <p>{description}</p>
                      <div class="portfolio-links">
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
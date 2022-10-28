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

        <div class="row portfolio-container justify-content-center">
          {projectsData &&
            projectsData
              .filter(({ isPinned }) => isPinned)
              .slice(0, 6)
              .map(({ title, description, githubUrl, deploymentUrl, image, category, date, isPinned }) => (
                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div class="portfolio-wrap">
                    <img src={image} class="img-fluid" alt="Songify" />
                    <div class="portfolio-info">
                      <h4>{title}</h4>
                      <p>{description}</p>
                      <div class="portfolio-links">
                        <a href={githubUrl} target="_blank" rel="noreferrer" title="Open github">
                          <FaGithub />
                        </a>
                        <a href={deploymentUrl} target="_blank" rel="noreferrer" title="View project">
                          <button className="btn my-btn-secondary visit-project-btn"> Visit Project</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}

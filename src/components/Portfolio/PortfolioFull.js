import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";
import "./PortfolioFull.css";
import projectsData from "../../store/projectsData";
import "../../index.css";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function PortfolioFull() {
  return (
    <div className="container-fluid portfolio">
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-auto">
            <Link to={"/"}>
              <button className="btn dark-btn-primary">
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
            projectsData.map(({ title, description, githubUrl, deploymentUrl, image }) => (
              <div key={title} className="col-lg-4 col-md-6 gy-4 gx-4">
                <div className="portfolio-wrap">
                  <img src={image} className="img-fluid" alt="Songify" />
                  <div className="portfolio-info">
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <div className="portfolio-links">
                      <a href={deploymentUrl} target="_blank" rel="noreferrer" title="View project">
                        <button className="btn light-btn-primary">Visit Web</button>
                      </a>
                      <a href={githubUrl} target="_blank" rel="noreferrer" title="Open github">
                        <button className="btn light-btn-secondary">See Github</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

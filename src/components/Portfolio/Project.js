import React from "react";
import "./Portfolio.css";

export default function Project({ data }) {
  const { title, description, githubUrl, deploymentUrl, image } = data;
  return (
    <div className="project">
      <img src={image} className="img-fluid" alt={title} />
      <div className="portfolio-info">
        <h3>{title}</h3>
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
  );
}

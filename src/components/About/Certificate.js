import React from "react";
import "./About.css";
import { FiExternalLink } from "react-icons/fi";

export default function Certificate({ data }) {
  const { title, issuedBy, date, courseUrl, credential } = data;
  return (
    <div className="certificate col-lg-8 col-md-10 col-sm-12 py-4 px-4 ">
      <img alt={title} src={issuedBy.companyLogo} className="card-img-top" />
      <div className="certificate-body ms-0 px-4">
        <h3 className="certificate-title">{title}</h3>
        <a className="company-link" href={issuedBy.url}>
          {issuedBy.company}
        </a>
        <p>Issued {date.toDateString().slice(4)}</p>
        <div className="buttons">
          <a href={courseUrl} target="_blank" rel="noreferrer" className="btn light-btn-secondary">
            What I Learned
          </a>
          <a href={credential} target="_blank" rel="noreferrer" className="btn light-btn-primary ms-2">
            Show credential <FiExternalLink />
          </a>
        </div>
      </div>
    </div>
  );
}

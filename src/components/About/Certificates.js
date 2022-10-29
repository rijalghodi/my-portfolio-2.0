import React from "react";
import certificatesData from "../../store/certificatesData";
import "./Certificates.css";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Certificates() {
  return (
    <div id="certificates" className="container">
      <div className="container">
        <div className="section-title">
          <h2>Certificates I Earned</h2>
        </div>

        <ul className="certificate-list pb-4">
          {certificatesData &&
            certificatesData.slice(0, 3).map(({ title, issuedBy, date, courseUrl, credential }) => (
              <li key={title} className="row gy-lg-3 gy-2 justify-content-center">
                <div className="certificate col-lg-8 col-md-10 col-sm-12 py-4 px-4 ">
                  <img src={issuedBy.companyLogo} className="card-img-top" alt={title} />
                  <div className="certificate-body ms-0 px-4">
                    <h3 className="certificate-title">{title}</h3>
                    <a href={issuedBy.url}>{issuedBy.company}</a>
                    <p>Issued {date.toDateString().slice(4)}</p>
                    <div className="buttons">
                      <a href={courseUrl} target="_blank" rel="noreferrer" className="btn bright-btn-secondary">
                        What I Learned
                      </a>
                      <a href={credential} target="_blank" rel="noreferrer" className="btn bright-btn-secondary ms-2">
                        Show credential <FiExternalLink />
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
        </ul>

        <div className="row justify-content-center">
          <div className="col-auto">
            <Link to={"/certificates-full"}>
              <button className="btn bright-btn-primary big-btn">See more</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

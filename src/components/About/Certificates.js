import React from "react";
import certificatesData from "../../store/certificatesData";
import "./Certificates.css";
import { FiExternalLink } from "react-icons/fi";

export default function Certificates() {
  return (
    <div id="certificates" className="container">
      <div className="section-title">
        <h2>Certificates I earn</h2>
      </div>

      <ul className="certificate-list">
        {certificatesData &&
          certificatesData.map(({ title, issuedBy, date, description, image, credential }) => (
            <li key={title} className="row gy-lg-3 gy-2 justify-content-center">
              <div className="certificate col-lg-8 col-md-10 col-sm-12 py-4 px-4 ">
                <img src={issuedBy.companyLogo} className="card-img-top" alt={title} />
                <div className="certificate-body ms-0 px-4">
                  <h3 className="certificate-title">{title}</h3>
                  <a href={issuedBy.url}>{issuedBy.company}</a>
                  <p>Issued {date.toDateString().slice(4)}</p>
                  <div className="buttons">
                    <button className="btn my-btn-secondary">What I Learn</button>
                    <button href={credential} className="btn my-btn-secondary ms-2">
                      Show credential <FiExternalLink />
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

import React from "react";
import certificatesData from "../../store/certificatesData";
import "./Certificates.css";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function CertificatesFull() {
  return (
    <div id="certificates-full" className="container-fluid">
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
          <h2>Certificates I Earned</h2>
        </div>

        <ul className="certificate-list pb-4">
          {certificatesData &&
            certificatesData.map(({ title, issuedBy, date, courseUrl, credential }) => (
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
      </div>
    </div>
  );
}

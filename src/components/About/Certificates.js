import React from "react";
import certificatesData from "../../store/certificatesData";
import "./Certificates.css";

export default function Certificates() {
  return (
    <div id="certificates" className="container">
      <div className="section-title">
        <h2>Certificates I earn</h2>
      </div>
      <div className="row gy-5 gx-lg-5 gx-md-3 justify-content-center">
        {/* Card */}
        {certificatesData &&
          certificatesData.map(({ title, issuedBy, date, description, image, credential }) => (
            <div key={title} className="certificate col-lg-6 col-md-12 py-4 px-4 ">
              <div className="card">
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body text-center pb-4">
                  <h5 className="card-title">{title}</h5>
                  <p>
                    Issued by <a href={issuedBy.url}>{issuedBy.company}</a> on <span>{date.toDateString()}</span>
                  </p>
                  <p className="card-text">{description}</p>
                  <a href={credential} className="btn btn-outline-danger btn-credential">
                    Show credential
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

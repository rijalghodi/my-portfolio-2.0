import React from "react";
import certificatesData from "../../store/certificatesData";
import "./Certificates.css";
import { Link } from "react-router-dom";
import Certificate from "./Certificate";

export default function Certificates() {
  return (
    <section id="certificates" className="container">
      <div className="container">
        <div className="section-title">
          <h2>Certificates I Earned</h2>
        </div>

        <ul className="certificate-list pb-4">
          {certificatesData &&
            certificatesData.slice(0, 3).map((certificate) => (
              <li key={certificate.title} className="row gy-lg-4 gy-3 justify-content-center">
                <Certificate data={certificate} />
              </li>
            ))}
        </ul>

        <div className="row justify-content-center">
          <div className="col-auto">
            <Link to={"/certificates-full#certificates-full"}>
              <button type="button" className="btn dark-btn-primary big-btn">
                Show more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

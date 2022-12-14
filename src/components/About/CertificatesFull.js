import React from "react";
import certificatesData from "../../store/certificatesData";
import "./Certificates.css";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import Certificate from "./Certificate";

export default function CertificatesFull() {
  return (
    <section id="certificates-full" className="container-fluid">
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-auto">
            <Link to={"/#certificates"}>
              <button type="button" className="btn dark-btn-primary mb-5">
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
            certificatesData.map((certificate) => (
              <li key={certificate.title} className="row gy-lg-4 gy-3 justify-content-center">
                <Certificate data={certificate} />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}

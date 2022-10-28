import React from "react";
import "./Contact.css";
import MailForm from "./MailForm";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="row section-title">
          <h2>Get in touch with me</h2>
        </div>

        <div className="row mail-form justify-content-center">
          <MailForm />
          {/* <form method="POST" action="https://formspree.io/f/xzbwjyjp" className="col-lg-6 col-md-10 col-12">
            <div className="mb-3">
              <label for="name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="name" name="name" placeholder="Put your name here" />
            </div>
            <div className="mb-3">
              <label for="emil" className="form-label">
                Email address
              </label>
              <input required type="email" className="form-control" id="email" name="email" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label for="subject" className="form-label">
                Subject
              </label>
              <input required type="text" className="form-control" id="subject" name="subject" placeholder="Put your subject here" />
            </div>
            <div className="mb-4">
              <label for="message" className="form-label">
                Message
              </label>
              <textarea required className="form-control" id="message" name="message" rows="3"></textarea>
            </div>
            <div className="row justify-content-center">
              <div className="col-auto">
                <button type="submit" className="btn light-btn-secondary big-btn">
                  Submit
                </button>
              </div>
            </div>
          </form> */}
        </div>
      </div>
    </section>
  );
}

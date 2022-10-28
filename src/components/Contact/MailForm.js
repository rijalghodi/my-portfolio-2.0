import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css";

export default function MailForm() {
  const [state, handleSubmit] = useForm("xzbwjyjp");

  if (state.succeeded) {
    return (
      <div className="notification">
        <p>Your message has been sent. Thank you!</p>
        {/* <div className="row justify-content-center">
          <div className="col-auto">
            <button className="btn light-btn-secondary big-btn">Send Again</button>
          </div>
        </div> */}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="col-lg-6 col-md-10 col-12">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input type="text" required className="form-control" id="name" name="name" placeholder="Put your name here" />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input type="email" required className="form-control" id="email" name="email" placeholder="name@example.com" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="mb-3">
        <label htmlFor="subject" className="form-label">
          Subject
        </label>
        <input type="text" className="form-control" id="subject" name="subject" placeholder="Put your subject here" />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea required className="form-control" id="message" name="message" rows="3"></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
      <div className="row justify-content-center">
        <div className="col-auto">
          <button type="submit" className="btn light-btn-secondary big-btn" disabled={state.submitting}>
            Submit
          </button>
        </div>
      </div>
      {state.succeeded && <p>Your message has been sent. Thank you!</p>}
    </form>
  );
}

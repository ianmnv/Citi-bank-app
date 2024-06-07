import React from "react";

import Page from "./Page";

function Contact() {
  return (
    <Page title="Contact" className="footer-content">
      <div className="contact-inner-cont">
        <h1 className="footer-title">
          Contact us for any inquire you might have
        </h1>
        <p className="footer-ps">Phone</p>
        <p className="footer-ps">+1 800 439 565</p>
        <p className="footer-ps">Email</p>
        <p className="footer-ps">infocitibank@gmail.com</p>
      </div>
      <div className="contact-inner-cont">
        <h1 className="footer-title">Or let us reach you out</h1>
        <label htmlFor="name" className="footer-ps">
          Your name
        </label>
        <input className="input-forms border-inp" type="text" id="name" />
        <label htmlFor="email" className="footer-ps">
          Your email
        </label>
        <input className="input-forms border-inp" type="text" id="email" />
        <label htmlFor="inquire" className="footer-ps">
          Your inquire
        </label>
        <textarea
          className="input-forms border-inp contact-textarea"
          name=""
          id="inquire"
        ></textarea>
        <button className="input-forms sign-in-out contact-btn">
          Contact me
        </button>
      </div>
    </Page>
  );
}

export default Contact;

import React from "react";
import { Link } from "react-router-dom";

import Page from "./Page";

function Footer() {
  return (
    <Page className="footer-cont">
      <Link to="/" className="footer-links">
        Home
      </Link>
      <Link to="/contact" className="footer-links">
        Contact
      </Link>
      <Link to="/about" className="footer-links">
        About us
      </Link>
      <Link to="/terms&conditions" className="footer-links">
        Terms & Cond.
      </Link>
    </Page>
  );
}

export default Footer;

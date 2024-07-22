import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-cont">
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
    </div>
  );
}

export default Footer;

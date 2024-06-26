import React from "react";
import { Link } from "react-router-dom";

import Page from "./Page";

function HomeLinks() {
  return (
    <Page className="homein-link-cont">
      <Link to="/" className="homein-link">
        Home
      </Link>
      <Link to="/personal" className="homein-link">
        Personal
      </Link>
      <Link to="/creditcards" className="homein-link">
        Credit Cards
      </Link>
      <Link to="/locations" className="homein-link">
        Locations
      </Link>
      <Link to="/advice" className="homein-link">
        Advide
      </Link>
      <Link to="/invest" className="homein-link">
        Invest
      </Link>
    </Page>
  );
}

export default HomeLinks;

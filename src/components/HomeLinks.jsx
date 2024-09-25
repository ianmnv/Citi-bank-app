import React, { useContext } from "react";
import { Link } from "react-router-dom";

import FullContext from "../FullContext";

function HomeLinks() {
  const { state } = useContext(FullContext);

  return (
    <nav className="homein-link-cont">
      <Link to="/" className="homein-link">
        Home
      </Link>
      <Link
        to={`/personal/${state.user.username}/${state.user.id}`}
        className="homein-link"
      >
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
    </nav>
  );
}

export default HomeLinks;

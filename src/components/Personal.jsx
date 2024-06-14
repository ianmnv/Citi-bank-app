import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Page from "./Page";

import PersonalInfo from "./PersonalInfo";

function Personal() {
  useEffect(() => window.scrollTo(0, 125), []);
  const [component, setComponent] = useState("profile");

  return (
    <Page title="Personal" className="personal-cont">
      <aside id="personal-aside">
        <Link to={"/profile"} className="personal-links">
          Profile
        </Link>
        <Link to={"/movements"} className="personal-links">
          Your money
        </Link>
      </aside>

      <PersonalInfo component={component} setComponent={setComponent} />
    </Page>
  );
}

export default Personal;

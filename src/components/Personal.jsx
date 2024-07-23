import React, { useState, useEffect } from "react";

import Page from "./Page";

import PersonalInfo from "./PersonalInfo";

function Personal() {
  const [component, setComponent] = useState("profile");

  useEffect(() => window.scrollTo(0, 125), []);

  const changeContent = (e) => {
    const allSiblings = e.target
      .closest("#personal-aside")
      .querySelectorAll(".personal-links");
    allSiblings.forEach((link) => {
      link.classList.remove("active-link");
    });

    e.target.classList.add("active-link");

    setComponent(e.target.dataset.content);
  };

  return (
    <Page title="Personal" className="personal-cont">
      <aside id="personal-aside">
        <button
          onClick={changeContent}
          data-content="profile"
          className="personal-links active-link"
        >
          Profile
        </button>
        <button
          onClick={changeContent}
          data-content="money"
          className="personal-links"
        >
          Movements
        </button>
      </aside>

      <PersonalInfo content={component} />
    </Page>
  );
}

export default Personal;

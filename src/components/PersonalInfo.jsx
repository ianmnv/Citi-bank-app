import React from "react";

import Profile from "./Profile";
import Money from "./Money";

function PersonalInfo(props) {
  switch (props.content) {
    case "profile":
      return (
        <article className="personal-content">
          <Profile />
        </article>
      );
    case "money":
      return (
        <article className="personal-content">
          <Money />
        </article>
      );
  }
}

export default PersonalInfo;

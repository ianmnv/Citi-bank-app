import React from "react";

import Profile from "./Profile";
import Money from "./Money";

function PersonalInfo(props) {
  switch (props.content) {
    case "profile":
      return (
        <div className="personal-content">
          <Profile />
        </div>
      );
    case "money":
      return (
        <div className="personal-content">
          <Money />
        </div>
      );
  }
}

export default PersonalInfo;

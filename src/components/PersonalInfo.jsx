import React from "react";

import Profile from "./Profile";
import Money from "./Money";

function PersonalInfo(props) {
  return <>{props.component === "profile" ? <Profile /> : <Money />}</>;
}

export default PersonalInfo;

import React from "react";

import businessman from "../imgs/businessman.png";

import Page from "./Page";
import SliderHome from "./SliderHome";

function HomeIn() {
  return (
    <Page title="Home" className="homein-cont">
      <img src={businessman} alt="businessman" className="home-imgs" />
      <div id="homein-slider">
        <SliderHome />
      </div>
    </Page>
  );
}

export default HomeIn;

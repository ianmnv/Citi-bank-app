import React from "react";

import businessman from "../imgs/businessman.png";

import Page from "./Page";

function HomeIn() {
  return (
    <Page title="Home" className="homein-cont">
      <img src={businessman} alt="businessman" className="home-imgs" />
      <div>
        <h1 className="homein-h1">Welcome to Citi Bank</h1>
        <p className="homein-p">
          You now have access to the best products and services in the market!
        </p>
        <h2 className="homein-h2">What would you like to do today?</h2>
        <p className="homein-p">
          Take control over your daily banking, get advice from the best (us) to
          grow your money.
        </p>
        <h2 className="homein-h2">You don't have a credit card yet?</h2>
        <p className="homein-p">Get it today!</p>
      </div>
    </Page>
  );
}

export default HomeIn;

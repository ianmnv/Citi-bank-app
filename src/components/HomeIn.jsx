import React from "react";

import businessman from "../imgs/businessman.png";

import Page from "./Page";

function HomeIn() {
  return (
    <Page title="Home" className="homein-cont">
      <img src={businessman} alt="businessman" className="home-imgs" />
      <div id="homein-slider">
        {/* // Arrow right
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg> */}

        {/* Arrow left
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg> */}

        <div className="slides">
          <h1 className="homein-h1">Welcome to Citi Bank</h1>
          <p className="homein-p">
            You now have access to the best products and services in the market!
          </p>
        </div>

        <div className="slides">
          <h2 className="homein-h2">What would you like to do today?</h2>
          <p className="homein-p">
            Take control over your daily banking, get advice from the best (us)
            to grow your money.
          </p>
        </div>

        <div className="slides">
          <h2 className="homein-h2">You don't have a credit card yet?</h2>
          <p className="homein-p">Get it today!</p>
        </div>
      </div>
    </Page>
  );
}

export default HomeIn;

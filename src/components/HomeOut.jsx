import React, { useEffect, useState } from "react";

import Page from "./Page";
import projection from "../imgs/projection.png";

function HomeOut() {
  return (
    <Page title="Home guest">
      <div id="homeout-cont">
        <div id="homeout-text">
          <img src={projection} alt="home-icon" className="homeout-img" />
          <div id="homeout-inner-txt">
            <h1>Sign up today!</h1>
            <p id="homeout-p">
              Singing up with us have never been so easy!
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate delectus dolore asperiores sapiente molestiae harum
              voluptates, fugit, quas repellat nisi dolorum odio! Doloribus
              deleniti explicabo nihil vel rem unde sunt. Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Nihil itaque iste ipsum tempora
              qui enim exercitationem temporibus ut ex, laudantium, ullam
              doloribus error eos rem reprehenderit facere quia inventore
              deleniti!
            </p>
          </div>
        </div>

        <form action="" id="homeout-form">
          <div className="homeout-inner-cont">
            <label className="homeout-labels" htmlFor="firstName">
              First Name:
            </label>
            <input
              placeholder="First Name"
              className="homeout-inp input-forms"
              type="text"
              name="firstName"
              id="firstName"
            />
          </div>

          <div className="homeout-inner-cont">
            <label className="homeout-labels" htmlFor="lastName">
              Last Name:
            </label>
            <input
              placeholder="Last Name"
              className="homeout-inp input-forms"
              type="text"
              id="lastName"
            />
          </div>

          <div className="homeout-inner-cont">
            <label className="homeout-labels" htmlFor="email">
              Email:
            </label>
            <input
              placeholder="Email"
              className="homeout-inp input-forms"
              type="text"
              name="email"
              id="email"
            />
          </div>

          <div className="homeout-inner-cont">
            <label className="homeout-labels" htmlFor="cardType">
              Type of debit card you would like:
            </label>
            <select
              className="homeout-inp input-forms"
              name="cardType"
              id="cardType"
            >
              <option value="student">Student account</option>
              <option value="checking">Checking account</option>
              <option value="saving">Saving account</option>
            </select>
          </div>

          <button className="homeout-inp homeout-btn sign-in-out">
            SIGN UP
          </button>
        </form>
      </div>
    </Page>
  );
}

export default HomeOut;

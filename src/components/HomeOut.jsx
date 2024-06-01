import React from "react";
import Axios from "axios";
import { useImmerReducer } from "use-immer";

import Page from "./Page";
import projection from "../imgs/projection.png";

function HomeOut() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    card: "student",
  };

  function reducerCallback(draft, action) {
    switch (action.type) {
      case "firstName":
        draft.firstName = action.value;
        break;
      case "lastName":
        draft.lastName = action.value;
        break;
      case "email":
        draft.email = action.value;
        break;
      case "card":
        draft.card = action.value;
        break;
    }
  }

  const [state, dispatch] = useImmerReducer(reducerCallback, initialValues);

  function handlerForm(e) {
    e.preventDefault();
    console.log(state);
  }

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

        <form action="" id="homeout-form" onSubmit={handlerForm}>
          <div className="homeout-inner-cont">
            <label className="homeout-labels" htmlFor="firstName">
              First Name:
            </label>
            <input
              onChange={(e) =>
                dispatch({ type: "firstName", value: e.target.value })
              }
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
              onChange={(e) =>
                dispatch({ type: "lastName", value: e.target.value })
              }
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
              onChange={(e) =>
                dispatch({ type: "email", value: e.target.value })
              }
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
              onChange={(e) =>
                dispatch({ type: "card", value: e.target.value })
              }
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

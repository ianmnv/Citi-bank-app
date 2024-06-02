import React, { useContext } from "react";
import Axios from "axios";

import Page from "./Page";
import projection from "../imgs/projection.png";

import FullContext from "../FullContext";

function HomeOut() {
  const { setLogIn, state, dispatch } = useContext(FullContext);

  async function handlerForm(e) {
    e.preventDefault();

    try {
      const response = await Axios.post("/register", state);
      console.log(response);
      localStorage.setItem("BankToken", response.data.token);
      localStorage.setItem("BankUsername", response.data.username);
      setLogIn(true);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <Page title="Home guest">
      <div id="homeout-cont">
        <div id="homeout-text">
          <img src={projection} alt="home-icon" className="homeout-img" />
          <div id="homeout-inner-txt">
            <h1>Sign up today!</h1>
            <p id="homeout-p">
              By singin up with us you'll have access to many advantages in our
              products, services and cards! After singing up take a minute or 2
              to really read all the benefits that our debit and cards provide
              to you.
              <br />
              Citi Bank is a brand new bank that will help you grow and
              understand your money, our advisors will happily help you with
              your everyday needs. And even though our bank is new, this doesn't
              mean we don't know what we are doing, all our staff have a lot of
              experience working in finance, economics and many more important
              work, we have brought very experienced and proffesional personal
              that you won't regret our services and products, we're proud of
              who we are and we are sure you will love it too.
              <br />
              <br />
              Hope to see you soon!
              <br />
              -Citi Bank CEO.
            </p>
          </div>
        </div>

        <form action="" id="homeout-form" name="signup" onSubmit={handlerForm}>
          <div className="homeout-inner-cont">
            <label className="homeout-labels" htmlFor="signup-username">
              User name:
            </label>
            <input
              onChange={(e) =>
                dispatch({ type: "username", value: e.target.value })
              }
              placeholder="Username"
              className="homeout-inp input-forms"
              type="text"
              name="signup-username"
              id="signup-username"
            />
          </div>

          <div className="homeout-inner-cont">
            <label className="homeout-labels" htmlFor="signup-fullName">
              Full name:
            </label>
            <input
              onChange={(e) =>
                dispatch({ type: "fullName", value: e.target.value })
              }
              placeholder="Full name"
              className="homeout-inp input-forms"
              type="text"
              name="signup-fullName"
              id="signup-fullName"
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
            <label className="homeout-labels" htmlFor="signup-password">
              Password:
            </label>
            <input
              onChange={(e) =>
                dispatch({ type: "password", value: e.target.value })
              }
              placeholder="Password"
              className="homeout-inp input-forms"
              type="password"
              name="signup-password"
              id="signup-password"
            />
          </div>

          <div className="homeout-inner-cont">
            <label className="homeout-labels" htmlFor="gender">
              Gender:
            </label>

            <div id="homeout-gen-cont">
              <label className="input-forms">
                <input
                  onChange={(e) =>
                    dispatch({ type: "gender", value: e.target.value })
                  }
                  type="radio"
                  name="gender"
                  id="gender"
                  value="male"
                />{" "}
                Male
              </label>

              <label className="input-forms">
                <input
                  onChange={(e) =>
                    dispatch({ type: "gender", value: e.target.value })
                  }
                  type="radio"
                  name="gender"
                  value="female"
                />{" "}
                Female
              </label>
            </div>
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

          <button className="homeout-btn sign-in-out">SIGN UP</button>
        </form>
      </div>
    </Page>
  );
}

export default HomeOut;

import React, { useState, useContext } from "react";
import Axios from "axios";

import FullContext from "../FullContext";

function HeaderLoggedOut() {
  const [username, setUsername] = useState("");
  const [password, setPass] = useState("");

  const { setLogIn } = useContext(FullContext);

  async function submitHandler(e) {
    e.preventDefault();
    try {
      if (username != "" || password != "") {
        const response = await Axios.post("/login", { username, password });
        if (response.data === false) {
          alert("Something went wrong, please try again");
          return;
        }
        localStorage.setItem("BankToken", response.data.token);
        localStorage.setItem("BankUsername", response.data.username);
        setLogIn(true);
      } else {
        alert("Please fill the inputs");
      }
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <form onSubmit={submitHandler} action="" id="header-form" name="signin">
        <label htmlFor="singin-firstName">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="header-icon-f"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          className="input-forms"
          type="text"
          placeholder="First name"
          id="singin-firstName"
          name="singin-firstName"
        />

        <label htmlFor="singin-password">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="header-icon-f"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
        </label>
        <input
          onChange={(e) => setPass(e.target.value)}
          className="input-forms"
          type="password"
          placeholder="password"
          id="singin-password"
          name="singin-password"
        />

        <button className="input-forms sign-in-out header-signin-btn">
          Sign In
        </button>
      </form>
    </>
  );
}

export default HeaderLoggedOut;

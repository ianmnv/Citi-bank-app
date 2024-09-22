import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useImmer } from "use-immer";

import FullContext from "../FullContext";

function HeaderLoggedOut() {
  const [state, dispatch] = useImmer({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const { setLoggedIn, users } = useContext(FullContext);

  function submitHandler(e) {
    e.preventDefault();

    const user = users.find((user) => state.username === user.username);

    if (user && state.password === user.password) {
      setLoggedIn(true);
      localStorage.setItem("userData", JSON.stringify(user));
      navigate("/");
    } else {
      alert("Profile not found, please try again.");
    }
  }

  return (
    <>
      <form onSubmit={submitHandler} action="" id="header-form" name="signin">
        <label htmlFor="singin-userName">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="header-icon-out"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </label>
        <input
          onChange={(e) =>
            dispatch((draft) => {
              draft.username = e.target.value;
            })
          }
          className="input-forms"
          type="text"
          placeholder="Username"
          id="singin-userName"
          name="singin-userName"
        />

        <label htmlFor="singin-password">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="header-icon-out"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
        </label>
        <input
          onChange={(e) =>
            dispatch((draft) => {
              draft.password = e.target.value;
            })
          }
          className="input-forms"
          type="password"
          placeholder="Password"
          id="singin-password"
          name="singin-password"
        />

        <button className="input-forms sign-in-out header-sign-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="header-sign-icons"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
            />
          </svg>
          <span>Sign In</span>
        </button>
      </form>
    </>
  );
}

export default HeaderLoggedOut;

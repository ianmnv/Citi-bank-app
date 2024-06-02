import React, { useContext } from "react";
import { Link } from "react-router-dom";

import maleAvatar from "../imgs/male-avatar.png";
import femAvatar from "../imgs/fem-avatar.png";

import FullContext from "../FullContext";

function HeaderLoggedIn() {
  const { setLogIn, state } = useContext(FullContext);

  function signoutBtn() {
    localStorage.removeItem("BankUsername");
    localStorage.removeItem("BankToken");
    setLogIn(false);
  }

  return (
    <div id="header-in-cont">
      <img src={femAvatar} alt="avatar" className="header-loggedin-avatar" />
      <span>Hello Mr.</span>
      <button
        onClick={signoutBtn}
        className="input-forms sign-in-out header-sign-btn"
      >
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

        <span>Sign out</span>
      </button>
    </div>
  );
}

export default HeaderLoggedIn;

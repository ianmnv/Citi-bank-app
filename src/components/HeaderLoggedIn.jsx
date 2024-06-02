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
    <div id="homein-cont">
      <img src={maleAvatar} alt="avatar" className="header-loggedin-avatar" />
      <span>Hello Mr.</span>
      <button onClick={signoutBtn}>Sign out</button>
    </div>
  );
}

export default HeaderLoggedIn;

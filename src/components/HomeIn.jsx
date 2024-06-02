import React, { useContext } from "react";

import Page from "./Page";

import FullContext from "../FullContext";

function HomeIn() {
  const { setLogIn } = useContext(FullContext);

  async function getUserData() {
    try {
      localStorage.removeItem("BankToken");
      localStorage.removeItem("BankUsername");
      setLogIn(false);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <Page title="Home">
      <p>Welcome!</p>
      <button onClick={getUserData}>Get data</button>
    </Page>
  );
}

export default HomeIn;

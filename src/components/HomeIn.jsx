import React, { useContext } from "react";

import Page from "./Page";

import FullContext from "../FullContext";

function HomeIn() {
  // const { setLogIn } = useContext(FullContext);

  return (
    <Page title="Home">
      <p>Welcome to Home!</p>
    </Page>
  );
}

export default HomeIn;

import React from "react";

function HomeIn(props) {
  async function getUserData() {
    try {
      localStorage.removeItem("BankToken");
      localStorage.removeItem("BankUsername");
      props.setLogIn(false);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <p>Welcome!</p>
      <button onClick={getUserData}>Get data</button>
    </>
  );
}

export default HomeIn;

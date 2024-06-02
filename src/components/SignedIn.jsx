import React from "react";
import Axios from "axios";

function SignedIn() {
  async function getUserData() {
    try {
      const response = await Axios.get(`/users`);
      // localStorage.removeItem("BankToken");
      // localStorage.removeItem("BankUsername");
      console.log(response);
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

export default SignedIn;

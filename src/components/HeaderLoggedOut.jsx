import React, { useEffect, useState } from "react";

function HeaderLoggedOut() {
  return (
    <>
      <form action="" id="header-form">
        <input type="text" placeholder="first name" />
        <input type="password" placeholder="password" />
        <button>Sign In</button>
      </form>
    </>
  );
}

export default HeaderLoggedOut;

import React, { useEffect, useState } from "react";

import projection from "../imgs/projection.png";

function HomeOut() {
  return (
    <>
      <div id="homeout-cont">
        <img src={projection} alt="home-icon" className="main-imgs" />
        <h1>Sign-up today!</h1>
        <p>
          Singing up with us have never been so easy!
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          delectus dolore asperiores sapiente molestiae harum voluptates, fugit,
          quas repellat nisi dolorum odio! Doloribus deleniti explicabo nihil
          vel rem unde sunt.
        </p>
      </div>

      <form action="" id="homeout-form">
        <label htmlFor="firstName">First Name:</label>
        <input type="text" name="firstName" id="firstName" />

        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" />

        <label htmlFor="cardType">Type of debit card you would like:</label>
        <select name="cardType" id="cardType">
          <option value="student">Student account</option>
          <option value="checking">Checking account</option>
          <option value="saving">Saving account</option>
        </select>

        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
      </form>
    </>
  );
}

export default HomeOut;

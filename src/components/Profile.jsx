import React, { useContext, useState } from "react";

import FullContext from "../FullContext";

function Profile() {
  const { state, dispatch } = useContext(FullContext);
  const [edit, setEdition] = useState(false);
  const gender = state.user.gender;
  const cardType = state.user.card;

  function changeCallback(e, inputType) {
    if (edit) {
    }
  }

  return (
    <>
      <section className="personal-h1-c">
        <h1 className="personal-h1">YOUR INFORMATION</h1>
      </section>

      <main id="profile-edit-c">
        <button
          id="profile-edit-btn"
          onClick={() => {
            setEdition(true);
          }}
        >
          Edit info
        </button>

        <div className="c-inp">
          <label htmlFor="username">username:</label>{" "}
          <input
            type="text"
            id="username"
            className="p-e-inp"
            value={state.user.username}
            onChange={(e) => changeCallback(e, "username")}
          />
        </div>

        <div className="c-inp">
          <label htmlFor="fullname">Fullname:</label>{" "}
          <input
            type="text"
            id="fullname"
            className="p-e-inp"
            value={state.user.fullName}
            onChange={(e) => changeCallback(e, "fullName")}
          />
        </div>

        <div className="c-inp">
          <label htmlFor="email">Email:</label>{" "}
          <input
            type="text"
            id="email"
            className="p-e-inp"
            value={state.user.email}
            onChange={(e) => changeCallback(e, "email")}
          />
        </div>

        <div className="c-inp">
          <label htmlFor="password">Password:</label>{" "}
          <input
            type="password"
            id="password"
            className="p-e-inp"
            value={state.user.password}
            onChange={(e) => changeCallback(e, "password")}
          />
        </div>

        <div className="c-inp">
          <label htmlFor="gender">Gender:</label>

          <div className="profile-gen-cont">
            <label>
              <input
                checked={gender === "male"}
                type="radio"
                name="gender"
                value="male"
                onChange={(e) => changeCallback(e, "gender")}
              />{" "}
              Male
            </label>{" "}
            <label>
              <input
                checked={gender === "female"}
                type="radio"
                name="gender"
                value="female"
                onChange={(e) => changeCallback(e, "gender")}
              />{" "}
              Female
            </label>
          </div>
        </div>

        <div className="c-inp">
          <label htmlFor="cardType">Debit-card:</label>{" "}
          <select
            className="p-e-inp"
            name="cardType"
            id="cardType"
            onChange={(e) => changeCallback(e, "card")}
          >
            <option value="student" selected={cardType === "student"}>
              Student account
            </option>
            <option value="checking" selected={cardType === "checking"}>
              Checking account
            </option>
            <option value="saving" selected={cardType === "saving"}>
              Saving account
            </option>
          </select>
        </div>

        <div className="c-inp address">
          <label htmlFor="address">Address:</label>{" "}
          <textarea
            name="address"
            id="address"
            onChange={(e) => changeCallback(e, "address")}
          ></textarea>
        </div>
      </main>
    </>
  );
}

export default Profile;

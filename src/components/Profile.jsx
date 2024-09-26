import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import FullContext from "../FullContext";

function Profile() {
  const { state, dispatch } = useContext(FullContext);
  const [edit, setEdition] = useState(true);
  const gender = state.user.gender;
  const cardType = state.user.card;
  const navigate = useNavigate();

  function changeCallback(e, inputType) {
    if (!edit) {
      dispatch({ type: inputType, value: e.target.value });
    }
  }

  async function editSaveInfo() {
    if (edit) {
      setEdition(false);
      document
        .querySelectorAll(".p-edit-state")
        .forEach((el) => el.classList.remove("p-edit-state"));
    } else {
      setEdition(true);
      // Request goes here
      navigate(`/`);
      alert("Information updated");
    }
  }

  return (
    <>
      <section className="personal-h1-c">
        <h1 className="personal-h1">YOUR INFORMATION</h1>
      </section>

      <main id="profile-edit-c">
        <button id="profile-edit-btn" onClick={editSaveInfo}>
          {edit ? "Edit info" : "Save"}
        </button>

        <div className="c-inp">
          <label htmlFor="username">username:</label>{" "}
          <input
            type="text"
            id="username"
            className="p-e-inp p-edit-state"
            value={state.user.username}
            readOnly={edit}
            onChange={(e) => changeCallback(e, "username")}
          />
        </div>

        <div className="c-inp">
          <label htmlFor="fullname">Full name:</label>{" "}
          <input
            type="text"
            id="fullname"
            className="p-e-inp p-edit-state"
            value={state.user.fullName}
            readOnly={edit}
            onChange={(e) => changeCallback(e, "fullName")}
          />
        </div>

        <div className="c-inp">
          <label htmlFor="email">Email:</label>{" "}
          <input
            type="text"
            id="email"
            className="p-e-inp p-edit-state"
            value={state.user.email}
            readOnly={edit}
            onChange={(e) => changeCallback(e, "email")}
          />
        </div>

        <div className="c-inp">
          <label htmlFor="password">Password:</label>{" "}
          <input
            type="password"
            id="password"
            className="p-e-inp p-edit-state"
            value={state.user.password}
            readOnly={edit}
            onChange={(e) => changeCallback(e, "password")}
          />
        </div>

        <div className="c-inp">
          <label htmlFor="gender">Gender:</label>

          <div className="profile-gen-cont">
            <label className="p-edit-state">
              <input
                checked={gender === "male"}
                type="radio"
                id="gender"
                name="gender"
                value="male"
                readOnly={edit}
                onChange={(e) => changeCallback(e, "gender")}
              />{" "}
              Male
            </label>{" "}
            <label className="p-edit-state">
              <input
                checked={gender === "female"}
                type="radio"
                name="gender"
                value="female"
                readOnly={edit}
                onChange={(e) => changeCallback(e, "gender")}
              />{" "}
              Female
            </label>
          </div>
        </div>

        <div className="c-inp">
          <label htmlFor="cardType">Debit-card:</label>{" "}
          <select
            className="p-e-inp p-edit-state"
            name="cardType"
            id="cardType"
            onChange={(e) => changeCallback(e, "card")}
            disabled={edit}
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
            className="p-edit-state"
            name="address"
            id="address"
            value={state.user.address}
            readOnly={edit}
            onChange={(e) => changeCallback(e, "address")}
          ></textarea>
        </div>
      </main>
    </>
  );
}

export default Profile;

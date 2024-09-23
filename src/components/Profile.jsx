import React, { useContext } from "react";

import FullContext from "../FullContext";

function Profile() {
  const { currentUser } = useContext(FullContext);

  return (
    <>
      <section className="personal-h1-c">
        <h1 className="personal-h1">YOUR INFORMATION</h1>
      </section>

      <main id="profile-edit-c">
        <button id="profile-edit-btn">Edit info</button>

        <div className="c-inp">
          <label htmlFor="username">username:</label>{" "}
          <input
            type="text"
            id="username"
            className="p-e-inp"
            value={currentUser.username}
          />
        </div>

        <div className="c-inp">
          <label htmlFor="fullname">Fullname:</label>{" "}
          <input
            type="text"
            id="fullname"
            className="p-e-inp"
            value={currentUser.fullName}
          />
        </div>

        <div className="c-inp">
          <label htmlFor="email">Email:</label>{" "}
          <input
            type="text"
            id="email"
            className="p-e-inp"
            value={currentUser.email}
          />
        </div>

        <div className="c-inp">
          <label htmlFor="password">Password:</label>{" "}
          <input
            type="password"
            id="password"
            className="p-e-inp"
            value={currentUser.password}
          />
        </div>

        <div className="c-inp">
          <label htmlFor="gender">Gender:</label>

          <div className="profile-gen-cont">
            <label>
              <input type="radio" name="gender" value="male" /> Male
            </label>{" "}
            <label>
              <input type="radio" name="gender" value="female" /> Female
            </label>
          </div>
        </div>

        <div className="c-inp">
          <label htmlFor="cardType">Debit-card:</label>{" "}
          
          <select className="p-e-inp" name="cardType" id="cardType">
            <option value="student">Student account</option>
            <option value="checking">Checking account</option>
            <option value="saving">Saving account</option>
          </select>
        </div>

        <div className="c-inp address">
          <label htmlFor="address">Address:</label>{" "}
          <textarea name="address" id="address"></textarea>
        </div>
      </main>
    </>
  );
}

export default Profile;

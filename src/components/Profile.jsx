import React from "react";

function Profile() {
  return (
    <>
      <section className="personal-h1-c">
        <h1 className="personal-h1">YOUR INFORMATION</h1>
      </section>

      <div>
        <div>
          <button>Edit info</button>
        </div>

        <main id="profile-edit-c">
          <label htmlFor="username">username:</label>
          <input type="text" id="username" />
          <label htmlFor="fullname">Fullname:</label>
          <input type="text" id="fullname" />
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" />
          <label htmlFor="password">Password:</label>
          <input type="text" id="password" />
          <label htmlFor="gender">Gender:</label>
          <input type="text" id="gender" />
          <label htmlFor="debit-card">Debit-card:</label>
          <input type="text" id="debit-card" />
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" />
        </main>
      </div>
    </>
  );
}

export default Profile;

import "./App.css";

import Header from "./components/Header";
import HomeOut from "./components/HomeOut";
import HomeIn from "./components/HomeIn";
import HomeLinks from "./components/HomeLinks";
import Personal from "./components/Personal";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Terms from "./components/Terms";
import About from "./components/About";

import FullContext from "./FullContext";

import { httpGetAllUsers } from "./hooks/requests";

import { useImmerReducer } from "use-immer";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let currentUser;
  const [users, setUsers] = useState({});
  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem("userData"))
  );

  const initialValues = {
    id: 0,
    username: "",
    fullName: "",
    email: "",
    password: "",
    gender: "male",
    card: "student",
    creditCard: "",
    movements: [],
  };

  function reducerCallback(draft, action) {
    switch (action.type) {
      case "username":
        draft.username = action.value;
        break;
      case "fullName":
        draft.fullName = action.value;
        break;
      case "email":
        draft.email = action.value;
        break;
      case "password":
        draft.password = action.value;
        break;
      case "gender":
        draft.gender = action.value;
        break;
      case "card":
        draft.card = action.value;
        break;
      case "creditCard":
        draft.card = action.value;
        break;
      case "movements":
        draft.movements = draft.movements.push(action.value);
        break;
    }
  }

  const [state, dispatch] = useImmerReducer(reducerCallback, initialValues);

  useEffect(() => {
    async function getData() {
      const data = await httpGetAllUsers();
      setUsers(data);
    }
    getData();
  }, []);

  if (loggedIn) {
    const user = JSON.parse(localStorage.getItem("userData"));
    currentUser = user;
  }

  return (
    <FullContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        state,
        dispatch,
        currentUser,
        users,
      }}
    >
      <BrowserRouter>
        <Header />

        {loggedIn ? <HomeLinks /> : ""}

        <Routes>
          <Route path="/" element={loggedIn ? <HomeIn /> : <HomeOut />} />
          <Route path="/personal/:username/:id" element={<Personal />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms&conditions" element={<Terms />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </FullContext.Provider>
  );
}

export default App;

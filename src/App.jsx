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

import { useImmerReducer } from "use-immer";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const accounts = [
    {
      id: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      username: "ianmng",
      fullName: "Ian Nava",
      email: "ianmng@gmail.com",
      password: "mybankpass",
      gender: "male",
      card: "student",
      creditCard: "",
      movements: [920, 9000, 20000, -5000, -100, 10000, -450, -3400],
    },
    {
      id: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      username: "john117",
      fullName: "John Smith",
      email: "john117@gmail.com",
      password: "masterchiefpass",
      gender: "male",
      card: "saving",
      creditCard: "",
      movements: [5000, -2000, 1000, 599, -355, 9000, -500, -210],
    },
    {
      id: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      username: "meganfox",
      fullName: "Megan Fox",
      email: "foxyM@gmail.com",
      password: "meganfoxpass",
      gender: "female",
      card: "checking",
      creditCard: "",
      movements: [20000, 4000, -2500, -6000, 1200, -899, -300, -890, 2000],
    },
  ];

  const initialValues = {
    id: [1, 2, 3, 4, 5, 6, 7, 8, 9],
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

  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem("userData"))
  );

  let currentUser;

  if (loggedIn) {
    const user = JSON.parse(localStorage.getItem("userData"));
    currentUser = user;

    const createId = (num) => {
      const random = Math.trunc(Math.random() * 9);
      return num * random;
    };
    currentUser.id.forEach((el, i, arr) => (arr[i] = createId(el)));
  }

  return (
    <FullContext.Provider
      value={{ loggedIn, setLoggedIn, state, dispatch, accounts, currentUser }}
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

import "./App.css";

import Header from "./components/Header";
import HomeOut from "./components/HomeOut";
import HomeIn from "./components/HomeIn";

import FullContext from "./FullContext";

import { useImmerReducer } from "use-immer";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const initialValues = {
    username: "",
    fullName: "",
    email: "",
    password: "",
    gender: "male",
    card: "student",
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
    }
  }

  const [state, dispatch] = useImmerReducer(reducerCallback, initialValues);

  const [loggedIn, setLogIn] = useState(
    Boolean(localStorage.getItem("BankToken"))
  );

  return (
    <FullContext.Provider value={{ loggedIn, setLogIn, state, dispatch }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={loggedIn ? <HomeIn /> : <HomeOut />} />
        </Routes>
      </BrowserRouter>
    </FullContext.Provider>
  );
}

export default App;

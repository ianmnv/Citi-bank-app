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

// No longer needs the function below, currenUser, users, setUsers

import { useImmerReducer } from "use-immer";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem("userData"))
  );

  const initialValues = {
    user: {
      id: 0,
      username: "",
      fullName: "",
      email: "",
      password: "",
      gender: "male",
      card: "student",
      creditCard: "",
      address: "",
      movements: [],
    },
    signIn(data) {
      setLoggedIn(true);
      localStorage.setItem("userData", JSON.stringify(data));
    },
    signOut() {
      setLoggedIn(false);
      localStorage.removeItem("userData");
    },
  };

  function reducerCallback(draft, action) {
    switch (action.type) {
      case "userData":
        draft.user = action.value;
        break;
      case "username":
        draft.user.username = action.value;
        break;
      case "fullName":
        draft.user.fullName = action.value;
        break;
      case "email":
        draft.user.email = action.value;
        break;
      case "password":
        draft.user.password = action.value;
        break;
      case "gender":
        draft.user.gender = action.value;
        break;
      case "card":
        draft.user.card = action.value;
        break;
      case "creditCard":
        draft.user.card = action.value;
        break;
      case "address":
        draft.user.address = action.value;
        break;
      // Movements is not being used anywhere, except to display them in Money component
      // But coming from the current user
      case "movements":
        draft.user.movements = draft.movements.push(action.value);
        break;
      case "sign-in":
        draft.signIn(action.value);
        break;
      case "sign-out":
        draft.signOut();
        break;
    }
  }

  const [state, dispatch] = useImmerReducer(reducerCallback, initialValues);

  useEffect(() => {
    if (loggedIn) {
      dispatch({
        type: "userData",
        value: JSON.parse(localStorage.getItem("userData")),
      });
    }
  }, [loggedIn]);

  return (
    <FullContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        state,
        dispatch,
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

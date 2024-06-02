import "./App.css";

import Header from "./components/Header";
import HomeOut from "./components/HomeOut";
import SignedIn from "./components/SignedIn";

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Axios from "axios";
Axios.defaults.baseURL = "http://localhost:8080";

function App() {
  const [loggedIn, setLogIn] = useState(
    Boolean(localStorage.getItem("BankToken"))
  );

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={loggedIn ? <SignedIn /> : <HomeOut />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

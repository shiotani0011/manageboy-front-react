import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { Routes } from "./routes/Routes";

// components

function App() {
  // const [loggedInStatus, setLoggedInStatus] = useState("未ログイン");
  // const [user, setUser] = useState({});

  // const handleLogin = (data) => {
  //   setLoggedInStatus("ログイン中");
  //   setUser(data.user);
  // };

  useEffect(() => {
    checkLoginStatus();
  });

  const checkLoginStatus = () => {
    axios
      .get("http://localhost:4001/logged_in", { withCredentials: true })
      .then((response) => {
        console.log("ログイン状況", response);
      })
      .catch((error) => {
        console.log("ログインエラー", error);
      });
  };
  return (
    <Router>
      <Switch>
        <Routes />
      </Switch>
    </Router>
  );
}

export default App;

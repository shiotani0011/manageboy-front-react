import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

// components
import { Auth } from "./containers/Auth.jsx";
import { Index } from "./containers/Index.jsx";
import { Show } from "./containers/Show.jsx";
import { Create } from "./containers/Create.jsx";
import { Login } from "./containers/Login";

function App() {
  const [loggedInStatus, setLoggedInStatus] = useState("未ログイン");
  const [user, setUser] = useState({});

  const handleLogin = (data) => {
    setLoggedInStatus("ログイン中");
    setUser(data.user);
  };

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
        <Route exact path="/auth">
          <Auth />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route
          exact
          path={"/"}
          render={(props) => (
            <Index
              {...props}
              handleLogin={handleLogin}
              loggedInStatus={loggedInStatus}
            />
          )}
        />
>>>>>>> commit

        <Route exact path="/">
          <Index />
        </Route>

        <Route exact path="/show">
          <Show />
        </Route>

        <Route exact path="/create">
          <Create />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

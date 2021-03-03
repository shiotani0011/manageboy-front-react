<<<<<<< master
import React from "react";
=======
import React, { useState } from "react";
>>>>>>> commit
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import { Auth } from "./containers/Auth.jsx";
import { Index } from "./containers/Index.jsx";
import { Show } from "./containers/Show.jsx";
import { Create } from "./containers/Create.jsx";

function App() {
  const [loggedInStatus, setLoggedInStatus] = useState("未ログイン");
  const [user, setUser] = useState({});

  const handleLogin = (data) => {
    setLoggedInStatus("ログインなう");
    setUser(data.user);
  };
  return (
    <Router>
      <Switch>
        <Route exact path="/auth">
          <Auth />
        </Route>
<<<<<<< master
=======
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

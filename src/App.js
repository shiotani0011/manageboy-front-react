import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import { Auth } from "./containers/Auth.jsx";
import { Index } from "./containers/Index.jsx";
import { Show } from "./containers/Show.jsx";
import { Create } from "./containers/Create.jsx";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/auth">
          <Auth />
        </Route>

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

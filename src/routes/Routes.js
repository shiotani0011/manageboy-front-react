import { Auth } from "../containers/Auth.jsx";
import { Index } from "../containers/Index.jsx";
import { Show } from "../containers/Show.jsx";
import { Create } from "../containers/Create.jsx";
import { Login } from "../containers/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export const Routes = () => {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route exact path={"/"} component={Index} />
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/show" component={Show} />
        <Route exact path="/create" component={Create} />
      </Switch>
    </BrowserRouter>
  );
};

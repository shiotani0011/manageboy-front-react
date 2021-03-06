import { Auth } from "../containers/Auth.jsx";
import { Index } from "../containers/Index.jsx";
import { Show } from "../containers/Show.jsx";
import { Create } from "../containers/Create.jsx";
import { Login } from "../containers/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const Routes = () => {
  // const [loggedInStatus, setLoggedInStatus] = useState("未ログイン");
  // const [user, setUser] = useState({});

  // const handleLogin = (data) => {
  //   setLoggedInStatus("ログイン中");
  //   setUser(data.user);
  return (
    <>
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
          // {...props}
          // handleLogin={handleLogin}
          // loggedInStatus={loggedInStatus}
          />
        )}
      />

      <Route exact path="/">
        <Index />
      </Route>

      <Route exact path="/show">
        <Show />
      </Route>

      <Route exact path="/create">
        <Create />
      </Route>
    </>
  );
};

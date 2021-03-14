import "./App.css";
import { Routes } from "./routes/Routes";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";

const App = () => {
  return (
    <ReduxProvider store={store}>
      <Routes />
    </ReduxProvider>
  );
};

export default App;

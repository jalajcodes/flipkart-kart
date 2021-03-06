import ReactDOM from "react-dom";
import { StoreProvider } from "easy-peasy";
import App from "./App";
import store from "./store";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  rootElement
);

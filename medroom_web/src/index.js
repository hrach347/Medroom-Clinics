import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";
import ScrollRestoration from "./helpers/ScrollRestoration";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ScrollRestoration />
    <App />
  </BrowserRouter>
);

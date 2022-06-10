import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import Navbar from "./navbar";
// import Footer from "./footer";

import { Provider } from "react-redux";
import store from "./redux/store.redux";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);

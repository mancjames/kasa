import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

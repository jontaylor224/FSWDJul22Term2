import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import UIProvider from "./contexts/UIProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UIProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UIProvider>
);

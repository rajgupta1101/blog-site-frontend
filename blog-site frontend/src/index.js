import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter, Route } from "react-router-dom";
import NavPage from "../src/pages/Nav";
import RouterPage from "../src/pages/Routes";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <NavPage />
    <RouterPage />
  </BrowserRouter>
);

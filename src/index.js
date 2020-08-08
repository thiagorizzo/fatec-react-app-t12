import React, { Component } from "react";
import { render } from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

render(
  <Router>
    <App titulo="Aplicação React" />
  </Router>,
  document.getElementById("root")
);

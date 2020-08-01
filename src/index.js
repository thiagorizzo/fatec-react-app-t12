import React from "react";
import { render } from "react-dom";
import App from "./App";
import Sobre from "./components/Sobre";

render(
  <>
    <App />
    <Sobre />
  </>,
  document.getElementById("root")
);

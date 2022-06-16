import React from "react";
import ReactDOM from "react-dom";
import pi, { doublePi, TriplePi } from "./math.js";

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{TriplePi()}</li>
  </ul>,
  document.getElementById("root")
);

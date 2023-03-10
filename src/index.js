import React from "react";
import ReactDOM from "react-dom/client";
import "./Style/index.css";
import "./Style/DayStyle.css";
import "./Style/Month.css";
import "./Style/Style.css";
import "./Style/NaviBar.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

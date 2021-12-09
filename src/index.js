import { StrictMode } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Weather from "./Weather.js";
import Footer from "./Footer.js";

import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <div className="container">
      <Weather />
      <Footer />
    </div>
  </StrictMode>,
  rootElement
);

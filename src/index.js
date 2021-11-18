import { StrictMode } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Weather from "./Weather.js";
import Footer from "./Footer.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCloud);
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

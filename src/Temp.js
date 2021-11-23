import React, { useState } from "react";
import "./Temp.css";
import "./Unit.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Temp(props) {
  const [unit, setUnit] = useState("imperial");
  function convertToCelcius(event) {
    event.preventDefault();
    setUnit("metric");
  }
  function convertToFarenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }
  if (unit === "imperial") {
    return (
      <div className="row Temp">
        <div className="col">
          <h4>{props.temp}</h4>
        </div>

        <div className="col">
          <span className="Unit">
            <span className="Farenheit">°F | </span>
            <span className="Celcius">
              <a href="/" onClick={convertToCelcius}>
                °C
              </a>
            </span>
          </span>
        </div>
      </div>
    );
  } else {
    let cTemp = Math.round(((props.temp - 32) * 5) / 9);
    return (
      <div className="row Temp">
        <div className="col">
          <h4>{cTemp}</h4>
        </div>
        <div className="col">
          <span className="Unit">
            <span className="Farenheit">
              <a href="/" onClick={convertToFarenheit}>
                °F
              </a>
            </span>
            <span className="Celcius"> | °C</span>
          </span>
        </div>
      </div>
    );
  }
}

import React from "react";
import "./Humidity.css";

export default function Humidity(props) {
  return (
    <div className="Humidity">
      <h5>Humidity: {props.hum}% </h5>
    </div>
  );
}

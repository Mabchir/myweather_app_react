import React from "react";
import "./Wind.css";

export default function Wind(props) {
  return (
    <div className="Wind">
      <h5>Wind: {props.wind} mph </h5>
    </div>
  );
}

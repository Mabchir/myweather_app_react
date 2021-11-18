import React from "react";
import "./Temp.css";

export default function Temp(props) {
  return (
    <div className="Temp">
      <h4>{props.temp}</h4>
    </div>
  );
}

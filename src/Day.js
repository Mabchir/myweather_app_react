import React from "react";
import "./Day.css";

export default function Day(props) {
  return (
    <div className="Day">
      <h5>{props.name}</h5>
      <h4>{props.tempMax} </h4>
      <h6> {props.tempMin}</h6>
    </div>
  );
}

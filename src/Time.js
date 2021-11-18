import React from "react";
import "./Time.css";

export default function Time(props) {
  return (
    <div className="Time">
      <h5>{props.time}</h5>
    </div>
  );
}

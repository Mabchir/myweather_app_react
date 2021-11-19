import React from "react";
import "./Time.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Time(props) {
  return (
    <div className="Time">
      <h5>{props.time}</h5>
    </div>
  );
}

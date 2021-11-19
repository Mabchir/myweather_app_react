import React from "react";
import "./Description.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Description(props) {
  return (
    <div className="Description">
      <h5>{props.desc}</h5>
    </div>
  );
}

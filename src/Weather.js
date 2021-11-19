import React from "react";
import "./Weather.css";
import Search from "./Search.js";
import Future from "./Future.js";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Weather() {
  return (
    <div className="Weather">
      <Search />

      <Future />
    </div>
  );
}

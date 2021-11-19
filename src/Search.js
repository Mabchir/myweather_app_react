import React, { useState } from "react";
import "./Search.css";
import Today from "./Today.js";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Search() {
  let [city, setCity] = useState("");
  let [cityname, setCityname] = useState("Tunis");
  function handleInput(event) {
    setCity(event.target.value);
  }
  function passEntry() {
    setCityname(city);
  }
  return (
    <div className="Search">
      <label>Enter City Name</label>
      <br />

      <input
        onChange={handleInput}
        type="search"
        id="site-search"
        name="q"
        aria-label="Search through site content"
      ></input>
      <br />
      <button onClick={passEntry}>Search</button>
      <Today cityname={cityname} />
    </div>
  );
}

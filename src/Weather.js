import React from "react";
import axios from "axios";
export default function weather() {
  function handleResponse(response) {
    alert(`The weather in Tunis is ${response.data.main.temp}`);
  }
  let cityname = "Tunis";
  let apiKey = "88a78e66d2f90d07860c0aa03d94e774";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return <h2> Hello from Weather</h2>;
}

import React, { useEffect } from "react";
import Icon from "./Icon.js";
import "./Forcast.css";
import axios from "axios";
export default function Forcast(props) {
  function handleResponse(response) {
    console.log(response);
  }
  let lon = props.lon;
  let lat = props.lat;

  useEffect(() => {
    const apiKey = `88a78e66d2f90d07860c0aa03d94e774`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }, [lat, lon]);

  return (
    <div className="Forcast">
      <div className="row">
        <div className="col">
          <div className="Forcast-day">Thu</div>
          <Icon className="Forcast-icon" icon="01d" size={56} />
          <div className="Forcast-temp">
            <span className="Forcast-temp-max">19˚</span>
            <span className="Forcast-temp-min">10˚</span>
          </div>
        </div>
      </div>
    </div>
  );
}

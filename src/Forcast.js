import React, { useEffect, useState } from "react";
import Icon from "./Icon.js";
import "./Forcast.css";
import axios from "axios";

export default function Forcast(props) {
  let lon = props.lon;
  let lat = props.lat;
  let [loaded, setLoaded] = useState(false);
  const [forcast, setForcast] = useState([]);
  function handleResponse(response) {
    setForcast(response.data.daily);
    setLoaded(true);
  }
  function day(dailyforcast) {
    let date = new Date(dailyforcast.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  useEffect(() => {
    setLoaded(false);
    const apiKey = `88a78e66d2f90d07860c0aa03d94e774`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }, [lat, lon]);
  if (loaded) {
    return (
      <div className="Forcast">
        <div className="row">
          {forcast.map(function (dailyforcast, index) {
            if (index < 4) {
              return (
                <div className="col">
                  <div className="Forcast-day">{day(dailyforcast)}</div>
                  <Icon
                    className="Forcast-icon"
                    icon={dailyforcast.weather[0].icon}
                    size={56}
                  />
                  <div className="Forcast-temp">
                    <span className="Forcast-temp-max">
                      {Math.round(dailyforcast.temp.max)}˚
                    </span>
                    <span className="Forcast-temp-min">
                      {Math.round(dailyforcast.temp.min)}˚
                    </span>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
}

//  min: Math.round(response.data.daily[0].temp.min),
// max: Math.round(response.data.daily[0].temp.max),
// icon: response.data.daily[0].weather[0].icon,

import React, { useState } from "react";
import "./Today.css";
import axios from "axios";
import "./Unit.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Icon from "./Icon.js";
import Temp from "./Temp.js";

import DateV2 from "./DateV2.js";
import Time from "./Time.js";
import Description from "./Description.js";
import Wind from "./Wind.js";
import Humidity from "./Humidity.js";

const divStyle = {
  display: "flex"
};

export default function Today(props) {
  let today = new Date();
  let time = today.getHours() + ":" + today.getMinutes();
  let day = today.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let [icon, setIcon] = useState();
  let [temp, setTemp] = useState();

  let [desc, setDesc] = useState("Scattered Clouds");
  let [wind, setWind] = useState("3.36");
  let [hum, setHum] = useState("76%");

  function handleResponse(response) {
    setIcon();
    setTemp(Math.round(response.data.main.temp));
    setDesc(response.data.weather[0].description);
    setWind(response.data.wind.speed);
    setHum(response.data.main.humidity);
  }
  let apiKey = `88a78e66d2f90d07860c0aa03d94e774`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityname}&appid=${apiKey}&units=imperial`;
  axios.get(url).then(handleResponse);

  function handleTemp(unit) {
    if (unit === 1) {
      //convert to C

      setTemp(temp);
    } else {
      //convert to F

      setTemp(Math.round(((temp - 32) * 5) / 9));
    }
  }

  return (
    <div className="Today">
      <h1> {props.cityname} </h1>
      <hr />
      <Container>
        <Row>
          <Col className="colum1">
            <div style={divStyle}>
              <Icon icon={icon} />
              <Temp temp={temp} />
              <div className="Unit">
                <p>
                  °
                  <button onClick={() => handleTemp(1)}>
                    <span className="Farenheit">F</span>
                  </button>
                  | °
                  <button onClick={() => handleTemp(2)}>
                    <span className="Celcius">C</span>
                  </button>
                </p>
              </div>
            </div>
          </Col>
          <Col className="colum2">
            <div className="subcol">
              <DateV2 day={days[day]} />
              <Time time={time} />
            </div>
            <div className="subcol">
              <Description desc={desc} />
            </div>

            <br />
            <div className="subcol">
              <Wind wind={wind} />
            </div>
            <div className="subcol">
              <Humidity hum={hum} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

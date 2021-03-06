import React, { useState, useEffect } from "react";
import "./Today.css";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Icon from "./Icon.js";
import Temp from "./Temp.js";
import "bootstrap/dist/css/bootstrap.min.css";
import DateV2 from "./DateV2.js";
import Time from "./Time.js";
import Description from "./Description.js";
import Wind from "./Wind.js";
import Humidity from "./Humidity.js";
import Forcast from "./Forcast.js";

const divStyle = {
  display: "flex",
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
    "Saturday",
  ];

  let [icon, setIcon] = useState("09n");
  let [temp, setTemp] = useState();

  let [desc, setDesc] = useState("Scattered Clouds");
  let [wind, setWind] = useState("3.36");
  let [hum, setHum] = useState("76%");
  let [lat, setLat] = useState(34);
  let [lon, setLon] = useState(9);

  useEffect(() => {
    function handleResponse(response) {
      setIcon(response.data.weather[0].icon);
      setTemp(Math.round(response.data.main.temp));
      setDesc(response.data.weather[0].description);
      setWind(response.data.wind.speed);
      setHum(response.data.main.humidity);
      setLon(response.data.coord.lon);
      setLat(response.data.coord.lat);
    }
    const apiKey = `88a78e66d2f90d07860c0aa03d94e774`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityname}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(handleResponse);
  }, [props.cityname]);

  return (
    <div className="Today">
      <h1> {props.cityname} </h1>
      <hr />
      <Container>
        <Row>
          <Col className="colum1">
            <div style={divStyle}>
              <Icon icon={icon} size={100} />
              <Temp temp={temp} />
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

      <Forcast lat={lat} lon={lon} />
    </div>
  );
}

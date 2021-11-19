import React from "react";
import "./Future.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Day from "./Day.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Future() {
  return (
    <div className="Future">
      <Container>
        <Row className="d-flex flex-wrap justify-content-md-left">
          <Col>
            <Day name="Mon" tempMax="54" tempMin="45" />
          </Col>
          <Col>
            <Day name="Tue" tempMax="53" tempMin="46" />
          </Col>
          <Col>
            <Day name="Wed" tempMax="53" tempMin="46" />
          </Col>
          <Col>
            <Day name="Thu" tempMax="53" tempMin="44" />
          </Col>
          <Col>
            <Day name="Fri" tempMax="51" tempMin="44" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

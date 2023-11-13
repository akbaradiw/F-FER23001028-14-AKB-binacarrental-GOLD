import React from "react";
import "./style.css";
import { Row, Container, Col } from "react-bootstrap";

const Why = () => {
  return (
    <Container>
      <Row>
        <Col className="why col-lg-6 col-12 pt-2">
          <h4>Why Us?</h4>
          <p>Mengapa harus pilih Binar Car Rental?</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Why;

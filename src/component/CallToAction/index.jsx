import React from "react";
import { Row, Container, Col, Button, Card } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col className="col-12 d-flex justify-content-center">
          <Card style={{ width: "1116px", height: "326px", background: "#0D28A6" }}>
            <Card.Body className="text-center" id="call-to-action">
              <Card.Title className="pt-5 fs-2 pb-2 ">Sewa Mobil di (Lokasimu) Sekarang</Card.Title>
              <Card.Text className="fs-6 pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua</Card.Text>
              <Link to={"/result"}>
                <button id="header-button" className="bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded">
                  Mulai Sewa Mobil
                </button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CallToAction;

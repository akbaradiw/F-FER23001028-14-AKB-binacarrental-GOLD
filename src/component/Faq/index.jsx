import React from "react";
import { Row, Col, Accordion, Container } from "react-bootstrap";
import "./style.css";

const Faq = () => {
  let faqList = [
    { description: "Apa saja syarat yang dibutuhkan?" },
    { description: "Berapa hari minimal sewa mobil lepas kunci?" },
    { description: "Berapa hari sebelumnya sabaiknya booking sewa mobil?" },
    { description: "Apakah Ada biaya antar-jemput?" },
    { description: "Bagaimana jika terjadi kecelakaan?" },
  ];

  return (
    <Container className="mt-lg-5">
      <Row>
        <Col className="col-12 col-lg-6 mt-2">
          <div>
            <h4 id="faq-text1">Frequently Asked Question</h4>
            <h5 id="faq-text2">Lorem ipsum dolor sit amet, consectetur adipiscing</h5>
          </div>
        </Col>
        <Col className="col-12 fs-6 col-lg-5 ms-lg-5">
          {faqList.map((obj) => {
            return (
              <Accordion>
                <Accordion.Item className="mb-4" eventKey="1">
                  <Accordion.Header>{obj.description}</Accordion.Header>
                  <Accordion.Body></Accordion.Body>
                </Accordion.Item>
              </Accordion>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default Faq;

import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import blueimg from "../../assets/biru.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";

const Footer = () => {
  let address = [
    {
      description: "Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000",
    },
    {
      description: "binarcarrental@gmail.com",
    },
    {
      description: "081-233-334-808",
    },
  ];

  return (
    <Container className="py-4 mt-lg-4">
      <Row>
        <Col className="col-12 col-lg-3 mb-3">
          {address.map((obj) => {
            return <h6>{obj.description}</h6>;
          })}
        </Col>
        <Col className="col-12 col-lg-3 ps-lg-5 mb-2">
          <p>Our Services</p>
          <p>Why Us</p>
          <p>Testimonial</p>
          <p>FAQ</p>
        </Col>
        <Col className="col-12 col-lg-3 mb-4">
          <h6>Connect with us</h6>
          <i className="ps-1">
            <FaFacebook />
          </i>
          <i className="ps-2">
            <FaInstagramSquare />
          </i>
          <i className="ps-2">
            <FaTwitter />
          </i>
          <i className="ps-2">
            <FaTripadvisor />
          </i>
          <i className="ps-2">
            <FaTwitch />
          </i>
        </Col>
        <Col className="col-12 col-lg-3 ps-lg-1">
          <h6>Copyright Binar 2022</h6>
          <div className="pt-1">
            <img src={blueimg} alt="bluefooter" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;

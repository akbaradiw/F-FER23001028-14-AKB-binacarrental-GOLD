import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import californiawoman from "../../assets/mbaksenyum.png";
import "./style.css";

const Ourservices = () => {
  let listOurServices = [
    {
      description: "Sewa Mobil Dengan Supir di Bali 12 Jam",
    },
    {
      description: "Sewa Mobil Lepas Kunci di Bali 24 Jam",
    },
    {
      description: "Sewa Mobil Jangka Panjang Bulanan",
    },
    {
      description: "Gratis Antar - Jemput Mobil di Bandara",
    },
    {
      description: "Layanan Airport Transfer / Drop In Out",
    },
  ];

  return (
    <div className="ours">
      <Container fluid className="mt-lg-5">
        <Row>
          <Col className="col-12 col-lg-6 text-center  mt-2">
            <img src={californiawoman} alt="hiii" id="woman" />
          </Col>
          <Col className="our-services col-12 col-lg-5 ms-lg-2 mt-lg-5">
            <h4 className="py-3">Best Car Rental for any kind of trip in (Lokasimu)!</h4>
            <p className="pb-1">
              Sewa mobil di Lokasimu bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
            </p>
            <div>
              {listOurServices.map((obj) => {
                return <p> ☑ {obj.description}</p>;
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Ourservices;

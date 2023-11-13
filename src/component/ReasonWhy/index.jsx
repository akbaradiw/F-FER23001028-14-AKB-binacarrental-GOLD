import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import jempol from "../../assets/thumb.png";
import tagg from "../../assets/tag.png";
import chronos from "../../assets/time.png";
import pin from "../../assets/badge.png";

import "./style.css";

const ReasonWhy = () => {
  let reasonDescription = [
    {
      title: "Mobil Lengkap",
      description: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
      Image: jempol,
    },

    {
      title: "Harga Murah",
      description: "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
      Image: tagg,
    },
    {
      title: "Layanan 24 Jam",
      description: "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu.",
      Image: chronos,
    },
    {
      title: "Sopir Profesional",
      description: "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat.",
      Image: pin,
    },
  ];

  return (
    <div>
      <Container>
        <Row>
          {reasonDescription.map((obj) => {
            return (
              <Col className="col-lg-3 col-12 pb-lg-5 mb-lg-5 mb-3 pb-3">
                <Card>
                  <Card.Body>
                    <img className="icon-image" src={obj.Image} />
                    <div className="reason-text">
                      <h5>{obj.title}</h5>
                      <h6>{obj.description}</h6>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ReasonWhy;

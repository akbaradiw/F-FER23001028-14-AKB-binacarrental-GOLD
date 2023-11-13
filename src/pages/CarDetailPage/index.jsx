import React, { useEffect, useState } from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import "./style.css";

const CarDetailPage = () => {
  const param = useParams();
  const [carDetail, setCarDetail] = useState({});

  useEffect(() => {
    handleCarDetail();
  }, []);

  const handleCarDetail = () => {
    axios
      .get(`https://api-car-rental.binaracademy.org/customer/car/${param.id}`)

      .then((res) => {
        console.log(res.data);
        setCarDetail(res.data);
      })
      .catch((err) => console.log(err));
  };

  let includeList = [{ include: "Apa saja yang termasuk dalam paket misal durasi max 12 jam" }, { include: "Sudah termasuk bensin selama 12 jam" }, { include: "Sudah termasuk Tiket Wisata" }, { include: "Sudah termasuk pajak" }];
  let exculdeList = [{ exclude: "Tidak termasuk biaya makan sopir Rp 75.000/hari" }, { exclude: "Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam" }, { exclude: "Tidak termasuk akomodasi penginapan" }];
  let rulesList = [
    { rules: "Tidak termasuk biaya makan sopir Rp 75.000/hari" },
    { rules: "Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam" },
    { rules: "Tidak termasuk akomodasi penginapan" },
    { rules: "Tidak termasuk biaya makan sopir Rp 75.000/hari" },
    { rules: "Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam" },
    { rules: "Tidak termasuk akomodasi penginapan" },
    { rules: "Tidak termasuk biaya makan sopir Rp 75.000/hari" },
    { rules: "Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam" },
    { rules: "Tidak termasuk akomodasi penginapan" },
  ];

  return (
    <div>
      <Navbar />
      <div className="car-info">
        <div className="rent-rules">
          <Card>
            <h4>Tentang Paket</h4>
            <h6>Include</h6>
            {includeList.map((inc) => {
              return <p> . {inc.include}</p>;
            })}
            <h6>Exclude</h6>
            {exculdeList.map((exc) => {
              return <p> . {exc.exclude}</p>;
            })}
            <h6>Refund, Reschedule, Overtime</h6>
            {rulesList.map((rul) => {
              return <p> . {rul.rules}</p>;
            })}
          </Card>
        </div>
        <div className="car-info-3">
          <Card>
            <img src={carDetail.image} />
            <h5>{carDetail.name}</h5>
            <p>6-8 orang</p>
            <h6>Total: {carDetail.price}</h6>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CarDetailPage;

import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import californiawoman from "../../assets/mbaksenyum.png";
// import "./style.css";

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
      <div className="grid px-10 lg:grid-cols-2 lg:px-60 lg:pt-20 pt-20">
          <div className=" lg:mt-2 px-4 lg:px-0">
            <img src={californiawoman}  alt="hiii" id="woman" />
          </div>
          <div>
            <h4 className="py-3 font-bold">Best Car Rental for any kind of trip in (Lokasimu)!</h4>
            <p className="pb-1 font-semibold">
              Sewa mobil di Lokasimu bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
            </p>
            <div className="font-semibold">
              {listOurServices.map((obj) => {
                return <p> ☑ {obj.description}</p>;
              })}
            </div>
          </div>
      </div>

  );
};

export default Ourservices;

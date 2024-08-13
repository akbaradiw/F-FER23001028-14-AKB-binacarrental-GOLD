import React, { useEffect, useState } from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

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
      <div className="pt-20 ">
      <div className="lg:flex lg:justify-center lg:gap-40">
          <Card className="m-4 " >
            <div className="p-10 ">
            <h4 className="font-bold lg:text-xl text-base">Tentang Paket</h4>
            <div className="lg:py-4 py-2">
            <h6 className="text-base lg:text-lg" >Include</h6>
            {includeList.map((inc) => {
              return <p className="text-sm lg:text-base"> . {inc.include}</p>;
            })}
            </div>
            <div className="pb-3">
            <h6 className="text-base lg:text-lg">Exclude</h6>
            {exculdeList.map((exc) => {
              return <p className="text-sm lg:text-base"> . {exc.exclude}</p>;
            })}
            </div>
            <h6 className="text-base lg:text-lg">Refund, Reschedule, Overtime</h6>
            {rulesList.map((rul) => {
              return <p className="text-sm lg:text-base"> . {rul.rules}</p>;
            })}
            </div>
          </Card>
       
        <div className="lg:pt-10 p-4">
          <Card className="lg:p-3 p-2">
            <img className="lg:w-full md:w-full w-80" src={carDetail.image} />
            <div className="ps-2">
            <h5 className="font-bold lg:text-lg md:text-lg text-base">{carDetail.name}</h5>
            <p className="text-sm md:text-base lg:text-base">6-8 orang</p>
            <h6 className="text-sm md:text-base lg:text-base">Total: {carDetail.price}</h6>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
      </div>
    </div>
  );
};

export default CarDetailPage;

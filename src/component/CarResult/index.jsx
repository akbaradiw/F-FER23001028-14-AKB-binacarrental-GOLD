import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Card, Row, Col } from "react-bootstrap";

const CarResult = () => {
  const [car, setCar] = useState([]);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState(false);
  const [isFilter, setFilter] = useState(false);

  useEffect(() => {
    handleGetCar();
  }, []);

  const handleGetCar = (isName, isType, isPrice, isStatus) => {
    axios
      .get(`https://api-car-rental.binaracademy.org/customer/v2/car?name=${isName}&category=${isType}&minPrice&maxPrice=${isPrice}&isRented=${isStatus}`)
      .then((res) => {
        console.log(res);
        setCar(res.data.cars);
      })
      .catch((err) => console.log(err));
  };
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = () => {
    console.log(name);
    handleGetCar(name, type, price, status);
    setFilter(true);
  };
  const handleSelectType = (e) => {
    setType(e.target.value);
    setFilter(true);
  };
  const handleSelectPrice = (e) => {
    setPrice(e.target.value);
    setFilter(true);
  };
  const handleSelectStatus = (e) => {
    setStatus(e.target.value);
    setFilter(true);
  };

  const handleReset = () => {
    handleGetCar(name, type, price, status);
    setFilter(false);
  };

  return (
    <div className="lg:pt-20 pt-16">
      <div className="grid  lg:grid-cols-4 md:grid-cols-2 lg:px-80 px-10  lg:py-10 gap-4">
        <div className="text-center border p-3 rounded-md">
          <p className="text-lg lg:text-base font-bold">Nama Mobil</p>
          <input className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChangeName} placeholder=" cari mobil" />
        </div>
        <div className="text-center border p-3 rounded-md">
          <p className="text-lg lg:text-base font-bold">Kategori</p>
          <select className="lock w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleSelectType}>
            <option value={""}>Masukan Kapasitas Mobil</option>
            <option value={"medium"}>Medium</option>
            <option value={"large"}>Large</option>
          </select>
        </div>
        <div className="text-center border p-3 rounded-md">
          <p className="text-lg lg:text-base font-bold">Harga</p>
          <select className="lock w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleSelectPrice}>
            <option value={""}>Masukan Harga Sewa Perhari</option>
            <option value={"500000"}>{"<700.000"}</option>
            <option value={"350000"}> {"<350.000"}</option>
            <option value={"330000"}>{"<330.000"}</option>
          </select>
        </div>
        <div className="text-center border p-3 rounded-md">
          <p className="text-lg lg:text-base font-bold">Status</p>
          <select className="lock w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={status} onChange={handleSelectStatus}>
            <option value={""}>Status</option>
            <option value={"false"}>Available</option>
            <option value={"true"}>Not Available</option>
          </select>
        </div>
        
      </div>
      <div className=" text-center md:pt-10  lg:pt-1 pt-4  ">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={isFilter ? handleReset : handleSubmit} id="button-result">
            {isFilter ? "reset" : "submit"}
          </button>
        </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 pt-10 lg:px-20 px-4 gap-4 lg:gap-10">
        {car.map((item) => (
          <Container>
            <Row>
              <Col>
                <Card>
                  <Card.Body >
                    <Card.Img className="object-center hover:object-scale-down object-cover h-40 rounded-lg" src={item.image} />
                    <Card.Title className=" ">
                      <h4 className="pt-3 text-base">{item.name}</h4>
                      <h5 className="py-2 text-base">{item.price}</h5>
                      <h6 className="pb-4 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h6>
                    </Card.Title>
                    <Link  to={`/detail/${item.id}`}>
                      <button className="bg-green-500 hover:bg-green-700 text-white  py-1 px-2 rounded-md">Pilih Mobil</button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        ))}
      </div>
    </div>
  );
};

export default CarResult;

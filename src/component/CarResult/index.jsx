import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Card, Row, Col } from "react-bootstrap";
import "./style.css";

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
    <div>
      <div className="search-dropdown">
        <div>
          <p>Nama Mobil</p>
          <input onChange={handleChangeName} placeholder=" cari mobil" />
        </div>
        <div>
          <p>Kategori</p>
          <select onChange={handleSelectType}>
            <option value={""}>Masukan Kapasitas Mobil</option>
            <option value={"medium"}>Medium</option>
            <option value={"large"}>Large</option>
          </select>
        </div>
        <div>
          <p>Harga</p>
          <select onChange={handleSelectPrice}>
            <option value={""}>Masukan Harga Sewa Perhari</option>
            <option value={"500000"}>{"<700.000"}</option>
            <option value={"350000"}> {"<350.000"}</option>
            <option value={"330000"}>{"<330.000"}</option>
          </select>
        </div>
        <div>
          <p>Status</p>
          <select value={status} onChange={handleSelectStatus}>
            <option value={""}>Status</option>
            <option value={"false"}>Available</option>
            <option value={"true"}>Not Available</option>
          </select>
        </div>
        <div>
          <button onClick={isFilter ? handleReset : handleSubmit} id="button-result">
            {isFilter ? "reset" : "submit"}
          </button>
        </div>
      </div>
      <div className="car-list">
        {car.map((item) => (
          <Container>
            <Row>
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Img src={item.image} />
                    <Card.Title>
                      <h4>{item.name}</h4>
                      <h5>{item.price}</h5>
                      <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h6>
                    </Card.Title>
                    <Link to={`/detail/${item.id}`}>
                      <button variant="success">Pilih Mobil</button>
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

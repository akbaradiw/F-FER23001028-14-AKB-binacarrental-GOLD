import React from "react";
import carimg from "../../assets/mobilpejabat.png";
import { Link } from "react-router-dom";
// import "./style.css";

const Header = () => {
  return (
    <section class="header" className="bg-indigo-50 grid lg:flex lg:justify-between  pt-20">
      <div class="text-1" className="lg:pt-20 lg:px-60 px-10  ">
        <h3 className="font-bold pb-3 text-4xl  lg:text-3xl " id="sewa">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h3>
        <p className="font-semibold  " id="para">
          Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam. <br />
          <div className="pt-4 lg:pb-0 pb-4">
          <Link to={"/result"}>
            <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded" id="header-button">Mulai Sewa Mobil</button>
          </Link>
          </div>
        </p>
      </div>
      <img src={carimg} className="lg:w-2/5" alt="innova" id="mobilsmk" />
    </section>
  );
};

export default Header;

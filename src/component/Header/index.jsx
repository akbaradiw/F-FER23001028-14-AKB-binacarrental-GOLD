import React from "react";
import carimg from "../../assets/mobilpejabat.png";
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <section class="header">
      <div class="text-1">
        <h3 id="sewa">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h3>
        <p id="para">
          Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam. <br />
          <Link to={"/result"}>
            <button id="header-button">Mulai Sewa Mobil</button>
          </Link>
        </p>
      </div>
      <img src={carimg} alt="innova" id="mobilsmk" />
    </section>
  );
};

export default Header;

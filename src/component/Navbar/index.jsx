import blueimg from "../../assets/biru.png";
import React, { useState } from "react";
import "./style.css";
import HiddenNav from "../HiddenNav";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const hiddenNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div class="navbar-1">
      <div class="row">
        <div class="col-6" id="blue-logo">
          <img src={blueimg} alt="blue" />
        </div>
        <div class="col-6 d-flex flex-row-reverse">
          <ul class="slide">
            <a href="">Our Servics</a>
            <a href="">Why Us</a>
            <a href="">Testimonial</a>
            <a href="">FAQ</a>
          </ul>

          <div class="menu-toggle">
            {showNavbar && <HiddenNav />}
            <button onClick={hiddenNavbar}>|||</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

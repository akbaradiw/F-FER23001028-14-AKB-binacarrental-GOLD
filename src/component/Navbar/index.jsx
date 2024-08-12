import blueimg from "../../assets/biru.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LiaServicestack } from "react-icons/lia";
import { FaQuestion, FaQrcode } from "react-icons/fa";
import { IoListOutline } from "react-icons/io5";
import { GoCodeReview } from "react-icons/go";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);
  return (
    <div>
      <nav className=" bg-indigo-50 shadow-sm	  w-full fixed z-50 hidden lg:block   ">
        <div className="flex items-center justify-between h-16 ">
          <img src={blueimg} alt="logo" className="ml-10" />
          <div className="flex items-center">
            <div>
              <div className=" ml-10 flex pe-10 space-x-4">
                <Link
                  to="/"
                  className="text-black font-semibold   text-md "
                >
                  Our Services
                </Link>
                <Link
                  to="/"
                  className="text-black font-semibold   text-md"
                >
                  Why Us
                </Link>
                <Link
                  to="/"
                  className="text-black font-semibold   text-md "
                >
                  Testimonial
                </Link>
                <Link
                  to="/"
                  className="text-black font-semibold   text-md "
                >
                  FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <button
        onClick={() => toggle()}
        className="text-black z-50 focus:outline-none fixed lg:hidden  top-4 right-4 transition-opacity duration-200"
        type="button"
      >
        <IoListOutline  className="md:w-10 md:h-10 w-6 h-7" />
      </button>
      <nav className=" px-4 lg:hidden">
        <div
          className={`fixed z-50 bottom-0 right-0 left-0 w-full  bg-blue-700 p-4 text-white transition-transform duration-400   ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between  md:justify-around">
            <div>
              <Link
                to={"/"}
                className="flex items-center flex-col justify-center md:text-2xl text-white hover:text-green-200 "
              >
                <LiaServicestack className="w-6 h-6 md:w-10 md:h-10  md:pb-2" />
                Our Services
              </Link>
            </div>
            <div>
              <Link
                to={"/"}
                className="flex items-center flex-col justify-center md:text-2xl  text-white hover:text-green-200"
              >
                <FaQuestion className="w-6 h-6 md:w-10 md:h-10  md:pb-2" />
                Why Us
              </Link>
            </div>

            <div>
              <Link
                to={"/"}
                className="flex items-center flex-col justify-center md:text-2xl text-white hover:text-green-200"
              >
                <GoCodeReview className="w-6 h-6 md:w-10 md:h-10  md:pb-2" />
                Testimonial
              </Link>
            </div>
            <div>
              <Link
                to={"/"}
                className="flex items-center flex-col justify-center md:text-2xl  text-white hover:text-green-200"
              >
                <FaQrcode className="w-6 h-6 md:w-10 md:h-10  md:pb-2" />
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
  
};

export default Navbar;

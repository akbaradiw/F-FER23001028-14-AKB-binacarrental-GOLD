import React from "react";
import Navbar from "../../component/Navbar";
import Header from "../../component/Header";
import Ourservices from "../../component/Ourservices";
import Why from "../../component/Why";
import ReasonWhy from "../../component/ReasonWhy";
import TestimoniText from "../../component/TestimoniText";
import Testimonial from "../../component/Testimonial";
import CallToAction from "../../component/CallToAction";
import Faq from "../../component/Faq";
import Footer from "../../component/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Ourservices />
      <Why />
      <ReasonWhy />
      <TestimoniText />
      <Testimonial />
      <CallToAction />
      <Faq />
      <Footer />
    </div>
  );
};

export default LandingPage;

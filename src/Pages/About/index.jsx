import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import AboutHeader from "./AboutHeader";
import AboutMiddle from "./AboutMiddle";
import AboutBottom from "./AboutBottom";

const About = () => {
  return (
    <div>
      <Navbar />
      <AboutHeader />
      <div className="flex justify-center p-4">
        <AboutMiddle />
      </div>
      <AboutBottom />
      <Footer />
    </div>
  );
};

export default About;

import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import MainHeader from "./MainHeader";
import MainCard from "./MainCard";
import MainBottom from "./MainBottom";

const Main = () => {
  return (
    <div>
      <Navbar />
      <MainHeader />
      <div className="flex justify-center p-4">
        <MainCard />
      </div>
      <MainBottom />
      <Footer />
    </div>
  );
};

export default Main;

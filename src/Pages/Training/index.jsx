import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import TrainingBottom from "./TrainingBottom";
import TrainingHeader from "./TrainingHeader";
import TrainingMiddle from "./TrainingMiddle";

const Training = () => {
  return (
    <div>
      <Navbar />
      <TrainingHeader />
      <div className="flex justify-center p-4">
        <TrainingMiddle />
      </div>
      <TrainingBottom />
      <Footer />
    </div>
  );
};

export default Training;

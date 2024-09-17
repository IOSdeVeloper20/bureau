import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import InspectionsHeader from "./InspectionsHeader";
import InspectionsBottom from "./InspectionsBottom";
import InspectionsMiddle from "./InspectionsMiddle";

const Inspections = () => {
  return (
    <div>
      <Navbar />
      <InspectionsHeader />
      <div className="flex justify-center">
        <InspectionsMiddle />
      </div>
      <InspectionsBottom />
      <Footer />
    </div>
  );
};

export default Inspections;

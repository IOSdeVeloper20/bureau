import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import InspectionsHeader from "./InspectionsHeader";
import InspectionsBottom from "./InspectionsBottom";
import InspectionsMiddle from "./InspectionsMiddle";
import { fetchData } from "../../Helpers/Networking";

const Inspections = () => {
  const [inspectionsData, setInspectionsData] = useState([]);
  const user = true;

  const fetchInspectionData = async () => {
    const baseUrl = "http://localhost:5001/get/inspectionsData";
    const inspectionsResponse = await fetchData(baseUrl);
    setInspectionsData(inspectionsResponse);
  };

  useEffect(() => {
    fetchInspectionData();
  }, []);
  console.log("inspections data:", inspectionsData);

  return (
    <div>
      <Navbar />
      <InspectionsHeader
        inspectionsData={inspectionsData}
        user={user}
        fetchInspectionData={fetchInspectionData}
      />
      <div className="flex justify-center">
        <InspectionsMiddle
          inspectionsData={inspectionsData}
          user={user}
          fetchInspectionData={fetchInspectionData}
        />
      </div>
      <InspectionsBottom />
      <Footer />
    </div>
  );
};

export default Inspections;

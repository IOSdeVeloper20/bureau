import React, { useState, useEffect, useContext } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import InspectionsHeader from "./InspectionsHeader";
import InspectionsBottom from "./InspectionsBottom";
import InspectionsMiddle from "./InspectionsMiddle";
import { fetchData } from "../../Helpers/Networking";
import { UserContext } from "../../Contexts/UserContext";

const Inspections = () => {
  const [inspectionsData, setInspectionsData] = useState([]);
  const {userState} = useContext(UserContext);

  const fetchInspectionData = async () => {
    const inspectionsUrl = process.env.REACT_APP_INSPECTIONS_BASE_URL;
    const inspectionsResponse = await fetchData(inspectionsUrl);
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
        user={userState}
        fetchInspectionData={fetchInspectionData}
      />
      <div className="flex justify-center">
        <InspectionsMiddle
          inspectionsData={inspectionsData}
          user={userState}
          fetchInspectionData={fetchInspectionData}
        />
      </div>
      <InspectionsBottom />
      <Footer />
    </div>
  );
};

export default Inspections;

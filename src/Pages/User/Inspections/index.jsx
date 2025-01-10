import React, { useState, useEffect, useContext } from "react";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import InspectionsHeader from "./InspectionsHeader";
import InspectionsBottom from "./InspectionsBottom";
import InspectionsMiddle from "./InspectionsMiddle";
import { fetchData } from "../../../Helpers/Networking";
import { LangContext } from "../../../Contexts/LangContext";

const Inspections = () => {
  const [inspectionsData, setInspectionsData] = useState([]);
  const { langState } = useContext(LangContext);

  const fetchInspectionData = async () => {
    const inspectionsUrl = process.env.REACT_APP_INSPECTIONS_BASE_URL;
    const inspectionsResponse = await fetchData(inspectionsUrl);
    setInspectionsData(inspectionsResponse);
  };

  useEffect(() => {
    fetchInspectionData();
  }, []);

  return (
    <div>
      <Navbar />
      <InspectionsHeader inspectionsData={inspectionsData} lang={langState} />

      <div className="flex justify-center">
        <InspectionsMiddle inspectionsData={inspectionsData} lang={langState} />
      </div>

      <InspectionsBottom />
      <Footer />
    </div>
  );
};

export default Inspections;

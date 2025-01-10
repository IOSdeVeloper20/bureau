import React, { useState, useEffect, useContext } from "react";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import ApprovalHeader from "./ApprovalHeader";
import ApprovalBottom from "./ApprovalBottom";
import { fetchData } from "../../../Helpers/Networking";
import { LangContext } from "../../../Contexts/LangContext";

const Approvals = () => {
  const [approvalsData, setApprovalsData] = useState([]);
  const { langState } = useContext(LangContext);

  const fetchApprovalsData = async () => {
    const approvalsUrl = process.env.REACT_APP_APPROVALS_BASE_URL;
    const approvalsResponse = await fetchData(approvalsUrl);
    setApprovalsData(approvalsResponse);
  };

  useEffect(() => {
    fetchApprovalsData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="rounded-4xl bg-darkGrey p-4 mb-4">
        <div className="rounded-4xl bg-white">
          <ApprovalHeader approvalsData={approvalsData} lang={langState} />
        </div>
      </div>
      <ApprovalBottom />
      <Footer />
    </div>
  );
};

export default Approvals;

import React, { useState, useEffect, useContext } from "react";
import DataTable from "../../../Components/DataTable";
import { fetchData } from "../../../Helpers/Networking";
import { LangContext } from "../../../Contexts/LangContext";

const AdminApprovals = () => {
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
    <div className="bg-gray-200 flex flex-col min-h-screen px-2 py-4">
      <h1 className="font-bold text-sm ps-2 pt-2">
        {langState === "en" ? "Approvals Page" : "صفحة الموافقات"}
      </h1>
      <div className="bg-white my-2 rounded-xl p-4">
        <DataTable data={approvalsData} />
      </div>
    </div>
  );
};

export default AdminApprovals;

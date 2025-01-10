import React, { useState, useEffect, useContext } from "react";
import DataTable from "../../../Components/DataTable";
import { fetchData } from "../../../Helpers/Networking";
import { LangContext } from "../../../Contexts/LangContext";
const AdminInspections = () => {
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
    <div className="bg-gray-200 flex flex-col min-h-screen px-2 py-4">
      <h1 className="font-bold text-sm ps-2 pt-2">
        {langState === "en" ? "Inspections Page" : "صفحة الفحوصات"}
      </h1>
      <div className="bg-white my-2 rounded-xl p-4">
        <DataTable data={inspectionsData} />
      </div>
    </div>
  );
};

export default AdminInspections;

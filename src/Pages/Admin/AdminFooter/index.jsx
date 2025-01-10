import React, { useState, useEffect, useContext } from "react";
import DataTable from "../../../Components/DataTable";
import { fetchData } from "../../../Helpers/Networking";
import { LangContext } from "../../../Contexts/LangContext";

const AdminFooter = () => {
  const [footerData, setFooterData] = useState([]);
  const { langState } = useContext(LangContext);

  const fetchFooterData = async () => {
    const footerUrl = process.env.REACT_APP_FOOTER_BASE_URL;
    const footerResponse = await fetchData(footerUrl);
    setFooterData(footerResponse);
  };

  useEffect(() => {
    fetchFooterData();
  }, []);

  return (
    <div className="bg-gray-200 flex flex-col min-h-screen px-2 py-4">
      <h1 className="font-bold text-sm ps-2 pt-2">
        {langState === "en" ? "Footer Page" : "صفحة الجزء السقلي لصفحات الموقع"}
      </h1>
      <div className="bg-white my-2 rounded-xl p-4">
        <DataTable data={footerData} />
      </div>
    </div>
  );
};

export default AdminFooter;

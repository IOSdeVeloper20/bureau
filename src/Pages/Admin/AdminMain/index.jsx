import React, { useState, useEffect, useContext } from "react";
import DataTable from "../../../Components/DataTable";
import { fetchData } from "../../../Helpers/Networking";
import { LangContext } from "../../../Contexts/LangContext";

const AdminMain = () => {
  const [mainData, setMainData] = useState([]);
  const { langState } = useContext(LangContext);

  const fetchMainData = async () => {
    const mainUrl = process.env.REACT_APP_MAIN_BASE_URL;
    const mainResponse = await fetchData(mainUrl);
    setMainData(mainResponse);
  };

  useEffect(() => {
    fetchMainData();
  }, []);

  return (
    <div className="bg-gray-100 flex flex-col min-h-screen px-2 py-4">
      <h1 className="font-bold text-sm ps-2 pt-2">
        {langState === "en" ? "Company Profile Page" : "صفحة نبذة عن الشركة"}
      </h1>
      <div className="bg-white my-2 rounded-xl p-4">
        <DataTable data={mainData} />
      </div>
    </div>
  );
};

export default AdminMain;

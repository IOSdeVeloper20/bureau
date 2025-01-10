import React, { useState, useEffect, useContext } from "react";
import DataTable from "../../../Components/DataTable";
import { fetchData } from "../../../Helpers/Networking";
import { LangContext } from "../../../Contexts/LangContext";

const AdminContactus = () => {
  const [contactusData, setContactusData] = useState([]);
  const { langState } = useContext(LangContext);

  const fetchContactusData = async () => {
    const contactusUrl = process.env.REACT_APP_CONTACTUS_BASE_URL;
    const contactusResponse = await fetchData(contactusUrl);
    setContactusData(contactusResponse);
  };

  useEffect(() => {
    fetchContactusData();
  }, []);

  return (
    <div className="bg-gray-200 flex flex-col min-h-screen px-2 py-4">
      <h1 className="font-bold text-sm ps-2 pt-2">
        {langState === "en" ? "Contact Us Page" : "صفحة الاتصال بنا"}
      </h1>
      <div className="bg-white my-2 rounded-xl p-4">
        <DataTable data={contactusData} />
      </div>
    </div>
  );
};

export default AdminContactus;

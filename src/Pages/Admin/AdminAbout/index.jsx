import React, { useState, useEffect, useContext } from "react";
import DataTable from "../../../Components/DataTable";
import { fetchData } from "../../../Helpers/Networking";
import { LangContext } from "../../../Contexts/LangContext";

const AdminAbout = () => {
  const [aboutData, setAboutData] = useState([]);
  const { langState } = useContext(LangContext);

  const fetchAboutData = async () => {
    const aboutUrl = process.env.REACT_APP_ABOUT_BASE_URL;
    const aboutResponse = await fetchData(aboutUrl);
    setAboutData(aboutResponse);
  };

  useEffect(() => {
    fetchAboutData();
  }, []);

  return (
    <div className="bg-gray-200 flex flex-col min-h-screen px-2 py-4">
      <h1 className="font-bold text-sm ps-2 pt-2">{langState === "en"?"About Page":"صفحة عن الشركة"}</h1>
      <div className="bg-white my-2 rounded-xl p-4">
        <DataTable data={aboutData} />
      </div>
    </div>
  );
};

export default AdminAbout;

import React, { useState, useEffect, useContext } from "react";
import DataTable from "../../../Components/DataTable";
import { fetchData } from "../../../Helpers/Networking";
import { LangContext } from "../../../Contexts/LangContext";

const AdminGallery = () => {
  const [galleryData, setGalleryData] = useState([]);
  const { langState } = useContext(LangContext);

  const fetchGalleryData = async () => {
    const galleryUrl = process.env.REACT_APP_GALLERY_BASE_URL;
    const galleryResponse = await fetchData(galleryUrl);
    setGalleryData(galleryResponse);
  };

  useEffect(() => {
    fetchGalleryData();
  }, []);

  return (
    <div className="bg-gray-200 flex flex-col min-h-screen px-2 py-4">
      <h1 className="font-bold text-sm ps-2 pt-2">
        {langState === "en" ? "Gallery Page" : "صفحة المعرض"}
      </h1>
      <div className="bg-white my-2 rounded-xl p-4">
        <DataTable data={galleryData} />
      </div>
    </div>
  );
};

export default AdminGallery;

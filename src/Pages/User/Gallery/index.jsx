import React, { useState, useEffect, useContext } from "react";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import GalleryBody from "./GalleryBody";
import GalleryBottom from "./GalleryBottom";
import { fetchData } from "../../../Helpers/Networking";
import { LangContext } from "../../../Contexts/LangContext";

const Gallery = () => {
  const [galleryData, setGalleryData] = useState([]);
  const { langState } = useContext(LangContext);

  const fetchgalleryData = async () => {
    const galleryUrl = process.env.REACT_APP_GALLERY_BASE_URL;
    const galleryResponse = await fetchData(galleryUrl);
    setGalleryData(galleryResponse);
  };

  useEffect(() => {
    fetchgalleryData();
  }, []);

  return (
    <div>
      <Navbar />
      <GalleryBody galleryData={galleryData} lang={langState} />
      <GalleryBottom galleryData={galleryData} lang={langState} />
      <Footer />
    </div>
  );
};

export default Gallery;

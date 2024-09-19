import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import GalleryBody from "./GalleryBody";
import GalleryBottom from "./GalleryBottom";

const Gallery = () => {
  return (
    <div>
      <Navbar />
      <GalleryBody />
      <GalleryBottom/>
      <Footer />
    </div>
  );
};

export default Gallery;

import React from "react";
import Ton from "../../../Assets/Images/500ton.jpeg";
import BoxingCranne from "../../../Assets/Images/boxing_crane.jpeg";
import Factory from "../../../Assets/Images/factory.jpeg";
import Ship from "../../../Assets/Images/ship.jpeg";
import DockingYard from "../../../Assets/Images/docking_yard.jpeg";

const GalleryBody = ({ galleryData, lang }) => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4">
        <div className="text-center">
          <img
            src={BoxingCranne}
            loading="lazy"
            alt="Ship"
            className="rounded-3xl aspect-square"
          />
          <h1 className="text-xs pt-4 md:text-base md:font-bold">
            {lang === "en" ? galleryData[0]?.text : galleryData[0]?.arText}
          </h1>
        </div>
        <div className="text-center">
          <img
            src={Ton}
            loading="lazy"
            alt="Docking Yard"
            className="rounded-3xl aspect-square xl:w-full"
          />
          <h1 className="text-xs pt-4 md:text-base md:font-bold">
            {lang === "en" ? galleryData[1]?.text : galleryData[1]?.arText}
          </h1>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-4 py-6">
        <div className="lg:h-96 lg:w-10/12">
          <img
            src={Factory}
            loading="lazy"
            alt="Factory"
            className="w-full h-full rounded-3xl"
          />
        </div>
        <h1 className="text-xs md:text-base md:font-bold">
          {lang === "en" ? galleryData[2]?.text : galleryData[2]?.arText}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4">
        <div className="text-center">
          <img
            src={Ship}
            loading="lazy"
            alt="Ship"
            className="rounded-3xl aspect-square"
          />
          <h1 className="text-xs pt-4 md:text-base md:font-bold">
            {lang === "en" ? galleryData[3]?.text : galleryData[3]?.arText}
          </h1>
        </div>
        <div className="text-center">
          <img
            src={DockingYard}
            loading="lazy"
            alt="Docking Yard"
            className="rounded-3xl aspect-square"
          />
          <h1 className="text-xs pt-4 md:text-base md:font-bold">
            {lang === "en" ? galleryData[4]?.text : galleryData[4]?.arText}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default GalleryBody;

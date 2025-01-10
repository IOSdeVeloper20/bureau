import React from "react";
import { BsGeoAlt } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOpenOutline, IoMailOutline } from "react-icons/io5";

const GalleryBottom = ({ galleryData, lang }) => {
  return (
    <div className="bg-greyBackground rounded-t-4xl p-4 flex justify-center">
      <div className="w-full md:w-8/12 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h1 className="md:text-lg lg:text-xl font-bold">
            {lang === "en" ? galleryData[5]?.text : galleryData[5]?.arText}
          </h1>
        </div>
        <hr className="hidden lg:inline-block w-px h-24 bg-darkBlue rotate-0" />

        <div>
          <ul className="text-sm lg:text-base lg:font-bold">
            <li className="flex items-center gap-2">
              <BsGeoAlt />
              <p>
                {lang === "en" ? galleryData[6]?.text : galleryData[6]?.arText}
              </p>
            </li>
            <li className="flex items-center gap-2">
              <IoMailOpenOutline />
              <p>{galleryData[7]?.text}</p>
            </li>
            <li className="flex items-center gap-2">
              <FiPhoneCall />
              <p>
                <a href={`tel:${galleryData[8]?.text}`}>
                  Tel: {galleryData[8]?.text}
                </a>
              </p>
            </li>
            <li className="flex items-center gap-2">
              <IoMailOutline />
              <p>
                <a href={`mailto:${galleryData[9]?.text}`}>
                  Email: {galleryData[9]?.text}
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GalleryBottom;

import React from "react";
import KraneSeaPort from "../../../Assets/Images/crane-seaport.png";
import { BiSolidLockOpenAlt } from "react-icons/bi";

const AboutBottom = ({ aboutData, lang }) => {
  return (
    <div className="bg-greyBackground flex justify-center rounded-t-4xl p-4">
      <div className="w-11/12 flex flex-col gap-4">
        <div className="flex grid-cols-1 gap-4 items-center">
          <BiSolidLockOpenAlt className="size-9 lg:size-10" />
          <h1 className="text-lg font-extrabold lg:text-2xl lg:font-bold relative">
            {lang === "en" ? aboutData[8]?.text : aboutData[8]?.arText}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:mt-4">
          <strong className="w-full lg:w-9/12 relative">
            {lang === "en" ? aboutData[9]?.text : aboutData[9]?.arText}
          </strong>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <ul className="list-disc ps-6 col-span-1">
            <li className={"relative"}>
              {lang === "en" ? aboutData[10]?.text : aboutData[10]?.arText}
            </li>
            <li className={"relative"}>
              {lang === "en" ? aboutData[11]?.text : aboutData[11]?.arText}
            </li>
            <li className={"relative"}>
              {lang === "en" ? aboutData[12]?.text : aboutData[12]?.arText}
            </li>
            <li className={"relative"}>
              {lang === "en" ? aboutData[13]?.text : aboutData[13]?.arText}
            </li>
            <li className={"relative"}>
              {lang === "en" ? aboutData[14]?.text : aboutData[14]?.arText}
            </li>
            <li className={"relative"}>
              {lang === "en" ? aboutData[15]?.text : aboutData[15]?.arText}
            </li>
            <li className={"relative"}>
              {lang === "en" ? aboutData[16]?.text : aboutData[16]?.arText}
            </li>
            <li className={"relative"}>
              {lang === "en" ? aboutData[17]?.text : aboutData[17]?.arText}
            </li>
          </ul>
          <img
            src={KraneSeaPort}
            loading="lazy"
            alt="Krane SeaPort"
            className="col-span-1"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutBottom;

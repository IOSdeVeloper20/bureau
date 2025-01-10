import React from "react";
import { FaBriefcase } from "react-icons/fa6";

const MainCard = ({ mainData, lang }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 bg-greyBackground rounded-3xl p-4 gap-3 w-11/12">
      <div className="bg-lightBlue rounded-2xl md:rounded-3xl col-span-12 lg:col-span-2 lg:w-5/6 flex flex-col justify-center items-center text-center p-2">
        <FaBriefcase className="text-darkBlue size-7 md:size-10" />
        <h1 className="text-darkBlue text-base md:text-lg font-bold relative">
          {lang === "en" ? mainData[2]?.text : mainData[2]?.arText}
        </h1>
      </div>
      <div className="col-span-12 sm:col-span-10">
        <p className="relative">
          {lang === "en" ? mainData[3]?.text : mainData[3]?.arText}
        </p>
        <ol className="list-decimal ps-4 pb-4">
          <li>{lang === "en" ? mainData[4]?.text : mainData[4]?.arText}</li>
          <li>{lang === "en" ? mainData[5]?.text : mainData[5]?.arText}</li>
          <li>{lang === "en" ? mainData[6]?.text : mainData[6]?.arText}</li>
          <li>{lang === "en" ? mainData[7]?.text : mainData[7]?.arText}</li>
        </ol>
        <p className="relative">
          {lang === "en" ? mainData[8]?.text : mainData[8]?.arText}
        </p>
      </div>
    </div>
  );
};

export default MainCard;

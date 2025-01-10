import React from "react";
import Boxing from "../../../Assets/Images/boxing.jpeg";
import { FaBookBookmark } from "react-icons/fa6";

const InspectionsMiddle = ({ inspectionsData, lang }) => {
  return (
    <div className="p-4 w-11/12">
      {/* upper section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-end items-center">
        {/* left text column */}
        <div className="col-span-2">
          <div className="bg-lightBlue rounded-2xl p-4 flex justify-center items-center gap-4 text-darkBlue">
            <FaBookBookmark className="size-7 md:size-12" />
            <h1 className=" text-xs md:text-lg lg:text-3xl font-bold lg:max-w-sm relative">
              {lang === "en"
                ? inspectionsData[1]?.text
                : inspectionsData[1]?.arText}
            </h1>
          </div>
          <div className="py-2 text-sm lg:text-base font-medium relative">
            {lang === "en"
              ? inspectionsData[2]?.text
              : inspectionsData[2]?.arText}
          </div>
        </div>
        {/* upper righ image column */}
        <div className="col-span-1 w-10/12 flex justify-center">
          <img
            src={Boxing}
            loading="lazy"
            alt="Boxing"
            className="hidden rounded-3xl w-2/3 lg:inline-block"
          />
        </div>
      </div>
      {/* lower section */}
      {/* list section */}
      <div className="grid grid-cols-1 text-sm lg:text-base lg:grid-cols-2 lg:font-bold lg:w-11/12">
        <div className="w-full md:mx-auto ps-2">
          {/* lef section list */}
          <ul className="list-disc lg:ps-4">
            <li className={"relative"}>
              {lang === "en"
                ? inspectionsData[3]?.text
                : inspectionsData[3]?.arText}
            </li>
            <li className={"relative"}>
              {lang === "en"
                ? inspectionsData[4]?.text
                : inspectionsData[4]?.arText}
            </li>
            <li className={"relative"}>
              {lang === "en"
                ? inspectionsData[5]?.text
                : inspectionsData[5]?.arText}
            </li>
            <li className={"relative"}>
              {lang === "en"
                ? inspectionsData[6]?.text
                : inspectionsData[6]?.arText}
            </li>
            <li className={"relative"}>
              {lang === "en"
                ? inspectionsData[7]?.text
                : inspectionsData[7]?.arText}
            </li>
          </ul>
        </div>
        {/* right section list */}
        <div>
          <ul className="list-disc ps-2">
            <li className={"relative"}>
              {lang === "en"
                ? inspectionsData[8]?.text
                : inspectionsData[8]?.arText}
            </li>
            <li className={"relative"}>
              {lang === "en"
                ? inspectionsData[9]?.text
                : inspectionsData[9]?.arText}
            </li>
            <li className={"relative"}>
              {lang === "en"
                ? inspectionsData[10]?.text
                : inspectionsData[10]?.arText}
            </li>
            <li className={"relative"}>
              {lang === "en"
                ? inspectionsData[11]?.text
                : inspectionsData[11]?.arText}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InspectionsMiddle;

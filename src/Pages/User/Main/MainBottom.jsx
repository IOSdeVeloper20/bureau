import React from "react";
import Submarine from "../../../Assets/Images/submarine.jpeg";
import Krane from "../../../Assets/Images/krane.jpeg";
import GreenWroker from "../../../Assets/Images/green worker.jpeg";
import GreenKrane from "../../../Assets/Images/green_crane.png";
import Etihad from "../../../Assets/Images/etihad.jpeg";

const MainBottom = ({ mainData, lang }) => {
  return (
    <div className="bg-greyBackground rounded-t-4xl p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
        <div className="lg:col-span-1 flex flex-col items-center text-center">
          <img
            src={Submarine}
            loading="lazy"
            alt="submarine"
            className="rounded-3xl sm:size-4/6 md:size-3/5 lg:size-full"
          />
          <h1 className="text-xl font-bold text-darkBlue pt-2">
            {lang === "en" ? mainData[9]?.text : mainData[9]?.arText}
          </h1>
        </div>
        <div className="text-center lg:col-span-2 md:text-start ">
          <ol>
            <li className="relative">
              {lang === "en" ? mainData[10]?.text : mainData[10]?.arText}
            </li>
            <li className="py-4 relative">
              {lang === "en" ? mainData[10]?.text : mainData[11]?.arText}
            </li>
            <li className="relative">
              {lang === "en" ? mainData[12]?.text : mainData[12]?.arText}
            </li>
          </ol>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-start items-start">
        <div className="text-center p-4">
          <div className="h-1/4">
            <img
              src={Krane}
              loading="lazy"
              alt="krane"
              className="rounded-3xl"
            />
          </div>
          <h1 className="text-darkBlue text-xl font-bold pt-2">
            {lang === "en" ? mainData[13]?.text : mainData[13]?.arText}
          </h1>
          <p className="text-center lg:text-start relative">
            {lang === "en" ? mainData[14]?.text : mainData[14]?.arText}
          </p>
        </div>

        <div className="text-center p-4">
          <div className="h-1/4">
            <img
              src={GreenWroker}
              loading="lazy"
              alt="Green Worker"
              className="rounded-3xl"
            />
          </div>
          <h1 className="text-darkBlue text-xl font-bold pt-2">
            {lang === "en" ? mainData[15]?.text : mainData[15]?.arText}
          </h1>
          <p className="text-center lg:text-start relative">
            {lang === "en" ? mainData[16]?.text : mainData[16]?.arText}
          </p>
        </div>

        <div className="text-center p-4">
          <div className="h-1/4">
            <img
              src={GreenKrane}
              loading="lazy"
              alt="Green Krane"
              className="rounded-3xl"
            />
          </div>
          <h1 className="text-darkBlue text-xl font-bold pt-4">
            {lang === "en" ? mainData[17]?.text : mainData[17]?.arText}
          </h1>
          <p className="text-center lg:text-start relative">
            {lang === "en" ? mainData[18]?.text : mainData[18]?.arText}
          </p>
        </div>

        <div className="text-center p-4">
          <div className="h-40 md:h-48 lg:h-32 xl:h-40 2xl:h-44 flex justify-center">
            <img
              src={Etihad}
              loading="lazy"
              alt="Etihad"
              className="rounded-3xl h-full object-fill"
            />
          </div>
          <h1 className="text-darkBlue text-xl font-bold pt-5">
            {lang === "en" ? mainData[19]?.text : mainData[19]?.arText}
          </h1>
          <p className="text-center lg:text-start relative">
            {lang === "en" ? mainData[20]?.text : mainData[20]?.arText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainBottom;

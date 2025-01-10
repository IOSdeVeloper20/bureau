import React from "react";
import BlueWorker from "../../../Assets/Images/blue_worker.jpeg";

const TrainingMiddle = ({ trainingData, lang }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {/* left text section */}
      <div className="w-full lg:w-1/2 text-sm lg:text-base">
        <div>
          <p className="relative">
            {lang === "en" ? trainingData[1]?.text : trainingData[1]?.arText}
          </p>
          <p className="py-4 relative">
            {lang === "en" ? trainingData[2]?.text : trainingData[2]?.arText}
          </p>
        </div>
        <div>
          <ul className="list-disc ps-4 font-normal lg:font-bold">
            <li className={"relative"}>
              {lang === "en" ? trainingData[3]?.text : trainingData[3]?.arText}
            </li>
            <li className={"relative"}>
              {lang === "en" ? trainingData[4]?.text : trainingData[4]?.arText}
            </li>
            <li className={"relative"}>
              {lang === "en" ? trainingData[5]?.text : trainingData[5]?.arText}
            </li>
            <li className={"relative"}>
              {lang === "en" ? trainingData[6]?.text : trainingData[6]?.arText}
            </li>
            <li className={"relative"}>
              {lang === "en" ? trainingData[7]?.text : trainingData[7]?.arText}
            </li>
            <li className={"relative"}>
              {lang === "en" ? trainingData[8]?.text : trainingData[8]?.arText}
            </li>
            <li className={"relative"}>
              {lang === "en" ? trainingData[9]?.text : trainingData[9]?.arText}
            </li>
          </ul>
        </div>
      </div>
      {/* image right section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <img
          src={BlueWorker}
          loading="lazy"
          alt="Blue Worker"
          className="rounded-3xl h-full"
        />
      </div>
    </div>
  );
};

export default TrainingMiddle;

import React from "react";
import { BiSolidSpreadsheet } from "react-icons/bi";
import EditModal from "../../Components/EditModal";

const AboutMiddle = ({ aboutData, user, fetchAboutData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 rounded-3xl p-4 gap-3 w-11/12">
      <div className="bg-lightBlue rounded-2xl md:rounded-3xl col-span-12 lg:col-span-2 lg:w-5/6 flex flex-col justify-center items-center text-center p-2">
        <BiSolidSpreadsheet className="text-darkBlue size-7 md:size-10" />
        <h1 className="text-darkBlue text-base md:text-lg font-bold relative">
          {aboutData[6]?.text}
          {user && (
            <EditModal
              fileName="aboutData"
              id={aboutData[6]?.id}
              refetchData={fetchAboutData}
            />
          )}
        </h1>
      </div>
      <div className="col-span-12 lg:col-span-10 relative">
        <p>
          {aboutData[7]?.text}
          {user && (
            <EditModal
              fileName="aboutData"
              id={aboutData[7]?.id}
              refetchData={fetchAboutData}
            />
          )}
        </p>
      </div>
    </div>
  );
};

export default AboutMiddle;

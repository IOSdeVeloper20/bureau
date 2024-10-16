import React from "react";
import Shipment from "../../Assets/Images/shipment.jpeg";
import Saleh from "../../Assets/Images/saleh.jpeg";
import Abosad from "../../Assets/Images/abosad.png";
import { FaBookBookmark } from "react-icons/fa6";
import EditModal from "../../Components/EditModal";

const AboutHeader = ({ aboutData, user, fetchAboutData }) => {
  return (
    <div className="grid grid-rows-3 bg-greyBackground rounded-3xl p-4 gap-12">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
        <div className="lg:flex justify-center items-center lg:w-5/6">
          <div className="bg-lightBlue rounded-2xl lg:w-5/6 md:rounded-3xl p-4 flex flex-col items-center text-center lg:gap-4">
            <FaBookBookmark className="text-darkBlue size-7 md:size-10" />
            <h1 className="text-darkBlue text-base md:text-lg font-bold relative">
              {aboutData[0]?.text}
              {user && (
                <EditModal
                  fileName="aboutData"
                  id={aboutData[0]?.id}
                  refetchData={fetchAboutData}
                />
              )}
            </h1>
          </div>
        </div>
        <div className="col-span-2 relative">
          <p>
            {aboutData[1]?.text}
            {user && (
              <EditModal
                fileName="aboutData"
                id={aboutData[1]?.id}
                refetchData={fetchAboutData}
              />
            )}
          </p>
        </div>
        <div className="col-span-2 flex justify-center">
          <img
            src={Shipment}
            loading="lazy"
            alt="Shipment"
            className="rounded-3xl md:w-1/2 lg:w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2  lg:grid-cols-3">
        <div className="flex justify-center">
          <img
            src={Saleh}
            loading="lazy"
            alt="Saleh"
            className="lg:h-full lg:w-4/6"
          />
        </div>

        <div className="flex justify-center items-center md:items-start gap-4">
          <FaBookBookmark className="text-darkBlue size-7 md:size-10 lg:size-16" />
          <p className="text-2xl lg:text-3xl relative">
            {aboutData[2]?.text}
            {user && (
              <EditModal
                fileName="aboutData"
                id={aboutData[2]?.id}
                refetchData={fetchAboutData}
              />
            )}
          </p>
        </div>

        <p className="ps-2 md:p-0 relative">
          {aboutData[3]?.text}
          {user && (
            <EditModal
              fileName="aboutData"
              id={aboutData[3]?.id}
              refetchData={fetchAboutData}
            />
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-2  lg:grid-cols-3">
        <div className="flex justify-center">
          <img
            src={Abosad}
            loading="lazy"
            alt="Abosad"
            className="lg:h-full lg:w-4/6"
          />
        </div>

        <div className="flex justify-center items-center md:items-start gap-4">
          <FaBookBookmark className="text-darkBlue size-7 md:size-10 lg:size-16" />
          <p className="text-2xl lg:text-3xl relative">
            {aboutData[4]?.text}
            {user && (
              <EditModal
                fileName="aboutData"
                id={aboutData[4]?.id}
                refetchData={fetchAboutData}
              />
            )}
          </p>
        </div>

        <p className="ps-2 md:p-0 relative">
          {aboutData[5]?.text}
          {user && (
            <EditModal
              fileName="aboutData"
              id={aboutData[5]?.id}
              refetchData={fetchAboutData}
            />
          )}
        </p>
      </div>
    </div>
  );
};

export default AboutHeader;

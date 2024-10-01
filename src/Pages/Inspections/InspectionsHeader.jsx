import React from "react";
import GreenKrane from "../../Assets/Images/green_crane.png";
import { FaRegEdit } from "react-icons/fa";
import { handleUpdating } from "../../Helpers/Updating";

const InspectionsHeader = ({ inspectionsData, user, fetchInspectionData }) => {
  return (
    <div className="bg-greyBackground rounded-4xl flex flex-col justify-center items-center">
      <div className="w-11/12 flex flex-col justify-center items-center">
        <div className="w-full relative">
          <img
            src={GreenKrane}
            alt="yellow gas"
            className="rounded-3xl lg:h-screen w-full"
          />
          <div className="absolute top-6 left-3 lg:left-8">
            <h1 className="text-white text-xs lg:text-4xl font-bold">
              INDUSTRY EXPERTS IN
              <br /> KEEPING OUR CUSTOMERS
              <br />
              SAFE & COMPLIANT
            </h1>
          </div>
        </div>

        <div className="bg-darkGrey rounded-3xl p-4 gap-3 w-11/12">
          <p className="col-span-12 text-sm lg:text-base relative">
            {inspectionsData[0]?.text}
            {user && (
              <FaRegEdit
                onClick={() =>
                  handleUpdating(
                    "inspectionsData",
                    inspectionsData[0]?.id,
                    "",
                    fetchInspectionData
                  )
                }
                className="absolute hidden lg:inline-block right-0 bottom-0 text-red-500"
              />
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InspectionsHeader;

import React from "react";
import Boxing from "../../Assets/Images/boxing.jpeg";
import { FaBookBookmark } from "react-icons/fa6";
import EditModal from "../../Components/EditModal";

const InspectionsMiddle = ({ inspectionsData, user, fetchInspectionData }) => {
  return (
    <div className="p-4 w-11/12">
      {/* upper section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-end items-center">
        {/* left text column */}
        <div className="col-span-2">
          <div className="bg-lightBlue rounded-2xl p-4 flex justify-center items-center gap-4 text-darkBlue">
            <FaBookBookmark className="size-7 md:size-12" />
            <h1 className=" text-xs md:text-lg lg:text-3xl font-bold lg:max-w-sm relative">
              {inspectionsData[1]?.text}
              {user && (
                <EditModal
                  fileName="inspectionsData"
                  id={inspectionsData[1]?.id}
                  refetchData={fetchInspectionData}
                />
              )}
            </h1>
          </div>
          <div className="py-2 text-sm lg:text-base font-medium relative">
            {inspectionsData[2]?.text}
            {user && (
              <EditModal
                fileName="inspectionsData"
                id={inspectionsData[2]?.id}
                refetchData={fetchInspectionData}
              />
            )}
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
              {inspectionsData[3]?.text}
              {user && (
                <EditModal
                  fileName="inspectionsData"
                  id={inspectionsData[3]?.id}
                  refetchData={fetchInspectionData}
                />
              )}
            </li>
            <li className={"relative"}>
              {inspectionsData[4]?.text}
              {user && (
                <EditModal
                  fileName="inspectionsData"
                  id={inspectionsData[4]?.id}
                  refetchData={fetchInspectionData}
                />
              )}
            </li>
            <li className={"relative"}>
              {inspectionsData[5]?.text}
              {user && (
                <EditModal
                  fileName="inspectionsData"
                  id={inspectionsData[5]?.id}
                  refetchData={fetchInspectionData}
                />
              )}
            </li>
            <li className={"relative"}>
              {inspectionsData[6]?.text}
              {user && (
                <EditModal
                  fileName="inspectionsData"
                  id={inspectionsData[6]?.id}
                  refetchData={fetchInspectionData}
                />
              )}
            </li>
            <li className={"relative"}>
              {inspectionsData[7]?.text}
              {user && (
                <EditModal
                  fileName="inspectionsData"
                  id={inspectionsData[7]?.id}
                  refetchData={fetchInspectionData}
                />
              )}
            </li>
          </ul>
        </div>
        {/* right section list */}
        <div>
          <ul className="list-disc ps-2">
            <li className={"relative"}>
              {inspectionsData[8]?.text}
              {user && (
                <EditModal
                  fileName="inspectionsData"
                  id={inspectionsData[8]?.id}
                  refetchData={fetchInspectionData}
                />
              )}
            </li>
            <li className={"relative"}>
              {inspectionsData[9]?.text}
              {user && (
                <EditModal
                  fileName="inspectionsData"
                  id={inspectionsData[9]?.id}
                  refetchData={fetchInspectionData}
                />
              )}
            </li>
            <li className={"relative"}>
              {inspectionsData[10]?.text}
              {user && (
                <EditModal
                  fileName="inspectionsData"
                  id={inspectionsData[10]?.id}
                  refetchData={fetchInspectionData}
                />
              )}
            </li>
            <li className={"relative"}>
              {inspectionsData[11]?.text}
              {user && (
                <EditModal
                  fileName="inspectionsData"
                  id={inspectionsData[11]?.id}
                  refetchData={fetchInspectionData}
                />
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InspectionsMiddle;

import React from "react";
import { FaBriefcase } from "react-icons/fa6";
import EditModal from "../../Components/EditModal";

const MainCard = ({ mainData, user, fetchMainData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 bg-greyBackground rounded-3xl p-4 gap-3 w-11/12">
      <div className="bg-lightBlue rounded-2xl md:rounded-3xl col-span-12 lg:col-span-2 lg:w-5/6 flex flex-col justify-center items-center text-center p-2">
        <FaBriefcase className="text-darkBlue size-7 md:size-10" />
        <h1 className="text-darkBlue text-base md:text-lg font-bold relative">
          {mainData[2]?.text}
          {user && (
            <EditModal
              fileName="mainData"
              id={mainData[2]?.id}
              refetchData={fetchMainData}
            />
          )}
        </h1>
      </div>
      <div className="col-span-12 sm:col-span-10">
        <p className="relative">
          {mainData[3]?.text}
          {user && (
            <EditModal
              fileName="mainData"
              id={mainData[3]?.id}
              refetchData={fetchMainData}
            />
          )}
        </p>
        <ol className="list-decimal ps-4 pb-4">
          <li>
            {mainData[4]?.text}
            {user && (
              <EditModal
                fileName="mainData"
                id={mainData[4]?.id}
                refetchData={fetchMainData}
              />
            )}
          </li>
          <li>
            {mainData[5]?.text}
            {user && (
              <EditModal
                fileName="mainData"
                id={mainData[5]?.id}
                refetchData={fetchMainData}
              />
            )}
          </li>
          <li>
            {mainData[6]?.text}
            {user && (
              <EditModal
                fileName="mainData"
                id={mainData[6]?.id}
                refetchData={fetchMainData}
              />
            )}
          </li>
          <li>
            {mainData[7]?.text}
            {user && (
              <EditModal
                fileName="mainData"
                id={mainData[7]?.id}
                refetchData={fetchMainData}
              />
            )}
          </li>
        </ol>
        <p className="relative">
          {mainData[8]?.text}
          {user && (
            <EditModal
              fileName="mainData"
              id={mainData[8]?.id}
              refetchData={fetchMainData}
            />
          )}
        </p>
      </div>
    </div>
  );
};

export default MainCard;

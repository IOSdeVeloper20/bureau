import React from "react";
import yellowGas from "../../Assets/Images/yellow_gas.jpeg";
import { FaBookBookmark } from "react-icons/fa6";
import EditModal from "../../Components/EditModal";

const MainHeader = ({ mainData, user, fetchMainData }) => {
  return (
    <div className="bg-greyBackground rounded-4xl flex flex-col justify-center items-center">
      <div className="w-11/12">
        <div className="relative">
          <img src={yellowGas} alt="yellow gas" className="rounded-3xl" />
          <div className="absolute top-2 lg:top-6 right-3 lg:right-8">
            <h1 className="hidden text-greenTitle text-xs lg:inline-block lg:text-4xl font-medium lg:font-bold">
              Industry Experts in,
              <br /> Testing, Certification,
              <br /> Lifting Equipment &<br />
              Training Services
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 bg-greyBackground rounded-3xl p-4 gap-3">
          <div className="bg-lightBlue rounded-2xl col-span-12 lg:col-span-2 lg:w-5/6 md:rounded-3xl p-4 flex flex-col justify-center items-center text-center">
            <FaBookBookmark className="text-darkBlue size-7 md:size-10" />
            <h1 className="text-darkBlue text-base md:text-lg font-bold relative">
              {mainData[0]?.text}
              {user && (
                <EditModal
                  fileName="mainData"
                  id={mainData[0]?.id}
                  refetchData={fetchMainData}
                />
              )}
            </h1>
          </div>
          <p className="col-span-12 lg:col-span-10 relative">
            {mainData[1]?.text}
            {user && (
              <EditModal
                fileName="mainData"
                id={mainData[1]?.id}
                refetchData={fetchMainData}
              />
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;

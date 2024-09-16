import React from "react";
import { FaBriefcase } from "react-icons/fa6";
const MainCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 bg-greyBackground rounded-3xl p-4 gap-3 w-11/12">
      <div className="bg-lightBlue rounded-2xl md:rounded-3xl col-span-12 lg:col-span-2 lg:w-5/6 flex flex-col justify-center items-center text-center p-2">
        <FaBriefcase className="text-darkBlue size-7 md:size-10" />
        <h1 className="text-darkBlue text-base md:text-lg font-bold">
          Main Business Interest
        </h1>
      </div>
      <div className="col-span-12 sm:col-span-10">
        <strong>ABoS’s</strong> main core businesses are in the following items:
        <ol className="list-decimal ps-4 pb-4">
          <li>
            Inspection, testing and examination of lifting appliances and
            lifting gears.
          </li>
          <li>
            Inspection, testing and examination of Earth moving machinery,
            Industrial
          </li>
          <li>
            Examination the competency of the above mentioned equipment and
            machines operators and conducting safe use of the equipment training
            courses for them.
          </li>
          <li>Conducting safety & Vocational training courses.</li>
        </ol>
        <strong>ABOS</strong> is doing consultation on Quality Management
        Systems, Environmental Management System and Safety Management System
        training & Consultancy.
      </div>
    </div>
  );
};

export default MainCard;

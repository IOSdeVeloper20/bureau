import React from "react";
import { FaBriefcase } from "react-icons/fa6";
const MainCard = () => {
  return (
    <div className="flex bg-gray-300 rounded-3xl p-4 relative gap-3 w-11/12">
      <div className="bg-lightBlue rounded-3xl flex flex-col w-1/6 justify-center items-center text-center p-2">
        <FaBriefcase className="text-darkBlue size-1/2" />
        <h1 className="text-darkBlue text-lg font-bold">
          Main Business Interest
        </h1>
      </div>
      <div>
        <strong>ABoS’s</strong> main core businesses are in the following items
        <ol className="list-decimal ps-4">
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

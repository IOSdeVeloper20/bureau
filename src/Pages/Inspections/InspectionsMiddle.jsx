import React from "react";
import Boxing from "../../Assets/Images/boxing.jpeg";
import { FaBookBookmark } from "react-icons/fa6";

const InspectionsMiddle = () => {
  return (
    <div className="p-4 w-11/12">
      {/* upper section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-end items-center">
        {/* left text column */}
        <div className="col-span-2">
          <div className="bg-lightBlue rounded-2xl p-4 flex justify-center items-center gap-4 text-darkBlue">
            <FaBookBookmark className="size-7 md:size-10"/>
            <h1 className=" text-xs md:text-lg lg:text-3xl font-bold">TESTING, INSPECTION, & <br /> CERTIFICATION SERVICES</h1>
          </div>
          <div className="py-2 text-sm lg:text-base font-medium">
            Under the Abu Dhabi Municipality (ADM / OSHAD) & Ministry of
            Industry and Advanced Technology (MOIAT)/Emirates National
            Accreditation Systems (ENAS) there are various regulations which
            require employers to ensure that equipment is safe to use, fit for
            purpose, and thoroughly examined by a competent body. Our team of
            highly qualified engineers provide thorough examination and
            certification services on all types of equipment including:
          </div>
        </div>
        {/* upper righ image column */}
        <div className="col-span-1 w-10/12 flex justify-center">
          <img src={Boxing} alt="Boxing" className="hidden rounded-3xl w-2/3 lg:inline-block" />
        </div>
      </div>
      {/* lower section */}
      {/* list section */}
      <div className="grid grid-cols-1 text-sm lg:text-base lg:grid-cols-2 lg:font-bold lg:w-11/12">
        <div className="w-full md:mx-auto ps-2">
          {/* lef section list */}
          <ul className="list-disc lg:ps-4">
            <li>Cranes & Lifting Equipment and Accessories.</li>
            <li>Elevators & Escalators</li>
            <li>Plant and Machinery </li>
            <li>Access Equipment and MEWPS</li>
            <li>Scaffolding & Working Platforms</li>
          </ul>
        </div>
        {/* right section list */}
        <div>
          <ul className="list-disc ps-2">
            <li>Pressure Equipment’s</li>
            <li>Fall Protection</li>
            <li>Electrical Equipment’s & Power Actuated Tools (PAT) Testing</li>
            <li>Local Exhaust Ventilation (LEV) systems.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InspectionsMiddle;

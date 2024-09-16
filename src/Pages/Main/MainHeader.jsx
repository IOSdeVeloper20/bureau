import React from "react";
import yellowGas from "../../Assets/Images/yellow_gas.jpeg";
import { FaBookBookmark } from "react-icons/fa6";

const MainHeader = () => {
  return (
    <div className="bg-greyBackground rounded-4xl flex flex-col justify-center items-center">
      <div className="w-11/12">
        <div>
          <img src={yellowGas} alt="yellow gas" className="rounded-3xl" />
        </div>

        <div className="flex bg-gray-300 rounded-3xl p-4 gap-3">
          <div className="bg-lightBlue rounded-3xl p-4 flex flex-col justify-center items-center text-center">
            <FaBookBookmark className="text-darkBlue size-1/2"/>
            <h1 className="text-darkBlue text-lg font-bold">Company Profile</h1>
          </div>
          <p>
            <strong>Arabian Bureau of Services</strong> established on 1993 as a 3rd party
            inspection company for the thorough examination of Lifting
            Appliances, Lifting Gears, Earthmoving Machineries, Industrial
            Trucks & QHSE training and consultancy. During this period ABoS had
            grown and expanded in the U.A.E market and established a high
            strength relationship among its customers whose trust by its
            judgment. Our judgment against any equipment, machine or accessory
            gear gives priority of preventing equipment, machine, accessory
            gear, operators, labors, environment and the property from any
            accident, deterioration, damage, harm, fatal injuries or death. For
            more than two decade of operations, ABoS has gained much experience
            in the UAE and has preserved its commitment to provide quality
            inspection service to all our clients. Qualified and experienced
            staffs were retained to ensure a continuity of quality inspection &
            training services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;

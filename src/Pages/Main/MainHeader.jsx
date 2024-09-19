import React from "react";
import yellowGas from "../../Assets/Images/yellow_gas.jpeg";
import { FaBookBookmark } from "react-icons/fa6";

const MainHeader = () => {
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
            <h1 className="text-darkBlue text-base md:text-lg font-bold">
              Company Profile
            </h1>
          </div>
          <p className="col-span-12 lg:col-span-10">
            <strong>Arabian Bureau of Services</strong> established on 1993 as a
            3rd party inspection company for the thorough examination of Lifting
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

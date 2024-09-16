import React from "react";
import { BiSolidSpreadsheet } from "react-icons/bi";

const AboutMiddle = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 rounded-3xl p-4 gap-3 w-11/12">
      <div className="bg-lightBlue rounded-2xl md:rounded-3xl col-span-12 lg:col-span-2 lg:w-5/6 flex flex-col justify-center items-center text-center p-2">
        <BiSolidSpreadsheet className="text-darkBlue size-7 md:size-10" />
        <h1 className="text-darkBlue text-base md:text-lg font-bold">
          Impartiality
        </h1>
      </div>
      <div className="col-span-12 sm:col-span-10">
        <p>
          <strong>Arabian Bureau of Services (ABoS)</strong> is 100% committed
          to the performance of impartial, objective inspections to inspire
          confidence in our business and the industry. We undertake not to
          engage in any activities that may conflict with our independence of
          judgment and integrity in relation to our inspection activities In
          particular ABoS shall not be engaged in the design, manufacture,
          supply, installation, purchase, ownership, use or maintenance of the
          items inspected.
        </p>
      </div>
    </div>
  );
};

export default AboutMiddle;

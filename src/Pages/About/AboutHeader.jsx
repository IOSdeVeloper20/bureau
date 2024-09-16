import React from "react";
import Shipment from "../../Assets/Images/shipment.jpeg";
import { FaBookBookmark } from "react-icons/fa6";

const AboutHeader = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 bg-greyBackground rounded-3xl p-4 gap-3">
      <div className="lg:flex justify-center items-center lg:w-5/6">
        <div className="bg-lightBlue rounded-2xl lg:col-span-1 lg:w-5/6 md:rounded-3xl p-4 flex flex-col items-center text-center lg:gap-4">
          <FaBookBookmark className="text-darkBlue size-7 md:size-10" />
          <h1 className="text-darkBlue text-base md:text-lg font-bold">
            Company Profile
          </h1>
        </div>
      </div>
      <div className="col-span-2">
        <p>
          Quality & sustainable life style is essential part of our life. To
          Ensure the same perfection & unique decision are very important. The
          current industry is required the quality & certification on everything
          which ever we dealt with it. With the above idea Arabian Bureau of
          Services established on 1993 to ensure the quality & impartial
          inspection as well as the effective training services for its
          customer. The team is well organized to ensure its services providing
          to the customer effectively & most efficiently. We registered with all
          the major oil companies which is providing the services to the nation.
          We still looking forward to register with international organization
          to ensure the compliance of the requirements to the international
          level.
        </p>
      </div>
      <div className="col-span-2">
        <img src={Shipment} alt="Shipment" className="rounded-3xl"/>
      </div>
    </div>
  );
};

export default AboutHeader;

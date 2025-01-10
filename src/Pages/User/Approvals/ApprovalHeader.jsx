import React from "react";
import Actevet from "../../../Assets/Images/Logos/actvet.png";
import Adnoc from "../../../Assets/Images/Logos/adnoc.png";
import Enas from "../../../Assets/Images/Logos/enas.jpeg";
import EtihadLogo from "../../../Assets/Images/Logos/etihad_logo.png";
import Ipaf from "../../../Assets/Images/Logos/ipaf.png";
import Iso from "../../../Assets/Images/Logos/iso.jpeg";
import Leaa from "../../../Assets/Images/Logos/leea.jpeg";
import Muniplicity from "../../../Assets/Images/Logos/municipality.png";
import Rakez from "../../../Assets/Images/Logos/rakez.png";

const ApprovalHeader = ({ approvalsData, lang }) => {
  return (
    <div className="p-4">
      <h1 className="text-darkBlue text-2xl lg:text-4xl text-center font-bold">
        {lang === "en" ? approvalsData[0]?.text : approvalsData[0]?.arText}
      </h1>
      <div className="flex justify-center py-4">
        <hr className="border-solid bg-darkGrey h-0.5 w-9/12 text-center" />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-1">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 justify-center items-center p-4">
          <div className="flex justify-center">
            <img
              src={Adnoc}
              loading="lazy"
              alt="Adnnoc"
              className="size-3/6 sm:size-2/6 lg:size-1/2"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={Enas}
              loading="lazy"
              alt="Enas"
              className="size-3/2 sm:size-2/6 md:size-3/6 lg:size-5/6"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={Muniplicity}
              loading="lazy"
              alt="Muniplicity"
              className="size-3/2 sm:size-2/6 md:size-4/6 lg:size-5/6"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={Rakez}
              loading="lazy"
              alt="Rakez"
              className="size-3/6 sm:size-2/6 lg:size-1/2"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={Leaa}
              loading="lazy"
              alt="Leaa"
              className="size-3/6 sm:size-2/6 lg:size-1/2"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 justify-center items-center p-4">
          <div className="flex justify-center">
            <img
              src={Iso}
              loading="lazy"
              alt="Iso"
              className="size-5/6 sm:size-2/6 md:size-3/6 lg:size-4/6"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={Actevet}
              loading="lazy"
              alt="Actevet"
              className="size-5/6 sm:size-2/6 md:size-3/6 lg:size-4/6"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={Ipaf}
              loading="lazy"
              alt="Ipaf"
              className="size-5/6 sm:size-2/6 md:size-3/6 lg:size-4/6"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={EtihadLogo}
              loading="lazy"
              alt="Etihad Logo"
              className="size-5/6 sm:size-2/6 md:size-3/6 lg:size-4/6"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center py-6">
        <hr className="border-solid bg-darkGrey h-0.5 w-9/12 text-center" />
      </div>
    </div>
  );
};

export default ApprovalHeader;

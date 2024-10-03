import React from "react";
import KraneSeaPort from "../../Assets/Images/crane-seaport.png";
import { BiSolidLockOpenAlt } from "react-icons/bi";
import EditModal from "../../Components/EditModal";

const AboutBottom = ({ aboutData, user, fetchAboutData }) => {
  return (
    <div className="bg-greyBackground flex justify-center rounded-t-4xl p-4">
      <div className="w-11/12 flex flex-col gap-4">
        <div className="flex grid-cols-1 gap-4 items-center">
          <BiSolidLockOpenAlt className="size-9 lg:size-10" />
          <h1 className="text-lg font-extrabold lg:text-2xl lg:font-bold relative">
            {aboutData[8]?.text}
            {user && (
              <EditModal
                fileName="aboutData"
                id={aboutData[8]?.id}
                refetchData={fetchAboutData}
              />
            )}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:mt-4">
          <strong className="w-full lg:w-9/12 relative">
            {aboutData[9]?.text}
            {user && (
              <EditModal
                fileName="aboutData"
                id={aboutData[9]?.id}
                refetchData={fetchAboutData}
              />
            )}
          </strong>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <ul className="list-disc ps-6 col-span-1">
            <li className={"relative"}>
              {aboutData[10]?.text}
              {user && (
                <EditModal
                  fileName="aboutData"
                  id={aboutData[10]?.id}
                  refetchData={fetchAboutData}
                />
              )}
            </li>
            <li className={"relative"}>
              {aboutData[11]?.text}
              {user && (
                <EditModal
                  fileName="aboutData"
                  id={aboutData[11]?.id}
                  refetchData={fetchAboutData}
                />
              )}
            </li>
            <li className={"relative"}>
              {aboutData[12]?.text}
              {user && (
                <EditModal
                  fileName="aboutData"
                  id={aboutData[12]?.id}
                  refetchData={fetchAboutData}
                />
              )}
            </li>
            <li className={"relative"}>
              {aboutData[13]?.text}
              {user && (
                <EditModal
                  fileName="aboutData"
                  id={aboutData[13]?.id}
                  refetchData={fetchAboutData}
                />
              )}
            </li>
            <li className={"relative"}>
              {aboutData[14]?.text}
              {user && (
                <EditModal
                  fileName="aboutData"
                  id={aboutData[14]?.id}
                  refetchData={fetchAboutData}
                />
              )}
            </li>
            <li className={"relative"}>
              {aboutData[15]?.text}
              {user && (
                <EditModal
                  fileName="aboutData"
                  id={aboutData[15]?.id}
                  refetchData={fetchAboutData}
                />
              )}
            </li>
            <li className={"relative"}>
              {aboutData[16]?.text}
              {user && (
                <EditModal
                  fileName="aboutData"
                  id={aboutData[16]?.id}
                  refetchData={fetchAboutData}
                />
              )}
            </li>
            <li className={"relative"}>
              {aboutData[17]?.text}
              {user && (
                <EditModal
                  fileName="aboutData"
                  id={aboutData[17]?.id}
                  refetchData={fetchAboutData}
                />
              )}
            </li>
          </ul>
          <img src={KraneSeaPort} alt="Krane SeaPort" className="col-span-1" />
        </div>
      </div>
    </div>
  );
};

export default AboutBottom;

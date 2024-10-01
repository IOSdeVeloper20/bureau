import React from "react";
import KraneSeaPort from "../../Assets/Images/crane-seaport.png";
import { BiSolidLockOpenAlt } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";
import { handleUpdating } from "../../Helpers/Updating";

const AboutBottom = ({ aboutData, user, fetchAboutData }) => {
  return (
    <div className="bg-greyBackground flex justify-center rounded-t-4xl p-4">
      <div className="w-11/12 flex flex-col gap-4">
        <div className="flex grid-cols-1 gap-4 items-center">
          <BiSolidLockOpenAlt className="size-9 lg:size-10" />
          <h1 className="text-lg font-extrabold lg:text-2xl lg:font-bold relative">
            {aboutData[8]?.title}
            {user && (
              <FaRegEdit
                onClick={() =>
                  handleUpdating(
                    "aboutData",
                    aboutData[8]?.id,
                    "",
                    fetchAboutData
                  )
                }
                className="absolute hidden lg:block right-0 text-base text-red-500"
              />
            )}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:mt-4">
          <strong className="w-full lg:w-9/12 relative">
            {aboutData[9]?.text}
            {user && (
              <FaRegEdit
                onClick={() =>
                  handleUpdating(
                    "aboutData",
                    aboutData[9]?.id,
                    "",
                    fetchAboutData
                  )
                }
                className="absolute hidden lg:inline-block right-0 bottom-1 text-base text-red-500"
              />
            )}
          </strong>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <ul className="list-disc ps-6 col-span-1">
            <li className={"relative"}>
              {aboutData[10]?.text}
              {user && (
                <FaRegEdit
                  onClick={() =>
                    handleUpdating(
                      "aboutData",
                      aboutData[10]?.id,
                      "",
                      fetchAboutData
                    )
                  }
                  className="absolute hidden lg:inline-block right-0 bottom-0 text-base text-red-500"
                />
              )}
            </li>
            <li className={"relative"}>
              {aboutData[11]?.text}
              {user && (
                <FaRegEdit
                  onClick={() =>
                    handleUpdating(
                      "aboutData",
                      aboutData[11]?.id,
                      "",
                      fetchAboutData
                    )
                  }
                  className="absolute hidden lg:inline-block right-0 bottom-0 text-base text-red-500"
                />
              )}
            </li>
            <li className={"relative"}>
              {aboutData[12]?.text}
              {user && (
                <FaRegEdit
                  onClick={() =>
                    handleUpdating(
                      "aboutData",
                      aboutData[12]?.id,
                      "",
                      fetchAboutData
                    )
                  }
                  className="absolute hidden lg:inline-block right-0 bottom-0 text-base text-red-500"
                />
              )}
            </li>
            <li className={"relative"}>
              {aboutData[13]?.text}
              {user && (
                <FaRegEdit
                  onClick={() =>
                    handleUpdating(
                      "aboutData",
                      aboutData[13]?.id,
                      "",
                      fetchAboutData
                    )
                  }
                  className="absolute hidden lg:inline-block right-0 bottom-0 text-base text-red-500"
                />
              )}
            </li>
            <li className={"relative"}>
              {aboutData[14]?.text}
              {user && (
                <FaRegEdit
                  onClick={() =>
                    handleUpdating(
                      "aboutData",
                      aboutData[14]?.id,
                      "",
                      fetchAboutData
                    )
                  }
                  className="absolute hidden lg:inline-block right-0 bottom-0 text-base text-red-500"
                />
              )}
            </li>
            <li className={"relative"}>
              {aboutData[15]?.text}
              {user && (
                <FaRegEdit
                  onClick={() =>
                    handleUpdating(
                      "aboutData",
                      aboutData[15]?.id,
                      "",
                      fetchAboutData
                    )
                  }
                  className="absolute hidden lg:inline-block right-0 bottom-0 text-base text-red-500"
                />
              )}
            </li>
            <li className={"relative"}>
              {aboutData[16]?.text}
              {user && (
                <FaRegEdit
                  onClick={() =>
                    handleUpdating(
                      "aboutData",
                      aboutData[16]?.id,
                      "",
                      fetchAboutData
                    )
                  }
                  className="absolute hidden lg:inline-block right-0 bottom-0 text-base text-red-500"
                />
              )}
            </li>
            <li className={"relative"}>
              {aboutData[17]?.text}
              {user && (
                <FaRegEdit
                  onClick={() =>
                    handleUpdating(
                      "aboutData",
                      aboutData[17]?.id,
                      "",
                      fetchAboutData
                    )
                  }
                  className="absolute hidden lg:inline-block right-0 bottom-0 text-base text-red-500"
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

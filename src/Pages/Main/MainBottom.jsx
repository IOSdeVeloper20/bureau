import React from "react";
import Submarine from "../../Assets/Images/submarine.jpeg";
import Krane from "../../Assets/Images/krane.jpeg";
import GreenWroker from "../../Assets/Images/green worker.jpeg";
import GreenKrane from "../../Assets/Images/green_crane.png";
import Etihad from "../../Assets/Images/etihad.jpeg";
import { FaRegEdit } from "react-icons/fa";
import { handleUpdating } from "../../Helpers/Updating";

const MainBottom = ({ mainData, user, fetchMainData }) => {
  return (
    <div className="bg-greyBackground rounded-t-4xl p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
        <div className="lg:col-span-1 flex flex-col items-center text-center">
          <img
            src={Submarine}
            alt="submarine"
            className="rounded-3xl sm:size-4/6 md:size-3/5 lg:size-full"
          />
          <h1 className="text-xl font-bold text-darkBlue pt-2">Organization</h1>
        </div>
        <div className="text-center lg:col-span-2 md:text-start ">
          <ol>
            <li className="relative">
              {mainData[9]?.text}
              {user && (
                <FaRegEdit
                  onClick={() =>
                    handleUpdating(
                      "mainData",
                      mainData[9]?.id,
                      "",
                      fetchMainData
                    )
                  }
                  className="absolute hidden lg:inline-block right-0 bottom-1 text-red-500"
                />
              )}
            </li>
            <li className="py-4 relative">
              {mainData[10]?.text}
              {user && (
                <FaRegEdit
                  onClick={() =>
                    handleUpdating(
                      "mainData",
                      mainData[10]?.id,
                      "",
                      fetchMainData
                    )
                  }
                  className="absolute hidden lg:inline-block right-0 bottom-1 text-red-500"
                />
              )}
            </li>
            <li className="relative">
              {mainData[11]?.text}
              {user && (
                <FaRegEdit
                  onClick={() =>
                    handleUpdating(
                      "mainData",
                      mainData[11]?.id,
                      "",
                      fetchMainData
                    )
                  }
                  className="absolute hidden lg:inline-block right-0 bottom-1 text-red-500"
                />
              )}
            </li>
          </ol>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-start items-start">
        <div className="text-center p-4">
          <div className="h-1/4">
            <img src={Krane} alt="krane" className="rounded-3xl" />
          </div>
          <h1 className="text-darkBlue text-xl font-bold pt-2">
            Office Facilities
          </h1>
          <p className="text-center lg:text-start relative">
            {mainData[12]?.text}
            {user && (
              <FaRegEdit
                onClick={() =>
                  handleUpdating(
                    "mainData",
                    mainData[12]?.id,
                    "",
                    fetchMainData
                  )
                }
                className="absolute hidden lg:inline-block top-0 right-0 text-red-500"
              />
            )}
          </p>
        </div>

        <div className="text-center p-4">
          <div className="h-1/4">
            <img src={GreenWroker} alt="Green Worker" className="rounded-3xl" />
          </div>
          <h1 className="text-darkBlue text-xl font-bold pt-2">
            Work Experience
          </h1>
          <p className="text-center lg:text-start relative">
            {mainData[13]?.text}
            {user && (
              <FaRegEdit
                onClick={() =>
                  handleUpdating(
                    "mainData",
                    mainData[13]?.id,
                    "",
                    fetchMainData
                  )
                }
                className="absolute hidden lg:inline-block top-0 right-0 text-red-500"
              />
            )}
          </p>
        </div>

        <div className="text-center p-4">
          <div className="h-1/4">
            <img src={GreenKrane} alt="Green Krane" className="rounded-3xl" />
          </div>
          <h1 className="text-darkBlue text-xl font-bold pt-4">
            Quality & HSE
          </h1>
          <p className="text-center lg:text-start relative">
            {mainData[14]?.text}
            {user && (
              <FaRegEdit
                onClick={() =>
                  handleUpdating(
                    "mainData",
                    mainData[14]?.id,
                    "",
                    fetchMainData
                  )
                }
                className="absolute hidden lg:inline-block top-0 right-0 text-red-500"
              />
            )}
          </p>
        </div>

        <div className="text-center p-4">
          <div className="h-40 lg:h-32 xl:h-40 flex justify-center">
            <img src={Etihad} alt="Etihad" className="rounded-3xl h-full" />
          </div>
          <h1 className="text-darkBlue text-xl font-bold pt-5">
            Over all highlights
          </h1>
          <p className="text-center lg:text-start relative">
            {mainData[15]?.text}
            {user && (
              <FaRegEdit
                onClick={() =>
                  handleUpdating(
                    "mainData",
                    mainData[15]?.id,
                    "",
                    fetchMainData
                  )
                }
                className="absolute hidden lg:inline-block top-0 right-0 text-red-500"
              />
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainBottom;

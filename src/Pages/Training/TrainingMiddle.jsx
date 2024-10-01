import React from "react";
import BlueWorker from "../../Assets/Images/blue_worker.jpeg";
import { FaRegEdit } from "react-icons/fa";
import { handleUpdating } from "../../Helpers/Updating";

const TrainingMiddle = ({ trainingData, user, fetchTrainingData }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {/* left text section */}
      <div className="w-full lg:w-1/2 text-sm lg:text-base">
        <div>
          <p className="relative">
            {trainingData[1]?.text}
            {user && (
              <FaRegEdit
                onClick={() =>
                  handleUpdating(
                    "trainingData",
                    trainingData[1]?.id,
                    "",
                    fetchTrainingData
                  )
                }
                className="absolute hidden lg:inline-block right-0 bottom-0 text-red-500"
              />
            )}
          </p>
          <p className="py-4 relative">
            {trainingData[2]?.text}
            {user && (
              <FaRegEdit
                onClick={() =>
                  handleUpdating(
                    "trainingData",
                    trainingData[2]?.id,
                    "",
                    fetchTrainingData
                  )
                }
                className="absolute hidden lg:inline-block right-0 top-5 text-red-500"
              />
            )}
          </p>
        </div>
        <div>
          <ul className="list-disc ps-4 font-normal lg:font-bold">
            <li className={"relative"}>
              {trainingData[3]?.text}
              {user && (
                <FaRegEdit
                  onClick={() =>
                    handleUpdating(
                      "trainingData",
                      trainingData[3]?.id,
                      "",
                      fetchTrainingData
                    )
                  }
                  className="absolute hidden lg:inline-block right-0 text-red-500"
                />
              )}
            </li>
            <li className={"relative"}>
              {trainingData[4]?.text}
              {user && (
                <FaRegEdit
                  onClick={() =>
                    handleUpdating(
                      "trainingData",
                      trainingData[4]?.id,
                      "",
                      fetchTrainingData
                    )
                  }
                  className="absolute hidden lg:inline-block right-0 text-red-500"
                />
              )}
            </li>
            <li className={"relative"}>
              {trainingData[5]?.text}
              {user && (
                <FaRegEdit
                  onClick={() =>
                    handleUpdating(
                      "trainingData",
                      trainingData[5]?.id,
                      "",
                      fetchTrainingData
                    )
                  }
                  className="absolute hidden lg:inline-block right-0 text-red-500"
                />
              )}
            </li>
            <li className={"relative"}>
              {trainingData[6]?.text}
              {user && (
                <FaRegEdit
                  onClick={() =>
                    handleUpdating(
                      "trainingData",
                      trainingData[6]?.id,
                      "",
                      fetchTrainingData
                    )
                  }
                  className="absolute hidden lg:inline-block right-0 text-red-500"
                />
              )}
            </li>
            <li className={"relative"}>
              {trainingData[7]?.text}
              {user && (
                <FaRegEdit
                  onClick={() =>
                    handleUpdating(
                      "trainingData",
                      trainingData[7]?.id,
                      "",
                      fetchTrainingData
                    )
                  }
                  className="absolute hidden lg:inline-block right-0 text-red-500"
                />
              )}
            </li>
            <li className={"relative"}>
              {trainingData[8]?.text}
              {user && (
                <FaRegEdit
                  onClick={() =>
                    handleUpdating(
                      "trainingData",
                      trainingData[8]?.id,
                      "",
                      fetchTrainingData
                    )
                  }
                  className="absolute hidden lg:inline-block right-0 text-red-500"
                />
              )}
            </li>
            <li className={"relative"}>
              {trainingData[9]?.text}
              {user && (
                <FaRegEdit
                  onClick={() =>
                    handleUpdating(
                      "trainingData",
                      trainingData[9]?.id,
                      "",
                      fetchTrainingData
                    )
                  }
                  className="absolute hidden lg:inline-block right-0 text-red-500"
                />
              )}
            </li>
          </ul>
        </div>
      </div>
      {/* image right section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <img
          src={BlueWorker}
          alt="Blue Worker"
          className="rounded-3xl h-full"
        />
      </div>
    </div>
  );
};

export default TrainingMiddle;

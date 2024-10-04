import React from "react";
import BlueWorker from "../../Assets/Images/blue_worker.jpeg";
import EditModal from "../../Components/EditModal";

const TrainingMiddle = ({ trainingData, user, fetchTrainingData }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {/* left text section */}
      <div className="w-full lg:w-1/2 text-sm lg:text-base">
        <div>
          <p className="relative">
            {trainingData[1]?.text}
            {user && (
              <EditModal
                fileName="trainingData"
                id={trainingData[1]?.id}
                refetchData={fetchTrainingData}
              />
            )}
          </p>
          <p className="py-4 relative">
            {trainingData[2]?.text}
            {user && (
              <EditModal
                fileName="trainingData"
                id={trainingData[2]?.id}
                refetchData={fetchTrainingData}
              />
            )}
          </p>
        </div>
        <div>
          <ul className="list-disc ps-4 font-normal lg:font-bold">
            <li className={"relative"}>
              {trainingData[3]?.text}
              {user && (
                <EditModal
                  fileName="trainingData"
                  id={trainingData[3]?.id}
                  refetchData={fetchTrainingData}
                />
              )}
            </li>
            <li className={"relative"}>
              {trainingData[4]?.text}
              {user && (
                <EditModal
                  fileName="trainingData"
                  id={trainingData[4]?.id}
                  refetchData={fetchTrainingData}
                />
              )}
            </li>
            <li className={"relative"}>
              {trainingData[5]?.text}
              {user && (
                <EditModal
                  fileName="trainingData"
                  id={trainingData[5]?.id}
                  refetchData={fetchTrainingData}
                />
              )}
            </li>
            <li className={"relative"}>
              {trainingData[6]?.text}
              {user && (
                <EditModal
                  fileName="trainingData"
                  id={trainingData[6]?.id}
                  refetchData={fetchTrainingData}
                />
              )}
            </li>
            <li className={"relative"}>
              {trainingData[7]?.text}
              {user && (
                <EditModal
                  fileName="trainingData"
                  id={trainingData[7]?.id}
                  refetchData={fetchTrainingData}
                />
              )}
            </li>
            <li className={"relative"}>
              {trainingData[8]?.text}
              {user && (
                <EditModal
                  fileName="trainingData"
                  id={trainingData[8]?.id}
                  refetchData={fetchTrainingData}
                />
              )}
            </li>
            <li className={"relative"}>
              {trainingData[9]?.text}
              {user && (
                <EditModal
                  fileName="trainingData"
                  id={trainingData[9]?.id}
                  refetchData={fetchTrainingData}
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
          loading="lazy"
          alt="Blue Worker"
          className="rounded-3xl h-full"
        />
      </div>
    </div>
  );
};

export default TrainingMiddle;

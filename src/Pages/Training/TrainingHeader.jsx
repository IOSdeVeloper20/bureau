import React from "react";
import Scaffolding from "../../Assets/Images/scaffolding.jpeg";
import EditModal from "../../Components/EditModal";

const TrainingTop = ({ trainingData, user, fetchTrainingData }) => {
  return (
    <div className="bg-greyBackground rounded-4xl flex flex-col justify-center items-center">
      <div className="w-11/12 flex flex-col justify-center items-center">
        <div className="w-full relative">
          <img
            src={Scaffolding}
            alt="Scaffolding"
            className="rounded-3xl lg:h-screen w-full"
          />
          <div className="absolute top-6 right-4 lg:right-10">
            <h1 className="text-darkBlue text-xs lg:text-4xl font-bold">
              Training
              <br /> Services
            </h1>
          </div>
        </div>

        <div className="bg-darkGrey rounded-3xl p-4 gap-3 w-11/12">
          <p className="col-span-12 text-sm lg:text-base relative">
            {trainingData[0]?.text}
            {user && (
              <EditModal
                fileName="trainingData"
                id={trainingData[0]?.id}
                refetchData={fetchTrainingData}
              />
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrainingTop;

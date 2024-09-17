import React from "react";
import Scaffolding from "../../Assets/Images/scaffolding.jpeg";

const TrainingTop = () => {
  return (
    <div className="bg-greyBackground rounded-4xl flex flex-col justify-center items-center">
      <div className="w-11/12 flex flex-col justify-center items-center">
        <div className="w-full">
          <img src={Scaffolding} alt="Scaffolding" className="rounded-3xl lg:h-screen w-full" />
        </div>

        <div className="bg-darkGrey rounded-3xl p-4 gap-3 w-11/12">
          <p className="col-span-12 text-sm lg:text-base">
            Abu Dhabi Public Health Centre (ADPHC) & The Abu Dhabi Centre for
            Technical and Vocational Education and Training (ACTVET) requires
            all employers to provide suitable and relevant training within the
            work place to ensure that employees are able to work safely at all
            times.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrainingTop;

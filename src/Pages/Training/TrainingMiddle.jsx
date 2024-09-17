import React from "react";
import BlueWorker from "../../Assets/Images/blue_worker.jpeg";

const TrainingMiddle = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {/* left text section */}
      <div className="w-full lg:w-1/2 text-sm lg:text-base">
        <div>
          <p>
            Abu Dhabi Public Health Centre (ADPHC) & The Abu Dhabi Centre for
            Technical and Vocational Education and Training (ACTVET) requires
            all employers to provide suitable and relevant training within the
            work place to ensure that employees are able to work safely at all
            times.
          </p>
          <p className="py-4">
            Our training division offers a wide range of accredited training
            courses covering the following categories:
          </p>
        </div>
        <div>
          <ul className="list-disc ps-4 font-normal lg:font-bold">
            <li>General Health and Safety</li>
            <li>Lifting Equipment and Lifting Operations</li>
            <li>Working at Height</li>
            <li>Forklift and Lift Trucks</li>
            <li>Plant and Machinery Operations</li>
            <li>Access Equipment and MEWP’s</li>
            <li>Scaffolding Awareness & Competent Person</li>
          </ul>
        </div>
      </div>
      {/* image right section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <img src={BlueWorker} alt="Blue Worker" className="rounded-3xl h-full" />
      </div>
    </div>
  );
};

export default TrainingMiddle;

import React from "react";
import Teacher from "../../../Assets/Images/teacher.jpeg";

const TrainingBottom = () => {
  return (
    <div className="bg-greyBackground rounded-t-4xl p-4 flex justify-center">
      <div className="lg:w-11/12 flex justify-center lg:h-80">
        <img
          src={Teacher}
          loading="lazy"
          alt="Teacher"
          className="rounded-4xl w-full object-cover"
        />
      </div>
    </div>
  );
};

export default TrainingBottom;

import React from "react";
import PipeYard from "../../../Assets/Images/pipe_yard.jpeg";

const InspectionsBottom = () => {
  return (
    <div className="bg-greyBackground rounded-t-4xl p-4 flex justify-center">
      <div className="lg:w-11/12 flex justify-center lg:h-80">
        <img
          src={PipeYard}
          loading="lazy"
          alt="Pipeyard"
          className="rounded-4xl w-full object-cover"
        />
      </div>
    </div>
  );
};

export default InspectionsBottom;

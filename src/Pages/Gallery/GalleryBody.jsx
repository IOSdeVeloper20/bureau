import React from "react";
import Ton from "../../Assets/Images/500ton.jpeg";
import BoxingCranne from "../../Assets/Images/boxing_crane.jpeg";
import Factory from "../../Assets/Images/factory.jpeg";
import Ship from "../../Assets/Images/ship.jpeg";
import DockingYard from "../../Assets/Images/docking_yard.jpeg";

const GalleryBody = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4">
        <div className="text-center">
          <img
            src={BoxingCranne}
            loading="lazy"
            alt="Ship"
            className="rounded-3xl aspect-square"
          />
          <h1 className="text-xs pt-4 md:text-base md:font-bold">
            ADNOC Vessel mid ship crane load testing
          </h1>
        </div>
        <div className="text-center">
          <img
            src={Ton}
            loading="lazy"
            alt="Docking Yard"
            className="rounded-3xl aspect-square"
          />
          <h1 className="text-xs pt-4 md:text-base md:font-bold">
            Proof load testing of lifting frame 500 ton{" "}
          </h1>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-4 py-6">
        <div className="lg:h-96 lg:w-10/12">
          <img
            src={Factory}
            loading="lazy"
            alt="Factory"
            className="w-full h-full rounded-3xl"
          />
        </div>
        <h1 className="text-xs md:text-base md:font-bold">
          Arena trusses load tested in MENA region
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4">
        <div className="text-center">
          <img
            src={Ship}
            loading="lazy"
            alt="Ship"
            className="rounded-3xl aspect-square"
          />
          <h1 className="text-xs pt-4 md:text-base md:font-bold">
            ADNOC Vessel embarkation ladder load testing
          </h1>
        </div>
        <div className="text-center">
          <img
            src={DockingYard}
            loading="lazy"
            alt="Docking Yard"
            className="rounded-3xl aspect-square"
          />
          <h1 className="text-xs pt-4 md:text-base md:font-bold">
            Air craft docking platform load testing
          </h1>
        </div>
      </div>
    </div>
  );
};

export default GalleryBody;

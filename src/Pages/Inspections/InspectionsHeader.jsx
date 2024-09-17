import React from "react";
import GreenKrane from "../../Assets/Images/green_crane.png";

const InspectionsHeader = () => {
  return (
    <div className="bg-greyBackground rounded-4xl flex flex-col justify-center items-center">
      <div className="w-11/12 flex flex-col justify-center items-center">
        <div>
          <img src={GreenKrane} alt="yellow gas" className="rounded-3xl" />
        </div>

        <div className="bg-darkGrey rounded-3xl p-4 gap-3 w-11/12">
          <p className="col-span-12 text-sm lg:text-base">
            Arabian Bureau Of Services established in 1993 and providing
            Engineering Testing, Inspection, Certification of Lifting Equipment,
            and Training Services. Our objective is to keep our customers both
            safe and compliant with the relevant legislation and standards.
            Arabian Bureau Of Services are experts in both keeping
            customer-owned equipment and people both safe and compliant within
            the workplace. Equipment in the workplace includes lifting
            accessories and equipment, plant and access equipment, pressure
            systems, working platforms, fall protections and local exhaust
            ventilation systems. Our Electrical Testing division provides
            Electrical Testing, Fixed Wire Testing, and other electrical testing
            services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InspectionsHeader;

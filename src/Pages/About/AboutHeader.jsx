import React from "react";
import Shipment from "../../Assets/Images/shipment.jpeg";
import Saleh from "../../Assets/Images/saleh.jpeg";
import Abosad from "../../Assets/Images/abosad.png";
import { FaBookBookmark } from "react-icons/fa6";

const AboutHeader = () => {
  return (
    <div className="grid grid-rows-3 bg-greyBackground rounded-3xl p-4 gap-12">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
        <div className="lg:flex justify-center items-center lg:w-5/6">
          <div className="bg-lightBlue rounded-2xl lg:w-5/6 md:rounded-3xl p-4 flex flex-col items-center text-center lg:gap-4">
            <FaBookBookmark className="text-darkBlue size-7 md:size-10" />
            <h1 className="text-darkBlue text-base md:text-lg font-bold">
              Company Profile
            </h1>
          </div>
        </div>
        <div className="col-span-2">
          <p>
            Quality & sustainable life style is essential part of our life. To
            Ensure the same perfection & unique decision are very important. The
            current industry is required the quality & certification on
            everything which ever we dealt with it. With the above idea Arabian
            Bureau of Services established on 1993 to ensure the quality &
            impartial inspection as well as the effective training services for
            its customer. The team is well organized to ensure its services
            providing to the customer effectively & most efficiently. We
            registered with all the major oil companies which is providing the
            services to the nation. We still looking forward to register with
            international organization to ensure the compliance of the
            requirements to the international level.
          </p>
        </div>
        <div className="col-span-2 flex justify-center">
          <img
            src={Shipment}
            alt="Shipment"
            className="rounded-3xl md:w-1/2 lg:w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2  lg:grid-cols-3">
        <div className="flex justify-center">
          <img
            src={Saleh}
            alt="Saleh"
            className="lg:h-full lg:w-4/6"
          />
        </div>

        <div className="flex justify-center items-center md:items-start gap-4">
          <FaBookBookmark className="text-darkBlue size-7 md:size-10 lg:size-16" />
          <p className="text-2xl lg:text-3xl">
            Chairman's <br /> Message
          </p>
        </div>

        <p className="ps-2 md:p-0">
          Under his excellent leadership, ABOS makes major breakthrough in the
          field of safety inspection and testing undertaking many prestigious
          jobs with a consistent professional approach. He always insists on
          high quality services and pursues all possible ways to ensure customer
          satisfaction without compromising on safety and quality.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-2  lg:grid-cols-3">
        <div className="flex justify-center">
          <img
            src={Abosad}
            alt="Abosad"
            className="lg:h-full lg:w-4/6"
          />
        </div>

        <div className="flex justify-center items-center md:items-start gap-4">
          <FaBookBookmark className="text-darkBlue size-7 md:size-10 lg:size-16" />
          <p className="text-2xl lg:text-3xl">Managing <br /> Director’s <br /> Message</p>
        </div>

        <p className="ps-2 md:p-0">
          Everyone want to live safely without any harm in their life by means
          of their or others actions. We ABoS in the field of inspection &
          training certification body for oil & gas as well as construction
          industries to provide better judgments’ to ensure the safety. The core
          team of ABoS has essential knowledge in the field of inspection for
          lifting equipments as per the local & international standards. Since
          we had the professional team which is having hands on experience &
          knowledge in the field of lifting equipment inspection services. We
          have the confident that our team is equipped with such capabilities
          and serve the nation (UAE) to ensure zero harm to the environment &
          people of the nation.
        </p>
      </div>
    </div>
  );
};

export default AboutHeader;

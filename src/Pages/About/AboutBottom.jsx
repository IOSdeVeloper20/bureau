import React from "react";
import KraneSeaPort from "../../Assets/Images/crane-seaport.png";
import { BiSolidLockOpenAlt } from "react-icons/bi";

const AboutBottom = () => {
  return (
    <div className="bg-greyBackground flex justify-center rounded-t-4xl p-4">
      <div className="w-11/12 flex flex-col gap-4">
        <div className="flex grid-cols-1 gap-4 items-center">
          <BiSolidLockOpenAlt className="size-9 lg:size-10"/>
          <h1 className="text-lg font-extrabold lg:text-2xl lg:font-bold">Obligations of Confidentiality</h1>
        </div>
  
        <div className="grid grid-cols-1 lg:mt-4">
          <strong className="w-full lg:w-9/12">
            In consideration of Confidential Information being made available to
            the Arabian Bureau of Services by our clients and/or its
            agents,Arabian Bureau of Services agrees and undertakes that it shall:
          </strong>
        </div>
  
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <ul className="list-disc ps-6 col-span-1">
            <li>
              Only use the Confidential Information in relation to work pertaining
              to the Services.
            </li>
            <li>
              Not without the client’s prior specific written approval, divulge,
              disclose or reveal the Confidential Information to any third party.
            </li>
            <li>
              Treat the Confidential Information as strictly confidential and with
              no less than the same care as the Client uses to protect its own
              Confidential Information.
            </li>
            <li>
              Not make copies in any form of any documents containing the
              Confidential Information, unless essential to the performance of the
              Services.
            </li>
            <li>
              Shall not advertise or publicly announce, communicate or circulate
              the existence of any agreement or the fact that we are providing
              services to any client, without the prior written consent of the
              client.
            </li>
            <li>
              <strong>ABOS</strong> shall inform the client in advance of any
              information. <br />
              <strong>ABOS</strong> intends to place it in public domain. Except
              for information that the client makes publicly available or when
              agreed between ABOS and the clients.
            </li>
            <li>
              When the inspection body is required by law or authorized by
              contractual commitments to release confidential information, the
              client or individual concerned shall, unless prohibited by law, be
              notified of the information provided.
            </li>
            <li>
              Information about the client obtained from sources other than the
              client (e.g. complainant, regulators) shall be treated as
              confidential.
            </li>
          </ul>
          <img src={KraneSeaPort} alt="Krane SeaPort" className="col-span-1" />
        </div>
      </div>
    </div>
  );
};

export default AboutBottom;

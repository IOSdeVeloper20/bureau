import React from "react";
import { BsGeoAlt } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOpenOutline, IoMailOutline } from "react-icons/io5";

const ContactUsBody = ({ contactusData, lang }) => {
  return (
    <div className="bg-greyBackground rounded-4xl p-4">
      <div className="lg:p-4 flex flex-col justify-center items-center">
        <div className="text-darkBlue text-sm lg:text-xl font-semibold lg:p-4 w-full lg:w-10/12">
          <h1 className="text-xl lg:text-3xl py-4">
            {lang === "en" ? contactusData[0]?.text : contactusData[0]?.arText}
          </h1>
          <ul>
            <li className="flex items-center gap-2">
              <BsGeoAlt />
              <p>
                {lang === "en"
                  ? contactusData[1]?.text
                  : contactusData[1]?.arText}
              </p>
            </li>
            <li className="flex items-center gap-2">
              <IoMailOpenOutline />
              <p>{contactusData[2]?.text}</p>
            </li>
            <li className="flex items-center gap-2">
              <FiPhoneCall />
              <p>
                <a href={`tel:${contactusData[3]?.text}`}>
                  Tel:{contactusData[3]?.text}
                </a>
              </p>
            </li>
            <li className="flex items-center gap-2">
              <IoMailOutline />
              <p>
                <a href={`mailto:${contactusData[4]?.text}`}>
                  Email: {contactusData[4]?.text}
                </a>
              </p>
            </li>
          </ul>
        </div>

        <div className="flex justify-center items-center py-2 w-full lg:w-7/12 md:h-96">
          <iframe
            title="firstMap"
            src={`${contactusData[5]?.text}`}
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className="text-darkBlue text-sm lg:text-xl font-semibold lg:p-4 w-full lg:w-10/12">
          <h1 className="text-xl lg:text-3xl py-4">
            {lang === "en" ? contactusData[6]?.text : contactusData[6]?.arText}
          </h1>
          <ul>
            <li className="flex items-center gap-2">
              <BsGeoAlt />
              <p>
                {lang === "en"
                  ? contactusData[7]?.text
                  : contactusData[7]?.arText}
              </p>
            </li>
            <li className="flex items-center gap-2">
              <IoMailOpenOutline />
              <p>{contactusData[8]?.text}</p>
            </li>
            <li className="flex items-center gap-2">
              <FiPhoneCall />
              <p>
                <a href={`tel:${contactusData[9]?.text}`}>
                  Tel: {contactusData[9]?.text}
                </a>
              </p>
            </li>
            <li className="flex items-center gap-2">
              <IoMailOutline />
              <p>
                <a href={`mailto:${contactusData[10]?.text}`}>
                  Email: {contactusData[10]?.text}
                </a>
              </p>
            </li>
          </ul>
        </div>

        <div className="flex justify-center items-center py-2 w-full lg:w-7/12  md:h-96">
          <iframe
            title="secondMap"
            className="w-full h-full"
            src={contactusData[11]?.text}
            style={{ style: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUsBody;

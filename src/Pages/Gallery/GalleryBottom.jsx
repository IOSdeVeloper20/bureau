import React from "react";
import { BsGeoAlt } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOpenOutline, IoMailOutline } from "react-icons/io5";

const GalleryBottom = () => {
  return (
    <div className="bg-greyBackground rounded-t-4xl p-4 flex justify-center">
      <div className="w-full md:w-8/12 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="md:text-lg lg:text-3xl font-bold">
              For Testing <br className="hidden lg:inline-block"/> Please Contact us
            </h1>
          </div>
          <hr className="hidden lg:inline-block w-px h-24 bg-darkBlue rotate-0" />
          
          <div>
            <ul className="text-sm lg:text-base lg:font-bold">
              <li className="flex items-center gap-2">
                <BsGeoAlt />
                <p>Arabian Bureau of Services</p>
              </li>
              <li className="flex items-center gap-2">
                <IoMailOpenOutline />
                <p>P.O.Box 47133 - Abu Dhabi</p>
              </li>
              <li className="flex items-center gap-2">
                <FiPhoneCall />
                <p>
                  <a href="tel:+97125511520">Tel: +971 2 6674166</a>
                </p>
              </li>
              <li className="flex items-center gap-2">
                <IoMailOutline />
                <p>
                  <a href="mailto:abosad@emirates.net.ae">
                    Email: abosad@emirates.net.ae
                  </a>
                </p>
              </li>
            </ul>
          </div>
      </div>
    </div>
  );
};

export default GalleryBottom;

import React from "react";
import whiteLogo from "../../Assets/Images/white_logo.png";
import NavLinks from "../Navlinks";
import { BsGeoAlt } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import Social from "../Social";
import {
  IoMailOpenOutline,
  IoMailOutline,
  IoArrowUpCircleSharp,
} from "react-icons/io5";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-main text-white w-full h-full flex flex-col items-center justify-center p-4">
      <button className="flex justify-end w-11/12 pe-1" onClick={scrollToTop}>
        <IoArrowUpCircleSharp className="size-8" />
      </button>

      <div className="hidden w-11/12 justify-between items-center p-2 lg:flex">
        <NavLinks
          linkActive={"text-whiteTitle"}
          linkInActive={"text-lightBlue"}
        />
      </div>

      <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between w-11/12 items-center py-4">
        <div className="flex justify-center w-full md:justify-start md:w-1/3 lg:w-1/4">
          <img
            src={whiteLogo}
            alt="Logo Icon"
            loading="lazy"
            className=" items-center size-2/4 md:size-1/2"
          />
        </div>

        <div className="flex justify-center w-full text-sm md:text-base md:justify-start md:w-1/2 py-2">
          <ul>
            <li className="flex items-center gap-2">
              <BsGeoAlt />
              <p>Arabian Bureau of Services</p>
            </li>
            <li className="flex items-center gap-2">
              <IoMailOpenOutline />
              <p>P.O.Box 47133 - Musaffah</p>
            </li>
            <li className="flex items-center gap-2">
              <FiPhoneCall />
              <p>
                <a href="tel:+97125511520">Tel: +971 2 5511520</a>
              </p>
            </li>
            <li className="flex items-center gap-2">
              <IoMailOutline />
              <p>
                <a href="mailto:abos@abosad.com">Email: abos@abosad.com</a>
              </p>
            </li>
          </ul>
        </div>

        <div className="flex w-full justify-center md:w-1/4 md:justify-end items-baseline">
          <Social hoverColor={"hover:text-lightBlue"} />
        </div>
      </div>
      <div className="text-xs md:text-sm text-center p-2 text-slate-400">
        <p>&copy; Copyright Rimel 2024 All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;

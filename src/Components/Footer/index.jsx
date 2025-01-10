import React, { useState, useEffect, useContext } from "react";
import whiteLogo from "../../Assets/Images/white_logo.png";
import NavLinks from "../Navlinks";
import { BsGeoAlt } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import Social from "../Social";
import { fetchData } from "../../Helpers/Networking";
import { LangContext } from "../../Contexts/LangContext";
import {
  IoMailOpenOutline,
  IoMailOutline,
  IoArrowUpCircleSharp,
} from "react-icons/io5";

const Footer = () => {
  const [footerData, setFooterData] = useState([]);
  const { langState } = useContext(LangContext);

  const fetchFooterData = async () => {
    const footerUrl = process.env.REACT_APP_FOOTER_BASE_URL;
    const footerResponse = await fetchData(footerUrl);
    setFooterData(footerResponse);
  };

  useEffect(() => {
    fetchFooterData();
  }, []);

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
              <p>
                {langState === "en"
                  ? footerData[0]?.text
                  : footerData[0]?.arText}
              </p>
            </li>
            <li className="flex items-center gap-2">
              <IoMailOpenOutline />
              <p>{footerData[1]?.text}</p>
            </li>
            <li className="flex items-center gap-2">
              <FiPhoneCall />
              <p>
                <a href={`tel:${footerData[2]?.text}`}>
                  Tel: {footerData[2]?.text}
                </a>
              </p>
            </li>
            <li className="flex items-center gap-2">
              <IoMailOutline />
              <p>
                <a href={`mailto:${footerData[3]?.text}`}>
                  Email: {footerData[3]?.text}
                </a>
              </p>
            </li>
          </ul>
        </div>

        <div className="flex w-full justify-center md:w-1/4 md:justify-end items-baseline">
          <Social hoverColor={"hover:text-lightBlue"} />
        </div>
      </div>
      <div className="text-xs md:text-sm text-center p-2 text-slate-400">
        {langState === "en" ? (
          <p>&copy; Copyright Rimel 2024 All right reserved</p>
        ) : (
          <p>&copy; جميع الحقوق محفوظة لشركة ريميل 2024</p>
        )}
      </div>
    </div>
  );
};

export default Footer;

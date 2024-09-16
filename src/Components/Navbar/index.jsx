import React, { useEffect, useState } from "react";
import Logo from "../../Assets/Images/logo.jpeg";
import { Link } from "react-router-dom";
import NavLinks from "../Navlinks";
import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";
import Social from "../Social";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="w-full flex justify-between flex-wrap text-sm">
        <div className="w-1/2 flex items-center md:w-1/4">
          <Link to="/">
            <img src={Logo} alt="Logo" className="p-2" />
          </Link>
        </div>
  
        <div className="w-3/4 justify-evenly items-center hidden xl:flex">
          <NavLinks
            linkActive={"text-activeLink font-bold"}
            linkInActive={"text-darkBlue"}
          />
        </div>
  
        <div
          className="flex items-center pe-4 text-xl xl:hidden"
          onClick={toggleNavbar}>
          {isOpen ? <IoCloseSharp /> : <IoMenuSharp />}
        </div>
  
        {isOpen ? (
          <div className="w-full flex flex-col items-center gap-2">
            <NavLinks />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="flex text-lightBlue justify-end items-center pe-4 lg:pe-12 pb-4">
        <Social hoverColor={"hover:text-slate-400"}/>
      </div>
    </div>
  );
};

export default Navbar;

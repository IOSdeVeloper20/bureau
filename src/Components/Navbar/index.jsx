import React, { useEffect, useState, useContext } from "react";
import Logo from "../../Assets/Images/logo.jpeg";
import { Link } from "react-router-dom";
import NavLinks from "../Navlinks";
import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";
import LoginButton from "../LoginButton";
import { UserContext } from "../../Contexts/UserContext";
import DashboardButton from "../DashboardButton";
import LangButton from "../LangButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { userState } = useContext(UserContext);

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
      <div className="w-full flex flex-wrap justify-between text-sm md:text-base py-2">
        <div className=" w-1/2 flex items-center md:w-2/5 xl:w-1/6">
          <Link to="/">
            <img src={Logo} loading="lazy" alt="Logo" className="p-2" />
          </Link>
        </div>

        <div className=" w-4/6 justify-evenly items-center hidden xl:flex">
          <NavLinks linkActive={"font-black"} linkInActive={"text-darkBlue"} />
          {/* {userState?.isAuthenticated && <LogoutButton className="text-red-400 flex items-center font-semibold" />} */}
        </div>

        <div
          className="flex items-center pe-4 text-xl xl:hidden"
          onClick={toggleNavbar}>
          {isOpen ? <IoCloseSharp /> : <IoMenuSharp />}
        </div>

        {isOpen ? (
          <div className="w-full flex flex-col items-center gap-2">
            <NavLinks linkActive={"font-bold"} />
            {/* {userState?.isAuthenticated && <LogoutButton className="text-red-400 flex items-center font-semibold"/>} */}
            {!userState?.isAuthenticated && <LoginButton />}
            {userState?.isAuthenticated && <DashboardButton />}
            <LangButton />
          </div>
        ) : (
          ""
        )}

        <div className=" w-1/6 hidden xl:flex text-lightBlue justify-evenly items-center px-1.5">
          <LangButton />
          {!userState?.isAuthenticated && <LoginButton />}
          {userState?.isAuthenticated && <DashboardButton />}
          {/* <Social hoverColor={"hover:text-slate-400"} /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";
import { UserContext } from "../../Contexts/UserContext";

const NavLinks = ({ linkActive, linkInActive }) => {
  const { userState, setUserState } = useContext(UserContext);

  const handleSignOut = () => {
    setUserState(false);
    localStorage.removeItem("authToken");
  };

  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${linkActive}` : `${linkInActive}`
        }>
        Company Profile
      </NavLink>

      <NavLink
        to="/About"
        className={({ isActive }) =>
          isActive ? `${linkActive}` : `${linkInActive}`
        }>
        About
      </NavLink>

      <NavLink
        to="/Inspections"
        className={({ isActive }) =>
          isActive ? `${linkActive}` : `${linkInActive}`
        }>
        Inspections
      </NavLink>

      <NavLink
        to="/Training"
        className={({ isActive }) =>
          isActive ? `${linkActive}` : `${linkInActive}`
        }>
        Training
      </NavLink>

      <NavLink
        to="/Approvals"
        className={({ isActive }) =>
          isActive ? `${linkActive}` : `${linkInActive}`
        }>
        Approvals
      </NavLink>

      <NavLink
        to="/Gallery"
        className={({ isActive }) =>
          isActive ? `${linkActive}` : `${linkInActive}`
        }>
        Gallery
      </NavLink>

      <NavLink
        to="/ContactUs"
        className={({ isActive }) =>
          isActive ? `${linkActive}` : `${linkInActive}`
        }>
        Contact Us
      </NavLink>

      {userState && (
        <button
          onClick={handleSignOut}
          className="text-red-400 flex items-center font-semibold">
          <IoMdLogOut />
          Log out
        </button>
      )}
    </>
  );
};

export default NavLinks;

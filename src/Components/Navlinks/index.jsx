import React from "react";
import { NavLink } from "react-router-dom";
//            isActive ? "text-activeLink font-bold" : "text-darkBlue"          }>

const NavLinks = ({ linkActive, linkInActive }) => {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${linkActive}` : `${linkInActive}`
        } >
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
    </>
  );
};

export default NavLinks;

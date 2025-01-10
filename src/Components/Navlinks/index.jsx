import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LangContext } from "../../Contexts/LangContext";

const NavLinks = ({ linkActive, linkInActive }) => {
  const { langState } = useContext(LangContext);

  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${linkActive}` : `${linkInActive}`
        }>
        {langState === "en" ? "Company Profile" : "نبذة عن الشركة"}
      </NavLink>

      <NavLink
        to="/About"
        className={({ isActive }) =>
          isActive ? `${linkActive}` : `${linkInActive}`
        }>
        {langState === "en" ? "About" : "عن الشركة"}
      </NavLink>

      <NavLink
        to="/Inspections"
        className={({ isActive }) =>
          isActive ? `${linkActive}` : `${linkInActive}`
        }>
        {langState === "en" ? "Inspections" : "الفحوصات"}
      </NavLink>

      <NavLink
        to="/Training"
        className={({ isActive }) =>
          isActive ? `${linkActive}` : `${linkInActive}`
        }>
        {langState === "en" ? "Training" : "التدريب"}
      </NavLink>

      <NavLink
        to="/Approvals"
        className={({ isActive }) =>
          isActive ? `${linkActive}` : `${linkInActive}`
        }>
        {langState === "en" ? "Approvals" : "الموافقات"}
      </NavLink>

      <NavLink
        to="/Gallery"
        className={({ isActive }) =>
          isActive ? `${linkActive}` : `${linkInActive}`
        }>
        {langState === "en" ? "Gallery" : "المعرض"}
      </NavLink>

      <NavLink
        to="/ContactUs"
        className={({ isActive }) =>
          isActive ? `${linkActive}` : `${linkInActive}`
        }>
        {langState === "en" ? "Contact Us" : "اتصل بنا"}
      </NavLink>
    </>
  );
};

export default NavLinks;

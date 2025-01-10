import React from "react";
import { Link } from "react-router-dom";

const SidebarItem = ({ icon, text, active, to }) => {
  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium cursor-pointer text-sm transition-colors ${
        active ? "bg-cyan-200 text-darkBlue font-black rounded-md" : "hover:bg-cyan-50 text-gray-600"
      }`}>
      <Link to={to} className="flex items-center w-full">
        {icon}
        <span className="w-52 ml-3">{text}</span>
      </Link>
    </li>
  );
};

export default SidebarItem;

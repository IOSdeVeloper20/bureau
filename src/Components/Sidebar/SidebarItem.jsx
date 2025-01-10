import React from "react";
import { Link } from "react-router-dom";

const SidebarItem = ({ icon, text, active, to }) => {
  return (
    <li>
      <Link
        to={to}
        className={`flex items-center p-3 rounded-lg transition-colors duration-200
          ${active 
            ? "bg-cyan-200 text-darkBlue font-black rounded-md" 
            : "hover:bg-cyan-50 text-gray-600"
          }`}
      >
        <div className="flex-shrink-0">
          {icon}
        </div>
        <span className="ml-3 hidden md:block">{text}</span>
      </Link>
    </li>
  );
};


export default SidebarItem;

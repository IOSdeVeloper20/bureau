import React from "react";
import logo from "../../Assets/Images/logo.jpeg";
import { GrLanguage } from "react-icons/gr";
import { TbLogout2 } from "react-icons/tb";
import { UseLanguage } from "../../Hooks/UseLanguage";
import { UseLogout } from "../../Hooks/UseLogout";

const SidebarContainer = ({ children }) => {
  const { language, toggleLanguage } = UseLanguage();
  const logout = UseLogout();

  return (
    <aside className="h-screen transition-all duration-300 ease-in-out w-14 md:w-64">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        {/* Logo section */}
        <div className="p-4 border-b border-gray-200 hidden md:block">
          <img src={logo} alt="Logo" className="w-full" />
        </div>

        <ul className="flex-grow p-2 space-y-2">{children}</ul>

        <div className="border-t border-gray-200 p-2">
          <button
            onClick={toggleLanguage}
            className="flex items-center w-full p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200">
            <GrLanguage className="w-4 h-4" />
            <span className="ml-3 hidden md:block">
              {language === "en" ? "العربية" : "English"}
            </span>
          </button>

          <button
            onClick={logout}
            className="flex items-center w-full p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200 mt-2">
            <TbLogout2 className="w-4 h-4" />
            <span className="ml-3 hidden md:block">
              {language === "en" ? "Logout" : "تسجيل الخروج"}
            </span>
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default SidebarContainer;

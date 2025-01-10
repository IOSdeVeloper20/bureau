import React from "react";
import logo from "../../Assets/Images/logo.jpeg";
import LogoutButton from "../LogoutButton";
import LangButton from "../LangButton";

const SidebarContainer = ({ children }) => {
  return (
    <aside className="h-screen w-1/6">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <img src={logo} alt="white logo" className="pt-3 pb-1 px-1" />

        <hr />

        <ul className="flex-grow">{children}</ul>

        <hr />

        <div className="flex flex-col justify-center items-center p-4 gap-2">
          <LangButton />

          <LogoutButton className="text-red-400 flex items-center font-semibold gap-2" />
        </div>
      </nav>
    </aside>
  );
};

export default SidebarContainer;

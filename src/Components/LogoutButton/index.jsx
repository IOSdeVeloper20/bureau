import React, { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { LangContext } from "../../Contexts/LangContext";
import { TbLogout2 } from "react-icons/tb";
import { UseLogout } from "../../Hooks/UseLogout";

const LogoutButton = ({ className }) => {
  const { setUserState } = useContext(UserContext);
  const navigate = useNavigate();
  const { langState } = useContext(LangContext);
  const logout = UseLogout();

  // const handleSignOut = () => {
  //   setUserState(false);
  //   sessionStorage.removeItem("authToken");
  //   navigate("/");
  // };

  return (
    <button onClick={logout} className={`${className}`}>
      <TbLogout2 />
      {langState === "en" ? "Log out" : "تسجيل الخروج"}
    </button>
  );
};
//"text-red-400 flex items-center font-semibold"
export default LogoutButton;

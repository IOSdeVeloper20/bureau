import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LangContext } from "../../Contexts/LangContext";
import { TbLogin2 } from "react-icons/tb";

const LoginButton = () => {
  const navigate = useNavigate();
  const { langState } = useContext(LangContext);

  const loginButtonPressed = () => {
    navigate("/Login");
  };

  return (
    <button
      className="flex items-center justify-center gap-1 text-white font-bold text-sm rounded-md p-1 border-2 border-lightBlue bg-lightBlue"
      onClick={loginButtonPressed}>
      <TbLogin2 className="size-5" />
      {langState === "en" ? "Login" : "تسجيل الدخول"}
    </button>
  );
};

export default LoginButton;

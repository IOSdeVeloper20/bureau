import React from "react";
import { useNavigate } from "react-router-dom";
import { TbHomeEdit } from "react-icons/tb";

const DashboardButton = () => {
  const navigate = useNavigate();
  const dashButtonPressed = () => {
    navigate("/Admin");
  };
  return (
    <button
      className="flex items-center justify-center gap-1 text-white font-bold text-sm rounded-md p-1 bg-lightBlue border-2 border-lightBlue"
      onClick={dashButtonPressed}>
      <TbHomeEdit />
      Dashboard
    </button>
  );
};

export default DashboardButton;

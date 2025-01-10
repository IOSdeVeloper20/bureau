import React, { useContext } from "react";
import { LangContext } from "../../Contexts/LangContext";
import { MdOutlineLanguage } from "react-icons/md";

const LangButton = () => {
  const { langState, setLangState } = useContext(LangContext);

  const handleLang = () => {
    setLangState((prevLang) => (prevLang === "en" ? "ar" : "en"));
  };

  return (
    <button
      onClick={handleLang}
      className="flex justify-center items-center gap-2 rounded-md border-2 border-lightBlue text-sm text-lighBlue font-bold pe-2 p-1">
      <MdOutlineLanguage />
      {langState}
    </button>
  );
};

export default LangButton;

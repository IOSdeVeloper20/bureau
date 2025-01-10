import React, { useContext } from "react";
// import { LangContext } from "../../Contexts/LangContext";
import { MdOutlineLanguage } from "react-icons/md";
import { UseLanguage } from "../../Hooks/UseLanguage";

const LangButton = () => {
  // const { langState, setLangState } = useContext(LangContext);
  const { language, toggleLanguage } = UseLanguage();

  // const handleLang = () => {
  //   setLangState((prevLang) => (prevLang === "en" ? "ar" : "en"));
  // };

  return (
    <button
      onClick={toggleLanguage}
      className="flex justify-center items-center gap-2 rounded-md border-2 border-lightBlue text-sm text-lighBlue font-bold pe-2 p-1">
      <MdOutlineLanguage />
      {language}
    </button>
  );
};

export default LangButton;

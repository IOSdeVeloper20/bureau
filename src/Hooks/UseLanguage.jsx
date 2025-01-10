import { useContext } from "react";
import { LangContext } from "../Contexts/LangContext";

export const UseLanguage = () => {
  const { langState, setLangState } = useContext(LangContext);

  const toggleLanguage = () => {
    setLangState((prevLang) => (prevLang === "en" ? "ar" : "en"));
  };

  return { language: langState, toggleLanguage };
};

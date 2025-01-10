import React, { createContext, useEffect, useState } from "react";

export const LangContext = createContext({});

export const LangContextProvider = ({ children }) => {
  const [langState, setLangState] = useState(() => {
    const savedLang = localStorage.getItem("language");
    return savedLang || "en";
  });

  // Update the document direction based on language
  useEffect(() => {
    document.documentElement.setAttribute(
      "dir",
      langState === "ar" ? "rtl" : "ltr"
    );
  }, [langState]);

  useEffect(() => {
    const handleStorageChange = () => {
      const savedLang = localStorage.getItem("language");
      if (savedLang && savedLang !== langState) {
        setLangState(savedLang);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [langState]);

  useEffect(() => {
    localStorage.setItem("language", langState);
  }, [langState]);

  return (
    <LangContext.Provider value={{ langState, setLangState }}>
      {children}
    </LangContext.Provider>
  );
};

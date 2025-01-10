import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [userState, setUserState] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    if (token) {
      setUserState({ isAuthenticated: true });
    } else {
      setUserState({ isAuthenticated: false });
    }
  }, []);

  return (
    <UserContext.Provider value={{ userState, setUserState }}>
      {children}
    </UserContext.Provider>
  );
};

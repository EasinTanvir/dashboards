import { createContext, useContext, useState } from "react";

const ContextApi = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  return (
    <ContextApi.Provider value={{ dark, setDark }}>
      {children}
    </ContextApi.Provider>
  );
};

export const themContext = () => useContext(ContextApi);

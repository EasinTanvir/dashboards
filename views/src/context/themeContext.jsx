import { createContext, useContext, useEffect, useState } from "react";

const ContextApi = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [dark, setDark] = useState(false);
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth < 600);
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <ContextApi.Provider value={{ dark, setDark, isScreenSmall }}>
      {children}
    </ContextApi.Provider>
  );
};

export const themContext = () => useContext(ContextApi);

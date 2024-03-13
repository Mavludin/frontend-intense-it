import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

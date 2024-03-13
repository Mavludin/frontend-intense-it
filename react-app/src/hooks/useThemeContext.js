import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

export const useThemeContext = () => useContext(ThemeContext);
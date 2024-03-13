import "./style.css";
import nightIcon from "../../assets/night.png";
import sunIcon from "../../assets/sun.png";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";

export const Header = () => {
  const { mode, toggleMode } = useContext(ThemeContext);

  return (
    <header className="header">
      <button
        onClick={toggleMode}
        style={{
          color: mode === 'dark' && 'white',
          backgroundColor: mode === 'dark' && 'black',
        }}
      >
        <span>Mode</span>
        <img
          src={
            mode === 'light' ? sunIcon : nightIcon
          }
          alt=""
        />
      </button>
    </header>
  );
};

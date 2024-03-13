import { useContext } from "react";
import { Paragraph } from "../Paragraph";
import "./style.css";
import { ThemeContext } from "../../context/ThemeProvider";

export const Main = () => {
  const { mode } = useContext(ThemeContext);

  return (
    <main
      className="main"
      style={{ backgroundColor: mode === 'dark' && 'black' }}
    >
      <h1 style={{ color: mode === 'dark' && 'white' }}>React App</h1>
      <Paragraph
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fuga animi deserunt odio voluptates numquam consequuntur maiores culpa nihil optio quis, quidem distinctio aliquam eveniet facilis. Exercitationem accusantium perferendis reprehenderit?"
      />
      <Paragraph
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fuga animi deserunt odio voluptates numquam consequuntur maiores culpa nihil optio quis, quidem distinctio aliquam eveniet facilis. Exercitationem accusantium perferendis reprehenderit?"
      />
    </main>
  );
};

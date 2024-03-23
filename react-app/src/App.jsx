import { useEffect, useState } from "react";
import "./App.css";
import { BirthYear } from "./components/BirthYear";

const years = [1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005];

function App() {
  // const [year, setYear] = useState();

  // const getYear = (year) => {
  //   console.log(year);

  //   setYear(year);
  // };

  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);

  return (
    <div className="app">
      {/* <BirthYear
        // setYear={setYear}
        getYear={getYear}
        years={years}
      /> */}
      <div style={{ color: width > 400 ? "crimson" : "black" }}>
        Some text
      </div>

      {/* <div>{year}</div> */}
    </div>
  );
}

export default App;

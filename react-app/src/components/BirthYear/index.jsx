import { useEffect, useState } from "react";

export const BirthYear = ({ getYear, years }) => {
  const yearsList = years.filter((year) => year >= 2000)

  const [selectedYear, setSelectedYear] = useState(yearsList[0]) // 2000
  // const [age, setAge] = useState(0)
  // const [yearsList, setYearsList] = useState(years)

  const handleChange = (e) => {
    //Batching
    setSelectedYear(e.target.value)

    getYear(e.target.value)
  }

  //   useEffect(() => {
  //     setYear(selectedYear)
  //   }, [selectedYear, setYear])

  // useEffect(() => {
  //   setAge(new Date().getFullYear() - selectedYear)
  // }, [selectedYear])

  //   useEffect(() => {
  //     setYearsList(years.filter((year) => year >= 2000))
  //   }, [years])

  const age = 2024 - selectedYear

  return (
    <div className="app">
      <form>
        <label>
          Выберите год рождения:
          <select onChange={handleChange} value={selectedYear}>
            {yearsList.map((year) => {
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
        </label>
      </form>

      <div>
        <h2>Возраст: {age}</h2>
      </div>
    </div>
  );
}

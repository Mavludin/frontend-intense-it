import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeProvider"

export const Paragraph = ({ text }) => {

  const { mode } = useContext(ThemeContext)

  return (
    <p style={{color: mode === 'dark' && 'white'}}>{text}</p>
  )
}

import { useContext } from "react"
import { Link } from "react-router-dom"
import { uiContext } from "../contexts/UIProvider"


const ThemedLink = ({ to, children }) => {
  const { theme } = useContext(uiContext)
  return (
    <Link to={to} className={theme}>{children}</Link>
  )
}

export default ThemedLink
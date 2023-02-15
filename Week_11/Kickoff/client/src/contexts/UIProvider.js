import { createContext, useState } from "react";



export const uiContext = createContext()

export const UIProvider = ({ children }) => {
  const [theme, setTheme] = useState("light")
  const [isCloudy, setIsCloudy] = useState(false)

  const toggleTheme = () => setTheme(theme => theme === "light" ? "dark" : "light")

  const toggleClouds = () => setIsCloudy(cloudy => !cloudy)

  return (
    <uiContext.Provider value={{ theme, isCloudy, toggleTheme, toggleClouds }}>
      {children}
    </uiContext.Provider>
  )
}

export default UIProvider

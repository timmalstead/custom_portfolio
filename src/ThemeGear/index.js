import React from "react"
import ThemeSelector from "../ThemeSelector"
import Gear from "./gear"
import GearHolder from "./style"
import Context from "../ThemeContext"

const ThemeGear = () => {
  const { secondaryColor } = React.useContext(Context).styles

  const [showThemeSelector, toggleThemeSelector] = React.useState(false)

  return (
    <GearHolder
      title="theme-popup"
      onClick={(e) => {
        console.log(e.target.attributes)
        return e.target.attributes.title?.nodeValue === "theme-popup"
          ? toggleThemeSelector(!showThemeSelector)
          : null
      }}
    >
      {Gear(secondaryColor)}
      {showThemeSelector ? <ThemeSelector /> : null}
    </GearHolder>
  )
}

export default ThemeGear

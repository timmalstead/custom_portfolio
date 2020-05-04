import React from "react"
// import ThemeSelector from "../ThemeSelector"
import Gear from "./gear"
import GearHolder from "./style"
import Context from "../ThemeContext"

const ThemeGear = () => {
  const { secondaryColor } = React.useContext(Context).styles

  // const [showThemeSelector, toggleThemeSelector] = React.useState(false)

  return (
    <React.Fragment>
      <GearHolder
      /* onClick={() => toggleThemeSelector(!showThemeSelector)} */
      >
        {Gear(secondaryColor)}
      </GearHolder>
      {/* {showThemeSelector ? <ThemeSelector /> : null} */}
    </React.Fragment>
  )
}

export default ThemeGear

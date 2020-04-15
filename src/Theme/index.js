import React from "react"
import OptionsGear from "../images/optionsGear"
import ThemeHolder from "./style"
import Context from "../ThemeContext"

const Theme = () => (
  <ThemeHolder>
    {OptionsGear(React.useContext(Context).styles.secondaryColor)}
  </ThemeHolder>
)

export default Theme

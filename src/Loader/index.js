import React from "react"
import Logo from "../images/logo"
import Animation from "./style"
import Context from "../ThemeContext"

const Loader = () => (
  <Animation>{Logo(React.useContext(Context).styles.secondaryColor)}</Animation>
)

export default Loader

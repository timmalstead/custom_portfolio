import React from "react"
import { Context } from "../ThemeContext"
import Logo from "../images/logo"
import Animation from "./style"

const Loader = () => (
  <Animation>{Logo(React.useContext(Context).styles.secondaryColor)}</Animation>
)

export default Loader

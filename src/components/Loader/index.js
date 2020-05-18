import React from "react"
import Logo from "./logo"
import Animation from "./style"
import Context from "../../ThemeContext"

const Loader = () => (
  <Animation>
    {Logo(React.useContext(Context).styles.headerSecondary)}
  </Animation>
)

export default Loader

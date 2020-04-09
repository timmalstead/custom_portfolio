import React from "react"
import Nav from "./style"
import Context from "../ThemeContext"

const NavBar = (props) => {
  const { headerColor, secondaryColor } = React.useContext(Context).styles
  const { changeHeaderBorder } = props

  React.useEffect(() => {
    changeHeaderBorder(false)
    return () => changeHeaderBorder(true)
  })

  return (
    <Nav
      style={{
        backgroundColor: headerColor,
        borderBottomColor: secondaryColor,
      }}
    >
      <span>howdy</span>
    </Nav>
  )
}

export default NavBar

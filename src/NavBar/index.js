import React from "react"
import NavRoutes from "../SiteRoutes"
import { NavLink } from "react-router-dom"
import Nav from "./style"
import { createGlobalStyle } from "styled-components"
import Context from "../ThemeContext"

const NavBar = (props) => {
  const {
    headerColor,
    secondaryColor,
    textColor,
    contrastOne,
  } = React.useContext(Context).styles

  const Active = createGlobalStyle`
   a, .active::before {
      color: ${textColor}
    }
    
    .active {
      color : ${contrastOne}
    }

`

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
      {NavRoutes.map((route) => (
        <NavLink key={route.key} exact to={route.path}>
          {route.key}
        </NavLink>
      ))}
      <Active />
    </Nav>
  )
}

export default NavBar

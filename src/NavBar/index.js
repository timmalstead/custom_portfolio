import React from "react"
import NavRoutes from "../navRoutes"
import { NavLink } from "react-router-dom"
import * as Styled from "./style"
import Context from "../ThemeContext"

const NavBar = (props) => {
  const { headerColor, secondaryColor, contrastOne } = React.useContext(
    Context
  ).styles

  const { changeHeaderBorder, borderBounce, toggleBorderBounce } = props

  React.useEffect(() => {
    changeHeaderBorder(false)
    return () => changeHeaderBorder(true)
  })

  const [letterHoverEffects, changeLetterHover] = React.useState(
    NavRoutes.reduce((routesObj, singleRoute) => {
      routesObj[singleRoute.key] = false
      return routesObj
    }, {})
  )

  const letterSpaceOnlyInactiveLinks = (e, key, mouseOver) => {
    if (![...e.target.classList].includes("active")) {
      changeLetterHover({
        ...letterHoverEffects,
        [key]: mouseOver ? true : false,
      })
    }
  }

  const dynamicStyle = {
    backgroundColor: headerColor,
    borderBottomColor: secondaryColor,
  }

  const routeLoop = NavRoutes.map((route) => (
    <NavLink
      key={route.key}
      exact
      to={route.path}
      activeStyle={{ color: contrastOne }}
      onClick={() => toggleBorderBounce(false)}
      style={{
        letterSpacing: letterHoverEffects[route.key] ? ".25em" : "initial",
        transition: "letter-spacing .25s linear",
      }}
      onMouseOver={(e) => letterSpaceOnlyInactiveLinks(e, route.key, true)}
      onMouseOut={(e) => letterSpaceOnlyInactiveLinks(e, route.key, false)}
    >
      {route.key}
    </NavLink>
  ))

  return borderBounce ? (
    <Styled.BounceNav style={dynamicStyle}>{routeLoop}</Styled.BounceNav>
  ) : (
    <Styled.Nav style={dynamicStyle}>{routeLoop}</Styled.Nav>
  )
}

export default NavBar

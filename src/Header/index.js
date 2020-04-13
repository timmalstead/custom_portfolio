import React from "react"
import Logo from "../images/logo"
import Links from "../Links"
import { Link } from "react-router-dom"
import * as Styled from "./style"
import Context from "../ThemeContext"

const SiteHeader = (props) => {
  const { headerColor, secondaryColor, textColor } = React.useContext(
    Context
  ).styles
  const { headerBorder } = props

  return (
    <Styled.Header
      style={{
        backgroundColor: headerColor,
        borderBottomColor: headerBorder ? secondaryColor : "transparent",
        padding: headerBorder ? "initial" : ".625em 0 0 0",
      }}
    >
      <Styled.Graphic as={Link} exact to="/">
        {Logo(secondaryColor)}
      </Styled.Graphic>
      <Styled.Name as={Link} exact to="/" style={{ color: textColor }}>
        <span>Timothy</span>
        <span>Malstead</span>
      </Styled.Name>
      <Links />
      <Styled.Themes>Th</Styled.Themes>
    </Styled.Header>
  )
}
export default SiteHeader

import React from "react"
import Logo from "../logo"
import Links from "../Links"
import ThemeGear from "../ThemeGear"
import { Link } from "react-router-dom"
import * as Styled from "./style"
import Context from "../ThemeContext"

const SiteHeader = (props) => {
  const { headerColor, headerSecondary, headerText } = React.useContext(
    Context
  ).styles
  const { headerBorder, toggleBorderBounce } = props

  return (
    <Styled.Header
      style={{
        backgroundColor: headerColor,
        borderBottomColor: headerBorder ? headerSecondary : "transparent",
        padding: headerBorder ? "initial" : ".625em 0 0 0",
      }}
    >
      <Styled.Graphic
        onClick={() => toggleBorderBounce(true)}
        as={Link}
        exact
        to="/"
      >
        {Logo(headerSecondary)}
      </Styled.Graphic>
      <Styled.Name
        onClick={() => toggleBorderBounce(true)}
        as={Link}
        exact
        to="/"
        style={{ color: headerText }}
      >
        <span>Timothy</span>
        <span>Malstead</span>
      </Styled.Name>
      <Links />
      <ThemeGear />
    </Styled.Header>
  )
}
export default SiteHeader

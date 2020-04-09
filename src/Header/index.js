import React from "react"
import Logo from "../images/logo"
import Links from "../Links"
import { Link } from "react-router-dom"
import * as Styled from "./style"
import Context from "../ThemeContext"

const SiteHeader = () => {
  const { headerColor, secondaryColor } = React.useContext(Context).styles
  return (
    <Styled.Header
      style={{
        backgroundColor: `${headerColor}`,
        borderBottomColor: `${secondaryColor}`,
      }}
    >
      <Styled.Graphic>
        <Link exact to="/">
          {Logo(secondaryColor)}
        </Link>
      </Styled.Graphic>

      <Styled.Name>
        <span>Timothy</span>
        <span>Malstead</span>
      </Styled.Name>
      <Links />
    </Styled.Header>
  )
}
export default SiteHeader

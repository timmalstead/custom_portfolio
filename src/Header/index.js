import React from "react"
import * as Styled from "./style"
import Logo from "../images/logo"
import Links from "../Links"
import { Context } from "../ThemeContext"

const SiteHeader = () => {
  const { mainColor, secondaryColor } = React.useContext(Context).styles
  return (
    <Styled.Header
      style={{
        backgroundColor: `${mainColor}`,
        borderBottomColor: `${secondaryColor}`,
      }}
    >
      <Styled.Graphic>{Logo(secondaryColor)}</Styled.Graphic>
      <Styled.Name>
        <span>Timothy</span>
        <span>Malstead</span>
      </Styled.Name>
      <Links />
    </Styled.Header>
  )
}
//header still needs color theme component
export default SiteHeader

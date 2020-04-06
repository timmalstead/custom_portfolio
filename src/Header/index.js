import React from "react"
import * as Styled from "./style"
import Logo from "../images/logo"
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
      <Styled.Icons />
    </Styled.Header>
  )
}
//header still needs projects, techs , about and settings, links always accessable at top?
export default SiteHeader

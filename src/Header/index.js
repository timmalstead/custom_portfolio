import React from "react"
import * as Styled from "./style"
import { Consumer } from "../ThemeContext"

const SiteHeader = () => (
  <Consumer>
    {props => (
      <Styled.Header
        style={{
          backgroundColor: `${props.styles.mainColor}`,
          borderBottomColor: `${props.styles.secondaryColor}`
        }}
      >
        <Styled.Graphic />
        <Styled.Name>
          <span>Timothy</span>
          <span>Malstead</span>
        </Styled.Name>
        <Styled.Icons />
      </Styled.Header>
    )}
  </Consumer>
)

export default SiteHeader

import React from "react"
import * as Styled from "./style"
import styled from "styled-components"

const SiteHeader = props => {
  const { mainColor, secondaryColor } = props.style

  const Header = styled.header`
    position: fixed;
    z-index: 1;
    width: 100%;
    display: grid;
    align-items: center;
    background-color: ${mainColor};
    border-bottom: 0.09em solid ${secondaryColor};
  `

  return (
    <Header>
      <Styled.Name>
        <span>Timothy</span>
        <span>Malstead</span>
      </Styled.Name>
    </Header>
  )
}

export default SiteHeader

import styled from "styled-components"

const Icons = styled.nav`
  grid-area: icons;
  width: 25em;
  height: 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    width: 12em;
  }

  @media (max-width: 400px) {
    width: 9em;
  }
`
const Icon = styled.svg`
  height: 1.5em;

  @media (max-width: 800px) {
    height: 2.5em;
  }

  @media (max-width: 400px) {
    height: 2em;
  }
`

export { Icons, Icon }

import styled from "styled-components"

const Icons = styled.nav`
  grid-area: icons;
  width: 25em;
  height: 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 850px) {
    width: 12em;
  }

  @media (max-width: 400px) {
    width: 45vw;
  }
`

const Icon = styled.div`
  svg {
    height: 1.5em;
    transform: translateY(0);
    transition: transform 0.5s;
  }

  :hover {
    svg {
      transform: translateY(-0.5em);
    }
  }

  @media (max-width: 850px) {
    svg {
      height: 2.5em;
    }
  }

  @media (max-width: 400px) {
    svg {
      width: 85%;
    }
  }
`

export { Icons, Icon }

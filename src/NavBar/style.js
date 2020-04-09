import styled from "styled-components"

const Nav = styled.nav`
  width: 100%;
  height: 1.25em;
  display: flex;
  position: fixed;
  justify-content: center;
  border-bottom-width: 0.09em;
  border-bottom-style: solid;
  animation: drop 0.5s ease-out;

  @keyframes drop {
    0% {
      transform: translateY(-1.25em);
    }
    80% {
      transform: translateY(0);
    }
    90% {
      transform: translateY(-0.15em);
    }
    100% {
      transform: translateY(0);
    }
  }
`
export default Nav

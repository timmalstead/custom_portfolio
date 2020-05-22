import styled from "styled-components"

const Nav = styled.nav`
  width: 100%;
  height: 1.5em;
  display: flex;
  position: fixed;
  z-index: 1;
  left: 0;
  justify-content: center;
  border-bottom-width: 0.09em;
  border-bottom-style: solid;

  > * {
    font-style: italic;
    font-size: 1.1em;
    text-decoration: none;

    @media (max-width: 550px) {
      font-size: 0.9em;
    }
  }

  > *:not(:first-child)::before {
    content: " * ";
    pointer-events: none;
    margin: 0 0.5em;
  }
`
const BounceNav = styled(Nav)`
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

export { Nav, BounceNav }

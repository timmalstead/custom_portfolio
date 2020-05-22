import styled from "styled-components"

const GearHolder = styled.div`
  grid-area: themes;
  height: 2.5em;
  width: 2.5em;

  :hover {
    svg {
      animation: spin 0.5s ease-in-out;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`
export default GearHolder

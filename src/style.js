import styled from "styled-components"

const Main = styled.main`
  width: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 46.5em;
  top: 3.5em;

  @media (max-width: 800px) {
    min-height: 45.5em;
    top: 4.5em;
  }
`

export default Main

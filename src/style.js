import styled from "styled-components"

const Main = styled.main`
  width: 100%;
  padding: 3.5em 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* min-height: 48em; */

  @media (max-width: 800px) {
    padding: 4.5em 0 0 0;
  }
`

export default Main

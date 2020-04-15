import styled from "styled-components"

const TechHolder = styled.div`
  padding: 1em 0;
  margin: 1.25em 0 0 0;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  @media (max-width: 800px) {
    width: 95%;
  }
`
const IconHolder = styled.div`
  margin: 0.5em;
  width: 8em;
  height: 8em;
  display: inherit;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;

  svg {
    width: 10vw;
  }

  @media (min-width: 2000px) {
    width: 12em;
    height: 12em;

    svg {
      width: 25vw;
    }
  }

  @media (max-width: 800px) {
    width: 5em;
    height: 6em;
  }

  @media (max-width: 515px) {
    width: 4em;
  }
`

export { TechHolder, IconHolder }

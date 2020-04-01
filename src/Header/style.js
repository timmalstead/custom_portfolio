import styled from "styled-components"

//using the largest element to set the size of the header
const Name = styled.div`
  display: flex;

  span {
    font-size: max(1.5em, 2vw);
    margin: 0.3em 0 0.3em 0.5em;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 1em 0;

    span {
      margin: 0 0.75em;
    }
  }
`

export { Name }

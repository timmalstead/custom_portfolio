import styled from "styled-components"

const TechHolder = styled.div`
  padding: 1em 0;
  margin: 1.25em 0 0 0;
  width: 98%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const IconHolder = styled.div`
  position: relative;
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

const PopUp = styled.div`
  position: absolute;
  flex-direction: column;
  top: 5em;
  left: 2em;
  z-index: 2;

  div {
    position: relative;
    left: 1em;
    height: 0;
    width: 0;
    border-left: 1em solid transparent;
    border-right: 1em solid transparent;
    border-bottom-width: 1em;
    border-bottom-style: solid;
  }

  article {
    position: relative;
    font-family: "EB Garamond", serif;
    padding: 1em;
    display: inherit;
    flex-direction: inherit;
    justify-content: space-between;
    align-items: center;
    min-height: 10em;
    width: 15em;
    border-radius: 0.5em;

    p {
      margin: 0;
    }

    a {
      margin: 0.5em 0 0 0;
    }
  }

  @media (max-width: 800px) {
    top: 3.5em;
    left: 0.5em;
  }
`

export { TechHolder, IconHolder, PopUp }

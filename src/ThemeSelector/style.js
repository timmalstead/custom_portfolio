import styled from "styled-components"

const PopUp = styled.div`
  div {
    position: relative;
    left: 0.25em;
    height: 0;
    width: 0;
    border-left: 1em solid transparent;
    border-right: 1em solid transparent;
    border-bottom-width: 1em;
    border-bottom-style: solid;
  }

  article {
    position: relative;
    right: 12em;
    font-family: "EB Garamond", serif;
    padding: 1em;
    min-height: 20em;
    width: 15em;
    border-radius: 0.5em;
  }
`

export default PopUp

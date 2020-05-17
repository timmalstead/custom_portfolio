import styled from "styled-components"

const PickerHolder = styled.div`
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

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

  main {
    position: relative;
    font-family: "EB Garamond", serif;
    padding: 1em;
    min-height: 20em;
    width: 15em;
    border-radius: 0.5em;
    text-align: center;
  }
`

export { PopUp, PickerHolder }

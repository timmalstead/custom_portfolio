import styled from "styled-components"

const PickerHolder = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    color: #000;
    position: relative;
    z-index: 1;
  }
`
const ArrowUp = styled.div`
  position: relative;
  left: 0.25em;
  height: 0;
  width: 0;
  border-left: 1em solid transparent;
  border-right: 1em solid transparent;
  border-bottom-width: 1em;
  border-bottom-style: solid;
`

const ArrowLeft = styled.div`
  height: 0;
  width: 0;
  border-top: 0.7em solid transparent;
  border-bottom: 0.7em solid transparent;
  border-right-width: 0.7em;
  border-right-style: solid;
`

const ArrowRight = styled.div`
  height: 0;
  width: 0;
  border-top: 0.7em solid transparent;
  border-bottom: 0.7em solid transparent;
  border-left-width: 0.7em;
  border-left-style: solid;
`

const PopUp = styled.div`
  main {
    position: relative;
    padding: 1em;
    min-height: 20em;
    width: 16em;
    border-radius: 0.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`

const ThemeComponentTitle = styled.span`
  width: min-content;
  font-size: 1.7em;
`

const ThemeTitle = styled.div`
  min-width: 70%;
  font-size: 1.2em;
  margin: 0.4em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ColorInfoHolder = styled.div`
  width: 90%;
  display: inherit;
  justify-content: space-between;
  margin: 0 0 0.5em 0;
  font-family: "EB Garamond", serif;
`

const ColorHolder = styled.div`
  width: 3em;
  height: 3em;
  border-width: 0.03em;
  border-style: solid;
  border-radius: 50%;
`
const ColorInfo = styled.div`
  width: 70%;
  display: inherit;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export {
  ArrowUp,
  ArrowLeft,
  ArrowRight,
  PopUp,
  PickerHolder,
  ThemeComponentTitle,
  ThemeTitle,
  ColorInfoHolder,
  ColorHolder,
  ColorInfo,
}

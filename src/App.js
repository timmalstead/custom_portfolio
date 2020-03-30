import React from "react"
import { createGlobalStyle } from "styled-components"

let iter = 0
const experiment = ["first", "second", "third"]

const App = () => {
  const [bgColor, changeColor] = React.useState("#333")

  const Global = createGlobalStyle`
    body {
      background-color: ${bgColor};
      color: white;
    }
  `

  //don't think i'll have to use context for the styling on this, but WILL have to use it for rando chat, whether it's for styling or data.

  //so i will probably end up doing an array of objects for each of the themes i come up with and just iterating through them, targeting by tag. yes, that's what i think

  return (
    <React.Fragment>
      <p onClick={() => changeColor("red" || "#333")}>hello</p>
      <p
        onClick={() => {
          if (!experiment[iter]) {
            iter = 0
          }
          console.log(experiment[iter])
          iter++
        }}
      >
        test
      </p>
      <Global />
    </React.Fragment>
  )
}

export default App

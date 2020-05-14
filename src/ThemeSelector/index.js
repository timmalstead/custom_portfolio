import React from "react"
import PopUp from "./style"
import Context from "../ThemeContext"

const ThemeSelector = () => {
  const { secondaryColor } = React.useContext(Context).styles

  return (
    <PopUp>
      <div
        style={{
          borderBottomColor: secondaryColor,
        }}
      />
      <article
        style={{
          backgroundColor: secondaryColor,
        }}
      >
        Theme Selector Coming <em>very</em> soon
      </article>
    </PopUp>
  )
}

export default ThemeSelector

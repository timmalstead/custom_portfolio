import React from "react"
import { SketchPicker } from "react-color"
import Context from "../ThemeContext"

const Photoshop = () => {
  const { styles, changeStyle } = React.useContext(Context)
  return (
    <SketchPicker
      color={styles.mainColor}
      onChange={(e) => changeStyle({ ...styles, mainColor: e.hex })}
      disableAlpha={true}
      width={"25vw"}
      presetColors={[]}
    />
  )
}

export default Photoshop

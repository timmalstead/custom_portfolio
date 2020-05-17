import React from "react"
import * as Style from "./style"
import { SketchPicker } from "react-color"
import Context from "../ThemeContext"

const ThemeSelector = () => {
  const { styles, changeStyle } = React.useContext(Context)

  return (
    <React.Fragment>
      <Style.PickerHolder>
        <SketchPicker
          color={styles.mainColor}
          onChange={(e) => changeStyle({ ...styles, mainColor: e.hex })}
          disableAlpha={true}
          width={"50vw"}
          presetColors={[]}
        />
      </Style.PickerHolder>
      <Style.PopUp>
        <div
          style={{
            borderBottomColor: styles.secondaryColor,
          }}
        />
        <main
          style={{
            backgroundColor: styles.secondaryColor,
            right: "12em",
          }}
        ></main>
      </Style.PopUp>
    </React.Fragment>
  )
}

export default ThemeSelector

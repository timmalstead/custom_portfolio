import React from "react"
import * as Style from "./style"
import { PhotoshopPicker } from "react-color"
import Context from "../ThemeContext"

const ThemeSelector = () => {
  const { styles, changeStyle } = React.useContext(Context)

  const initialPopUpLocation = window.innerWidth > 850 ? false : true

  const [popUpLocation, shiftPopUp] = React.useState(initialPopUpLocation)
  const [pickerVisible, switchPickerVisible] = React.useState(false)

  React.useEffect(() => {
    const adjustPopUp = () => {
      window.innerWidth > 850 ? shiftPopUp(false) : shiftPopUp(true)
    }

    window.addEventListener("resize", adjustPopUp)

    return () => window.removeEventListener("resize", adjustPopUp)
  })

  return (
    <React.Fragment>
      {/* {pickerVisible ? (
        <Style.PickerHolder>
          <PhotoshopPicker
            header="Pass in Color Name"
            color={styles.mainColor}
            onChange={(e) => changeStyle({ ...styles, mainColor: e.hex })}
            onAccept={() => {}}
            onCancel={() => {}}
          />
        </Style.PickerHolder>
      ) : null} */}
      <Style.PopUp>
        <div
          style={{
            borderBottomColor: styles.secondaryColor,
          }}
        />
        <main
          onClick={() => switchPickerVisible(!pickerVisible)}
          style={{
            backgroundColor: styles.secondaryColor,
            right: popUpLocation ? ".5em" : "12em",
          }}
        >
          Theme Selector Coming <em>Soon</em>
        </main>
      </Style.PopUp>
    </React.Fragment>
  )
}

export default ThemeSelector

import React from "react"
import * as Style from "./style"
import { PhotoshopPicker } from "react-color"
import Context from "../ThemeContext"

const ThemeSelector = () => {
  const { styles, changeStyle } = React.useContext(Context)

  // const {
  //   mainColor,
  //   secondaryColor,
  //   headerColor,
  //   textColor,
  //   contrastOne,
  //   contrastTwo,
  // } = styles

  const initialPopUpLocation = window.innerWidth > 850 ? false : true

  const [popUpLocation, shiftPopUp] = React.useState(initialPopUpLocation)

  const [pickerVisible, switchPickerVisible] = React.useState(false)
  const [selectedColor, selectCurrentColor] = React.useState({
    colorName: "Color Picker",
    hex: "#FF0000",
  })

  React.useEffect(() => {
    const adjustPopUp = () => {
      window.innerWidth > 850 ? shiftPopUp(false) : shiftPopUp(true)
    }

    window.addEventListener("resize", adjustPopUp)

    return () => window.removeEventListener("resize", adjustPopUp)
  })

  const callColorPicker = (colorTitle, color, setPickerVisibility) => {
    selectCurrentColor({ colorName: colorTitle, hex: color })
    setPickerVisibility()
  }

  const setColor = (setPickerVisibility) => {
    changeStyle({
      ...styles,
      [selectedColor.colorName]: selectedColor.hex,
    })
    setPickerVisibility()
  }

  const themeColors = () => {
    const colorArr = []
    for (const color in styles) {
      colorArr.push(
        <Style.ColorHolder
          onClick={() =>
            callColorPicker(color, styles[color], () =>
              switchPickerVisible(true)
            )
          }
          style={{
            borderColor:
              color === "secondaryColor" ? styles.contrastOne : "transparent",
            backgroundColor: styles[color],
          }}
        />
      )
    }
    return colorArr
  }

  return (
    <React.Fragment>
      {pickerVisible ? (
        <Style.PickerHolder>
          <PhotoshopPicker
            header={selectedColor.colorName}
            color={selectedColor.hex}
            onChange={(e) =>
              selectCurrentColor({ ...selectedColor, hex: e.hex })
            }
            onAccept={() => setColor(() => switchPickerVisible(false))}
            onCancel={() => switchPickerVisible(false)}
          />
        </Style.PickerHolder>
      ) : null}
      <Style.PopUp>
        <section
          style={{
            borderBottomColor: styles.secondaryColor,
          }}
        />
        <main
          style={{
            backgroundColor: styles.secondaryColor,
            right: popUpLocation ? ".5em" : "12em",
          }}
        >
          {themeColors()}
          {/* Theme Selector Coming <em>Soon</em> */}
        </main>
      </Style.PopUp>
    </React.Fragment>
  )
}

export default ThemeSelector

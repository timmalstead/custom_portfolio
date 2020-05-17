import React from "react"
import * as Style from "./style"
import themes from "./themes"
import { PhotoshopPicker } from "react-color"
import Context from "../ThemeContext"

console.table(themes)

const ThemeSelector = () => {
  const { styles, changeStyle } = React.useContext(Context)

  setTimeout(() => {
    changeStyle(themes[1])
  }, 2000)

  const { mainColor, headerSecondary, contrastOne } = styles

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

  const themeDisplay = () => {
    const colorArr = []
    for (const str in styles) {
      if (str !== "imgKey") {
        if (str !== "name") {
          colorArr.push(
            <Style.ColorHolder
              key={str}
              onClick={() =>
                callColorPicker(str, styles[str], () =>
                  switchPickerVisible(true)
                )
              }
              style={{
                borderColor: mainColor,
                backgroundColor: styles[str],
              }}
            />
          )
        } else {
          colorArr.push(
            <Style.ThemeTitle key={str}>{styles[str]}</Style.ThemeTitle>
          )
        }
      }
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
            borderBottomColor: headerSecondary,
          }}
        />
        <main
          style={{
            backgroundColor: headerSecondary,
            right: popUpLocation ? ".5em" : "12em",
          }}
        >
          <Style.ThemeComponentTitle
            style={{
              borderBottom: `.03em solid ${contrastOne}`,
            }}
          >
            <span>Themes</span>
          </Style.ThemeComponentTitle>
          {themeDisplay()}
        </main>
      </Style.PopUp>
    </React.Fragment>
  )
}

export default ThemeSelector

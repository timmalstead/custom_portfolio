import React from "react"
import * as Style from "./style"
import themes from "./themes"
import { PhotoshopPicker } from "react-color"
import Context from "../../ThemeContext"

const ThemeSelector = () => {
  const { styles, changeStyle } = React.useContext(Context)

  const {
    imgKey,
    mainColor,
    headerSecondary,
    selector,
    contrastOne,
    contrastTwo,
  } = styles

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

  const shiftTheme = (increment) => {
    if (increment) {
      themes[imgKey + 1]
        ? changeStyle(themes[imgKey + 1])
        : changeStyle(themes[0])
    } else {
      themes[imgKey - 1]
        ? changeStyle(themes[imgKey - 1])
        : changeStyle(themes[themes.length - 1])
    }
  }

  React.useEffect(() => {
    const storage = window.localStorage
    for (const prop in styles) {
      storage[prop] = styles[prop]
    }
  }, [styles])

  const themeDisplay = () => {
    const colorArr = []
    for (const str in styles) {
      if (str !== "imgKey") {
        if (str !== "name") {
          const nameSplit = str
            .split(/(?=[A-Z])/)
            .map((word) => `${word[0].toUpperCase()}${word.substring(1)}`)
            .join(" ")
          colorArr.push(
            <Style.ColorInfoHolder key={str}>
              <Style.ColorHolder
                onClick={() =>
                  callColorPicker(str, styles[str], () =>
                    /* switchPickerVisible(true) */
                    console.log(
                      "This is where the picker visibility callback will be called"
                    )
                  )
                }
                style={{
                  borderColor:
                    styles[str] === selector ? contrastTwo : "transparent",
                  backgroundColor: styles[str],
                }}
              />
              <Style.ColorInfo>
                <span>{nameSplit}</span>
                <span>{styles[str]}</span>
              </Style.ColorInfo>
            </Style.ColorInfoHolder>
          )
        } else {
          colorArr.push(
            <Style.ThemeTitle key={str}>
              <Style.ArrowLeft
                onClick={() => shiftTheme(false)}
                style={{
                  borderRightColor: contrastOne,
                }}
              />
              <em>{styles[str]}</em>
              <Style.ArrowRight
                onClick={() => shiftTheme(true)}
                style={{
                  borderLeftColor: contrastOne,
                }}
              />
            </Style.ThemeTitle>
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
        <Style.ArrowUp
          style={{
            borderBottomColor: selector,
          }}
        />
        <main
          style={{
            backgroundColor: selector,
            right: popUpLocation ? ".5em" : "12em",
            border:
              mainColor === selector ? `.07em solid ${headerSecondary}` : null,
          }}
        >
          <Style.ThemeComponentTitle
            style={{
              borderBottom: `.03em solid ${contrastOne}`,
            }}
          >
            Themes
          </Style.ThemeComponentTitle>
          {themeDisplay()}
        </main>
      </Style.PopUp>
    </React.Fragment>
  )
}

export default ThemeSelector

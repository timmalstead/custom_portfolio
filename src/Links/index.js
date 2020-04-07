import React from "react"
import * as Style from "./style"
import fullIcons from "../images/fullSizeIcons"
import { Context } from "../ThemeContext"

const Links = () => {
  const { textColor, contrastOne } = React.useContext(Context).styles

  //will need to change initial value to a ternary when you get smaller view up

  const [iconsToRender, changeIcons] = React.useState(fullIcons)

  //may need to change hoverControl once smaller icons become part of the picture

  const hoverControl = fullIcons.reduce((object, icon) => {
    object[icon.key] = false
    return object
  }, {})

  const [hovering, changeHover] = React.useState(hoverControl)

  return (
    <Style.Icons>
      {iconsToRender.map((link) => (
        <a
          key={link.key}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Style.Icon
            viewBox={link.viewBox}
            style={{
              fill: `${hovering[link.key] ? `${contrastOne}` : textColor}`,
            }}
            onMouseOver={() => changeHover({ ...hovering, [link.key]: true })}
            onMouseOut={() => changeHover({ ...hovering, [link.key]: false })}
          >
            {link.path}
          </Style.Icon>
        </a>
      ))}
    </Style.Icons>
  )
}

export default Links

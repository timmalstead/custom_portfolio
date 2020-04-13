import React from "react"
import fullIcons from "../images/fullSizeIcons"
import mobileIcons from "../images/mobileIcons"
import * as Style from "./style"
import Context from "../ThemeContext"

const Links = () => {
  const { textColor, contrastOne } = React.useContext(Context).styles

  const initialIcons = window.innerWidth > 850 ? fullIcons : mobileIcons

  const [iconsToRender, changeIcons] = React.useState(initialIcons)

  React.useEffect(() => {
    const changeMobileIcons = () => {
      window.innerWidth <= 850
        ? changeIcons(mobileIcons)
        : changeIcons(fullIcons)
    }
    window.addEventListener("resize", changeMobileIcons)
  })

  const [hovering, changeHover] = React.useState(
    initialIcons.reduce((object, icon) => {
      object[icon.key] = false
      return object
    }, {})
  )

  return (
    <Style.Icons>
      {iconsToRender.map((link) => (
        <a
          key={link.key}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Style.Icon>
            <svg
              viewBox={link.viewBox}
              style={{
                fill: hovering[link.key] ? contrastOne : textColor,
              }}
              onMouseOver={() => changeHover({ ...hovering, [link.key]: true })}
              onMouseOut={() => changeHover({ ...hovering, [link.key]: false })}
            >
              {link.path}
            </svg>
          </Style.Icon>
        </a>
      ))}
    </Style.Icons>
  )
}

export default Links

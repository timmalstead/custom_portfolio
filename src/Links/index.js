import React from "react"
import * as Style from "./style"
import fullIcons from "../images/fullSizeIcons"
import { Context } from "../ThemeContext"

const Links = () => {
  const { textColor } = React.useContext(Context).styles
  //will need to change initial value to a ternary when you get smaller view up
  const [iconsToRender, changeIcons] = React.useState(fullIcons)
  return (
    <Style.Icons>
      {iconsToRender.map((link) => (
        <a
          key={link.key}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Style.Icon viewBox={link.viewBox} style={{ fill: `${textColor}` }}>
            {link.path}
          </Style.Icon>
        </a>
      ))}
    </Style.Icons>
  )
}

export default Links

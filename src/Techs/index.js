import React from "react"
import TechIcons from "./techIcons"
import * as Style from "./style"
import Context from "../ThemeContext"

const Techs = () => {
  const { secondaryColor, contrastOne } = React.useContext(Context).styles

  const [hovering, changeHover] = React.useState(
    TechIcons.reduce((object, icon) => {
      object[icon.name] = false
      return object
    }, {})
  )

  const [popUpReversed, popUpDirectionSwitcher] = React.useState(false)

  const mouseOver = (e, iconName) =>
    window.innerWidth - e.target.getBoundingClientRect().x <= 250 &&
    e.target.tagName !== "SPAN" &&
    window.innerWidth >= 550
      ? (changeHover({ ...hovering, [iconName]: true }),
        popUpDirectionSwitcher(true))
      : e.target.tagName !== "SPAN" && window.innerWidth >= 550
      ? changeHover({ ...hovering, [iconName]: true })
      : null

  const mouseLeave = (e, iconName) =>
    e.target.tagName !== "SPAN"
      ? (changeHover({ ...hovering, [iconName]: false }),
        popUpDirectionSwitcher(false))
      : null

  return (
    <Style.TechHolder>
      {TechIcons.map((icon) => (
        <Style.IconHolder
          key={icon.name}
          onMouseOver={(e) => mouseOver(e, icon.name)}
          onMouseLeave={(e) => mouseLeave(e, icon.name)}
        >
          <Style.PopUp
            style={{
              display: hovering[icon.name] ? "flex" : "none",
            }}
          >
            <div
              style={{
                borderBottomColor: secondaryColor,
              }}
            />
            <article
              style={{
                backgroundColor: secondaryColor,
                left: popUpReversed ? "-11em" : 0,
              }}
            >
              <p>{icon.info}</p>
              <a
                style={{ color: contrastOne }}
                href={icon.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </article>
          </Style.PopUp>
          <svg viewBox="0 0 51 72">{icon.path}</svg>
          <span>{icon.name}</span>
        </Style.IconHolder>
      ))}
    </Style.TechHolder>
  )
}

export default Techs

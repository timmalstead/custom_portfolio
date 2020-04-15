import React from "react"
import TechIcons from "../images/techIcons"

const Techs = () =>
  TechIcons.map((icon) => (
    <React.Fragment key={icon.name}>
      <svg viewBox="0 0 51.01 72" width="51.01px" height="72px">
        {icon.path}
      </svg>
      <span>{icon.name}</span>
    </React.Fragment>
  ))

export default Techs

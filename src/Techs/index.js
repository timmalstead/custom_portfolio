import React from "react"
import TechIcons from "../images/techIcons"
import * as Style from "./style"

const Techs = () => (
  <Style.TechHolder>
    {TechIcons.map((icon) => (
      <Style.IconHolder key={icon.name}>
        <svg viewBox="0 0 51 72">{icon.path}</svg>
        <span>{icon.name}</span>
      </Style.IconHolder>
    ))}
  </Style.TechHolder>
)

export default Techs

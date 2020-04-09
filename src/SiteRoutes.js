import React from "react"
import Projects from "./Projects"
import Techs from "./Techs"

const NavRoutes = [
  {
    key: "pro",
    path: "/projects",
    comp: <Projects />,
  },
  { key: "tec", path: "/techs", comp: <Techs /> },
]

export default NavRoutes

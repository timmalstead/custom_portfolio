import React from "react"
import Projects from "./Projects"
import Techs from "./Techs"

const NavRoutes = [
  {
    key: "Projects",
    path: "/projects",
    comp: <Projects />,
  },
  { key: "Techs", path: "/techs", comp: <Techs /> },
]

export default NavRoutes

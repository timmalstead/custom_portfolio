import React from "react"
import Projects from "./Projects"
import Techs from "./Techs"
import About from "./About"

const NavRoutes = [
  {
    key: "About",
    path: "/about",
    comp: <About />,
  },
  {
    key: "Projects",
    path: "/projects",
    comp: <Projects />,
  },
  { key: "Techs", path: "/techs", comp: <Techs /> },
]

export default NavRoutes

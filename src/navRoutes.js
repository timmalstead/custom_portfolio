import React from "react"
import About from "./About"
import Projects from "./Projects"
import Techs from "./Techs"

// prettier-ignore
const NavRoutes = [
  {
    key: "About",
    path: "/",
    comp: <About />,
  },
  {
    key: "Projects",
    path: "/projects",
    comp: <Projects />,
  },
  { 
    key: "Techs",
    path: "/techs", 
    comp: <Techs /> 
  },
]

export default NavRoutes

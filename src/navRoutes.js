import React from "react"
import About from "./About"
import Projects from "./Projects"
import Tools from "./Techs"

// prettier-ignore
const NavRoutes = [
  {
    key: "Projects",
    path: "/projects",
    comp: <Projects />,
  },
  { 
    key: "Tools",
    path: "/tools", 
    comp: <Tools /> 
  },
  {
    key: "About Me",
    path: "/about",
    comp: <About />,
  },
]

export default NavRoutes

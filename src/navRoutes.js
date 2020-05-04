import React from "react"
import About from "./About"
import Projects from "./Projects"
import Tools from "./Techs"

// prettier-ignore
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
  { 
    key: "Tools",
    path: "/tools", 
    comp: <Tools /> 
  },
]

export default NavRoutes

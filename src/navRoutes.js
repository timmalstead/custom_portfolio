import React from "react"
import About from "./components/About"
import Projects from "./components/Projects"
import Tools from "./components/Techs"
// import Writing from "./components/Writing"

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
  // {
  //   key: "Writing",
  //   path: "/writing",
  //   comp: <Writing />,
  // },
]

export default NavRoutes

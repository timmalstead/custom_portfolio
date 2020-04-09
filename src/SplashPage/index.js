import React from "react"
import { Link } from "react-router-dom"

const Splash = () => (
  <section>
    <p>hey, i'm the splash</p>
    <Link exact to="/projects">
      projects
    </Link>
    <Link exact to="/techs">
      techs
    </Link>
  </section>
)

export default Splash

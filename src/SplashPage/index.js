import React from "react"
import NavRoutes from "../SiteRoutes"
import { Link } from "react-router-dom"

const Splash = () => (
  <section>
    <p>hey, i'm the splash</p>
    {NavRoutes.map((route) => (
      <Link key={route.key} to={route.path}>
        {route.key}
      </Link>
    ))}
  </section>
)

export default Splash

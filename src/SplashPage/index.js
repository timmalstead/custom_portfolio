import React from "react"
import NavRoutes from "../navRoutes"
import { Link } from "react-router-dom"

const Splash = () => (
  <section>
    {NavRoutes.map((route) => (
      <Link key={route.key} to={route.path}>
        {route.key}
      </Link>
    ))}
  </section>
)

export default Splash

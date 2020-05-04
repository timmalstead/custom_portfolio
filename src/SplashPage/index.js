import React from "react"
import Logo from "../logo"
import codeBg from "./codeBg.jpg"
import NavRoutes from "../navRoutes"
import { Link } from "react-router-dom"
import * as Style from "./style"
import Context from "../ThemeContext"

const Splash = () => {
  const { mainColor, secondaryColor } = React.useContext(Context).styles

  return (
    <Style.SplashHolder>
      <Style.ImageHolder
        style={{
          backgroundImage: `linear-gradient(${mainColor}00 50%, ${mainColor}FF), url(${codeBg})`,
        }}
      >
        <Style.TypeEffect />
      </Style.ImageHolder>
      <Style.Graphic>{Logo(secondaryColor)}</Style.Graphic>
      {NavRoutes.map((route) => (
        <Link key={route.key} to={route.path}>
          {route.key}
        </Link>
      ))}
    </Style.SplashHolder>
  )
}

export default Splash

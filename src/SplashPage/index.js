import React from "react"
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
        <Style.NameHolder
          style={{
            borderBottom: `.09em solid ${secondaryColor}`,
          }}
        >
          <Style.Name>Timothy Malstead</Style.Name>
        </Style.NameHolder>
        <Style.TypeEffect />
      </Style.ImageHolder>
      {NavRoutes.map((route) => (
        <Link key={route.key} to={route.path}>
          {route.key}
        </Link>
      ))}
    </Style.SplashHolder>
  )
}

export default Splash

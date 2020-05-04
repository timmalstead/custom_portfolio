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
    <Style.SplashHolder
      style={{
        backgroundImage: `url(${codeBg})`,
        backgroundColor: mainColor,
      }}
    >
      <Style.Graphic>{Logo(secondaryColor)}</Style.Graphic>
      {/* <img
        src={codeBg}
        alt={"code"}
        style={{ backgroundImage: codeBg, backgroundBlendMode: "multiply" }}
      /> */}

      {NavRoutes.map((route) => (
        <Link key={route.key} to={route.path}>
          {route.key}
        </Link>
      ))}
    </Style.SplashHolder>
  )
}

export default Splash

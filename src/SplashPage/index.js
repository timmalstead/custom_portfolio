import React from "react"
import codeBg from "./codeBg.jpg"
import NavRoutes from "../navRoutes"
import { Link } from "react-router-dom"
import * as Style from "./style"
import Context from "../ThemeContext"

const Splash = () => {
  const {
    mainColor,
    secondaryColor,
    textColor,
    contrastTwo,
    heart,
  } = React.useContext(Context).styles

  const [hoverText, changeHoverText] = React.useState(
    NavRoutes.reduce((hoverObj, route) => {
      hoverObj[route.key] = false
      return hoverObj
    }, {})
  )

  return (
    <Style.SplashHolder>
      <Style.ImageHolder
        style={{
          backgroundImage: `linear-gradient(${mainColor}00 50%, ${mainColor}FF), url(${codeBg})`,
        }}
      >
        <div>
          <Style.NameHolder
            style={{
              borderBottom: `.09em solid ${secondaryColor}`,
            }}
          >
            <Style.Name>Timothy Malstead</Style.Name>
          </Style.NameHolder>
          <Style.TypeEffect />
        </div>
        <Style.MadeWithLove>Made with {heart} in React.JS</Style.MadeWithLove>
      </Style.ImageHolder>
      <Style.ProjectLinksHolder>
        {NavRoutes.map((route, i) => (
          <Style.RouteHolder key={route.key}>
            <Link
              key={route.key}
              to={route.path}
              style={{
                color: hoverText[route.key] ? textColor : secondaryColor,
                borderBottom: hoverText[route.key]
                  ? `.25em solid ${contrastTwo}`
                  : ".1em solid transparent",
              }}
              onMouseOver={() =>
                changeHoverText({ ...hoverText, [route.key]: true })
              }
              onMouseOut={() =>
                changeHoverText({ ...hoverText, [route.key]: false })
              }
            >
              {route.key}
            </Link>
          </Style.RouteHolder>
        ))}
      </Style.ProjectLinksHolder>
    </Style.SplashHolder>
  )
}

export default Splash

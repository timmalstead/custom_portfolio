import React from "react"
import codeBg from "./codeBg.jpg"
import NavRoutes from "../navRoutes"
import folioProjects from "../Projects/projects"
import TechIcons from "../Techs/techIcons"
import profilePic from "../About/profilePic.jpg"
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

  const [hoverEffects, changeHoverEffects] = React.useState(
    NavRoutes.reduce((hoverObj, route) => {
      hoverObj[route.key] = false
      return hoverObj
    }, {})
  )

  const loadingEffect = (route) => {
    //have to include projects and figure out a way to make profile pic responsive. still i think that the pegging the number of icons to the window.innerWidth is cool.

    //figure loading animation tranition too

    //remember to keep an eye on styling at smaller sizes with this, and fix backgrounds of icons to main background color?
    switch (route) {
      case "Tools":
        const iconCopy = [...TechIcons]
        const iconBundle = []
        //may want to have different divisions based on innerwidth for icons
        for (let i = 0; i < Math.floor(window.innerWidth / 200); i++) {
          const randomNum = Math.floor(Math.random() * iconCopy.length)
          iconBundle.push(iconCopy[randomNum])
          iconCopy.splice(randomNum, 1)
        }
        return iconBundle.map((icon) => (
          <Style.EffectSvg viewBox="0 0 51 72">{icon.path}</Style.EffectSvg>
        ))
      default:
        return <Style.EffectImg src={profilePic} alt="Profile Pic" />
    }
  }

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
                color: hoverEffects[route.key] ? textColor : secondaryColor,
                borderBottom: hoverEffects[route.key]
                  ? `.25em solid ${contrastTwo}`
                  : ".1em solid transparent",
              }}
              onMouseOver={() =>
                changeHoverEffects({ ...hoverEffects, [route.key]: true })
              }
              onMouseOut={() =>
                changeHoverEffects({ ...hoverEffects, [route.key]: false })
              }
            >
              {route.key}
            </Link>
            <Style.EffectHolder
              style={{
                visibility: hoverEffects[route.key] ? "visible" : "hidden",
              }}
            >
              {loadingEffect(route.key)}
            </Style.EffectHolder>
          </Style.RouteHolder>
        ))}
      </Style.ProjectLinksHolder>
    </Style.SplashHolder>
  )
}

export default Splash

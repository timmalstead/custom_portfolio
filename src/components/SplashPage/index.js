import React from "react"
import splashPhotos from "./splashPhotos"
import NavRoutes from "../../navRoutes"
import folioProjects from "../Projects/projects"
import TechIcons from "../Techs/techIcons"
import profilePic from "../About/profilePic.jpg"
import { Link } from "react-router-dom"
import * as Style from "./style"
import Context from "../../ThemeContext"

const Splash = () => {
  const {
    imgKey,
    mainColor,
    secondaryColor,
    textColor,
    contrastOne,
    contrastTwo,
    blendMode,
  } = React.useContext(Context).styles

  const [hoverEffects, changeHoverEffects] = React.useState(
    NavRoutes.reduce((hoverObj, route) => {
      hoverObj[route.key] = false
      return hoverObj
    }, {})
  )

  const loadingEffect = (route) => {
    switch (route) {
      case "Projects":
        const randNum = Math.floor(Math.random() * folioProjects.length)
        const randProject = folioProjects[randNum]
        return (
          <Style.ProjectImg
            style={{
              backgroundImage: `url(${randProject.fullImage})`,
              backgroundPosition: randProject.center ? "center" : "top",
              left: hoverEffects[route] ? "0em" : "75vw",
            }}
          />
        )
      case "Tools":
        const iconCopy = [...TechIcons]
        const iconBundle = []
        let screenDivisor =
          window.innerWidth >= 3000
            ? Math.floor(window.innerWidth / 625)
            : window.innerWidth >= 2200
            ? Math.floor(window.innerWidth / 400)
            : window.innerWidth >= 1500
            ? Math.floor(window.innerWidth / 300)
            : window.innerWidth >= 1000
            ? Math.floor(window.innerWidth / 250)
            : Math.ceil(window.innerWidth / 250)
        if (screenDivisor > TechIcons.length) screenDivisor = TechIcons.length
        for (let i = 0; i < screenDivisor; i++) {
          const randomNum = Math.floor(Math.random() * iconCopy.length)
          iconBundle.push(iconCopy[randomNum])
          iconCopy.splice(randomNum, 1)
        }
        return iconBundle.map((icon, i) => (
          <Style.EffectSvg
            key={i}
            viewBox="0 0 51 72"
            style={{
              left: hoverEffects[route] ? "0em" : "75vw",
              transition: `left ${0.075 * i + 0.5}s linear`,
            }}
          >
            {icon.path}
          </Style.EffectSvg>
        ))
      default:
        return (
          <Style.ProfileImg
            src={profilePic}
            alt="Profile Pic"
            style={{ left: hoverEffects[route] ? "0em" : "75vw" }}
          />
        )
    }
  }

  return (
    <Style.SplashHolder>
      <Style.ImageHolder
        style={{
          backgroundImage: `linear-gradient(${mainColor}00 50%, ${mainColor}FF), url(${splashPhotos[imgKey]})`,
        }}
      >
        <div>
          <Style.NameHolder
            style={{
              borderBottom: `.09em solid ${secondaryColor}`,
            }}
          >
            <Style.Name style={{ mixBlendMode: blendMode }}>
              Timothy Malstead
            </Style.Name>
          </Style.NameHolder>
          <Style.TypeEffect style={{ mixBlendMode: blendMode }} />
        </div>
        <Style.MadeWithLove>
          Made with{" "}
          <span role="img" aria-label="red-heart">
            ❤️
          </span>{" "}
          in React.JS
        </Style.MadeWithLove>
      </Style.ImageHolder>
      <Style.ProjectLinksHolder>
        {NavRoutes.map((route) => (
          <Style.RouteHolder key={route.key}>
            <Link
              key={route.key}
              to={route.path}
              style={{
                color: hoverEffects[route.key] ? contrastTwo : textColor,
                borderBottom: hoverEffects[route.key]
                  ? `.25em solid ${contrastOne}`
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

import React from "react"
import Loader from "./Loader"
import SiteFooter from "./Footer"
import Splash from "./SplashPage"
import NavBar from "./NavBar"
import NavRoutes from "./SiteRoutes"
import * as Router from "react-router-dom"
import Main from "./style"
import { createGlobalStyle } from "styled-components"
import { Provider } from "./ThemeContext"
const SiteHeader = React.lazy(() =>
  Promise.all([
    import("./Header"),
    new Promise((resolve) => setTimeout(resolve, 2000)),
  ]).then(([moduleExports]) => moduleExports)
)
//do a docker icon and... what else?

//how to transition between components mounting?

//refigure header layout, maybe a svg layout with a cool blend that is dynamically colored

//nice bright grad as an option

//for projects, hover over the pics and it will use a transition to size up the pic to make it bigger. probably do this with a transition

//do all the projects in a loop with things going => and <= for rhythm

//also bring in your app logos from your projects

//figure out what you want to have be dynamic in the theme. probably backgrounds,images,,
//colors of course and see if you can do dynamic favicons

//attach meta og tags to html file before you are done
const App = () => {
  const storage = window.localStorage

  const [styles, changeStyle] = React.useState({
    loadAnimations: storage.loadAnimations || true,
    mainColor: storage.mainColor || "#212123",
    secondaryColor: storage.secondaryColor || "#585b60",
    headerColor: storage.headerColor || "#212123",
    textColor: storage.textColor || "#eceff5",
    contrastOne: storage.constrastOne || "#d7d950",
  })

  const [headerBorder, changeHeaderBorder] = React.useState(true)

  const Global = createGlobalStyle`
    * {
      box-sizing:border-box;
    }

    body {
      margin:0;
      /* min-height:48em; */
      width: 100vw;
      background-color: ${styles.mainColor};
      color: ${styles.textColor};
      font-family: 'Lato', sans-serif;
    }
  `

  return (
    <Provider value={{ styles, changeStyle }}>
      <React.Suspense fallback={<Loader />}>
        <SiteHeader headerBorder={headerBorder} />
        <Main>
          <Router.Switch>
            <Router.Route exact path="/" render={() => <Splash />} />
            {NavRoutes.map((route) => (
              <Router.Route
                key={route.key}
                exact
                path={route.path}
                render={() => (
                  <React.Fragment>
                    <NavBar changeHeaderBorder={changeHeaderBorder} />
                    {route.comp}
                  </React.Fragment>
                )}
              />
            ))}
          </Router.Switch>
          <SiteFooter />
        </Main>
      </React.Suspense>
      <Global />
    </Provider>
  )
}

export default App

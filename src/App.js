import React from "react"
import Loader from "./Loader"
import SiteFooter from "./Footer"
import Splash from "./SplashPage"
import NavBar from "./NavBar"
import NavRoutes from "./navRoutes"
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

const App = () => {
  const storage = window.localStorage

  const [styles, changeStyle] = React.useState({
    name: storage.name || "Sleek",
    imgKey: storage.imgKey || 0,
    mainColor: storage.mainColor || "#212123",
    secondaryColor: storage.secondaryColor || "#585b60",
    textColor: storage.textColor || "#eceff5",
    headerColor: storage.headerColor || "#212123",
    headerSecondary: storage.headerSecondary || "#585b60",
    headerText: storage.headerText || "#eceff5",
    contrastOne: storage.constrastOne || "#d7d950",
    contrastTwo: storage.contrastTwo || "#68c2c8",
  })

  const [headerBorder, changeHeaderBorder] = React.useState(true)
  const [borderBounce, toggleBorderBounce] = React.useState(true)

  const Global = createGlobalStyle`
    * {
      box-sizing:border-box;
    }

    *::selection {
      background-color : ${styles.contrastTwo}
    }

    body {
      margin:0;
      min-height:48em;
      width: 100vw;
      background-color: ${styles.mainColor};
      color: ${styles.textColor};
      font-family: 'Lato', sans-serif;
    }

    a, .active::before {
      color: ${styles.textColor}
    }

    #root {
      min-height:inherit;
    }
  `

  return (
    <Provider value={{ styles, changeStyle }}>
      <React.Suspense fallback={<Loader />}>
        <SiteHeader
          headerBorder={headerBorder}
          toggleBorderBounce={toggleBorderBounce}
        />
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
                    <NavBar
                      changeHeaderBorder={changeHeaderBorder}
                      borderBounce={borderBounce}
                      toggleBorderBounce={toggleBorderBounce}
                    />
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

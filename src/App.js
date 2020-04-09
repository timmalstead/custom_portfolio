import React from "react"
import Loader from "./Loader"
import SiteFooter from "./Footer"
import Main from "./style"
import Splash from "./SplashPage"
import Projects from "./Projects"
import Techs from "./Techs"
import * as Router from "react-router-dom"
import { createGlobalStyle } from "styled-components"
import { Provider } from "./ThemeContext"
const SiteHeader = React.lazy(() =>
  Promise.all([
    import("./Header"),
    new Promise((resolve) => setTimeout(resolve, 2000)),
  ]).then(([moduleExports]) => moduleExports)
)
//do a docker icon and... what else?

//nice bright grad as an option

//for projects, hover over the pics and it will use a transition to size up the pic to make it bigger. probably do this with a transition

//do all the projects in a loop with things going => and <= for rhythm

//second drop down bar NOT available on main page, will be available on all others. projects, techs and about

//also bring in your app logos from your projects

//attach meta og tags to html file before you are done
const App = () => {
  const storage = window.localStorage

  const [styles, changeStyle] = React.useState({
    mainColor: `${storage.mainColor || "#212123"}`,
    secondaryColor: `${storage.secondaryColor || "#585b60"}`,
    headerColor: `${storage.headerColor || "#212123"}`,
    textColor: `${storage.textColor || "#eceff5"}`,
    contrastOne: `${storage.constrastOne || "#d7d950"}`,
  })

  const Global = createGlobalStyle`
    * {
      box-sizing:border-box;
    }

    body {
      margin:0;
      min-height:50em;
      width: 100vw;
      background-color: ${styles.mainColor};
      color: ${styles.textColor};
      font-family: 'Lato', sans-serif;
    }
  `

  return (
    <Provider value={{ styles, changeStyle }}>
      <React.Suspense fallback={<Loader />}>
        <SiteHeader />
        <Main>
          <Router.Switch>
            <Router.Route exact path="/" render={() => <Splash />} />
            <Router.Route
              exact
              path="/projects"
              render={() => (
                <div>
                  <Projects />
                  remember to put a sub bar here, will you need to adjust the
                  top the Main component?
                </div>
              )}
            />
            <Router.Route exact path="/techs" render={() => <Techs />} />
          </Router.Switch>
          <SiteFooter />
        </Main>
      </React.Suspense>
      <Global />
    </Provider>
  )
}

export default App

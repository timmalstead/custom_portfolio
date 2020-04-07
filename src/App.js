import React from "react"
import { Provider } from "./ThemeContext"
import { createGlobalStyle } from "styled-components"
import Loader from "./Loader"
const SiteHeader = React.lazy(() =>
  Promise.all([
    import("./Header"),
    new Promise((resolve) => setTimeout(resolve, 2000)),
  ]).then(([moduleExports]) => moduleExports)
)
// font-family: 'EB Garamond', serif;

//do a docker icon and... what else?
//nice bright grad as an option

//for projects, hover over the pics and it will use a transition to size up the pic to make it bigger. probably do this with a transition

//do all the projects in a loop with things going => and <= for rhythm

//second drop down bar NOT available on main page, will be available on all others. projects, techs and about

//also bring in your app logos from your projects
const App = () => {
  const storage = window.localStorage

  const [styles, changeStyle] = React.useState({
    mainColor: `${storage.mainColor || "#212123"}`,
    secondaryColor: `${storage.secondaryColor || "#585b60"}`,
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
      </React.Suspense>
      <Global />
    </Provider>
  )
}

export default App

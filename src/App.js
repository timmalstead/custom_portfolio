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

//so i will probably end up doing an array of objects for each of the themes i come up with and just iterating through them, targeting by tag. yes, that's what i think

// font-family: 'Lato', sans-serif;
// font-family: 'EB Garamond', serif;

//do a docker icon and... what else?
//nice bright grad as an option
//options in its own component?

//maybe tabs instead of one big page?

//for projects, hover over the pics and it will use a transition to size up the pic to make it bigger. maybe a box shadow as well. probably do this with a transition

//also, i think i'll do all the projects in a loop with things going => one way and <= and the other for rhythm

const App = () => {
  const storage = window.localStorage

  const [styles, changeStyle] = React.useState({
    mainColor: `${storage.mainColor || "#212123"}`,
    secondaryColor: `${storage.secondaryColor || "#585b60"}`,
    textColor: `${storage.textColor || "#eceff5"}`,
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

import React from "react"
import { createGlobalStyle } from "styled-components"
import Loader from "./Loader"
const SiteHeader = React.lazy(() =>
  Promise.all([
    import("./Header"),
    new Promise(resolve => setTimeout(resolve, 1500))
  ]).then(([moduleExports]) => moduleExports)
)

//spinner of my initials
//for spinner, how about a second and a half animation of my initials spinning from blurred to sharp with a hard light blend effect. something that will pop whether on a dark or light ground

//so i will probably end up doing an array of objects for each of the themes i come up with and just iterating through them, targeting by tag. yes, that's what i think

// font-family: 'Lato', sans-serif;
// font-family: 'EB Garamond', serif;

//do a docker icon and... what else?
//nice bright grad as an option
//options in its own component?
//guess it wouldn't be TOO hard to figure out a theme context
//and if i do end up doing that, then the context will connect right to the style component files

const App = () => {
  const [style, changeStyle] = React.useState({
    mainColor: "#212123",
    secondaryColor: "#585b60",
    textColor: "#eceff5"
  })

  const Global = createGlobalStyle`
    * {
      box-sizing:border-box;
    }

    body {
      margin:0;
      min-height:500em;
      width: 100vw;
      background-color: ${style.mainColor};
      color: ${style.textColor};
      font-family: 'Lato', sans-serif;
    }
  `

  return (
    <React.Suspense fallback={<Loader />}>
      <SiteHeader style={style} changeStyle={changeStyle} />
      <Global />
    </React.Suspense>
  )
}

export default App

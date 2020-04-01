import React from "react"
import { createGlobalStyle } from "styled-components"
import SiteHeader from "./Header"
import Loader from "./Loader"
const Techs = React.lazy(() =>
  Promise.all([
    import("./Techs"),
    new Promise(resolve => setTimeout(resolve, 1500))
  ]).then(([moduleExports]) => moduleExports)
)

//a spinner of my face? maybe?
//more likely something of my initials
//or strong diagonal transitions? maybe have them animated like anything?
//how animated do i want this to be? not too much. more restrained

//don't think i'll have to use context for the styling on this, but WILL have to use it for rando chat, whether it's for styling or data.

//so i will probably end up doing an array of objects for each of the themes i come up with and just iterating through them, targeting by tag. yes, that's what i think

// font-family: 'Lato', sans-serif;
// font-family: 'EB Garamond', serif;

//do a docker icon and... what else?
//nice bright grad as an option

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
      <Techs />
      <Global />
    </React.Suspense>
  )
}

export default App

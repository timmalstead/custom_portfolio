import React from "react"
import * as Styled from "./style"
import { Context } from "../ThemeContext"

const SiteHeader = () => {
  const { mainColor, secondaryColor } = React.useContext(Context).styles
  return (
    <Styled.Header
      style={{
        backgroundColor: `${mainColor}`,
        borderBottomColor: `${secondaryColor}`,
      }}
    >
      <Styled.Graphic />
      <Styled.Name>
        <span>Timothy</span>
        <span>Malstead</span>
      </Styled.Name>
      <Styled.Icons />
    </Styled.Header>
  )
}
//icons feature logo, projects, techs and settings
export default SiteHeader

// <Consumer>
//   {props => (
//     <Styled.Header
//       style={{
//         backgroundColor: `${props.styles.mainColor}`,
//         borderBottomColor: `${props.styles.secondaryColor}`
//       }}
//     >
//       <Styled.Graphic />
//       <Styled.Name>
//         <span>Timothy</span>
//         <span>Malstead</span>
//       </Styled.Name>
//       <Styled.Icons />
//     </Styled.Header>
//   )}
// </Consumer> */

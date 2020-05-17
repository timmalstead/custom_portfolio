import React from "react"
import * as Style from "./style"
import Context from "../../ThemeContext"
import ProfilePic from "./profilePic.jpg"

const parOne = `
  I am a Full Stack Software Developer and UI Designer
  with extensive experience in React and Node.js seeking 
  to help make this world a more beautiful and
  lively place. I focus on creating intuitive, elegant and visually
  pleasing software that simplifies the life of the end user.
`

const parTwo = `
  My technical acumen, combined with my creative and artistic
  history make me a unique and valuable team member on any project,
  large or small. I hope you'll take a look at my work and reach out.
  Together we can make something wonderful.
`

const About = () => {
  const { secondaryColor, contrastTwo } = React.useContext(Context).styles

  const [spinClick, setToSpin] = React.useState(false)

  const spinThenDelay = () => {
    setToSpin(true)
    setTimeout(() => {
      setToSpin(false)
    }, 500)
  }

  return (
    <Style.AboutHolder>
      <Style.Profile
        src={ProfilePic}
        alt="Profile Pic"
        onClick={() => spinThenDelay()}
        style={{ animation: spinClick ? "spin 0.5s ease-in-out" : null }}
      />
      <Style.Blurb>
        <h1>
          Let's Make Something <em style={{ color: contrastTwo }}>Wonderful</em>
        </h1>
        <span
          style={{
            borderTopColor: secondaryColor,
          }}
        />
        <p>Hello, I'm Timothy Malstead</p>
        <p>{parOne}</p>
        <p>{parTwo}</p>
      </Style.Blurb>
    </Style.AboutHolder>
  )
}

export default About

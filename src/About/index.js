import React from "react"
import * as Style from "./style"
import Context from "../ThemeContext"
import ProfilePic from "./profilePic.jpg"
import SelfPortrait from "./selfPortrait.png"

const aboutMe = `
  I am a Full Stack Software Developer, UI Designer and Illustrator 
  with extensive experience in React and Node.js seeking 
  to help make this world a more beautiful and
  lively place. I focus on creating intuitive, elegant and visually
  pleasing software that simplifies the life of the end user.
`

const About = () => {
  const { secondaryColor, contrastOne } = React.useContext(Context).styles

  const [profileSwitch, switchPics] = React.useState(ProfilePic)
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
        src={profileSwitch}
        alt="my mug"
        onMouseOver={() => switchPics(SelfPortrait)}
        onMouseOut={() => switchPics(ProfilePic)}
        onClick={() => spinThenDelay()}
        style={{ animation: spinClick ? "spin 0.5s ease-in-out" : null }}
      />
      <Style.Blurb>
        <h1>
          Let's Make Something <em style={{ color: contrastOne }}>Wonderful</em>
        </h1>
        <span
          style={{
            borderTopColor: secondaryColor,
          }}
        />
        <p>Hello, I'm Timothy Malstead</p>
        <p>{aboutMe}</p>
      </Style.Blurb>
    </Style.AboutHolder>
  )
}

export default About

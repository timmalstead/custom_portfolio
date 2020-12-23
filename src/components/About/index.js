import React from "react"
import * as Style from "./style"
import Context from "../../ThemeContext"
import ProfilePic from "./profilePic.jpg"

const parOne = `
  I am a full stack software engineer and designer seeking to help make the world a more just and equitable place through the use of beautiful, intuitive and helpful software. My goal is to create software that helps solve tough problems for real people. I approach each project with a careful eye toward design, ease of use and performance.
`

const parTwo = `
  I hope you'll take a look at my work and reach out.
  Together we can make something that matters.
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
          Let's Make Something That
          <em style={{ color: contrastTwo }}> Matters</em>
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

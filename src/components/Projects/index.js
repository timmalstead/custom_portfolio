import React from "react"
import folioProjects from "./projects"
import * as Style from "./style"
import Context from "../../ThemeContext"

const Projects = () => {
  const { mainColor, secondaryColor, contrastOne } = React.useContext(
    Context
  ).styles

  const [projectHover, changeProjectHover] = React.useState(
    folioProjects.reduce((hoverHolder, project) => {
      hoverHolder[project.title] = false
      return hoverHolder
    }, {})
  )

  const fullPics = folioProjects.reduce((arr, val) => {
    arr.push(val.fullImage)
    return arr
  }, [])

  const mobilePics = folioProjects.reduce((arr, val) => {
    arr.push(val.mobileImage || val.fullImage)
    return arr
  }, [])

  const [picturesToRender, changePictureSet] = React.useState(
    window.innerWidth > 800 ? fullPics : mobilePics
  )

  React.useEffect(() => {
    const firePictureChange = () => {
      window.innerWidth > 800
        ? changePictureSet(fullPics)
        : changePictureSet(mobilePics)
    }

    window.addEventListener("resize", firePictureChange)

    return () => window.removeEventListener("resize", firePictureChange)
  })

  const linkMaker = (link, content) => (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  )

  return (
    <Style.AllProjectsHolder>
      {folioProjects.map((project, i) => (
        <Style.SingleProjectHolder
          key={project.title}
          style={{
            flexDirection: i % 2 === 0 ? "row" : "row-reverse",
            backgroundColor: projectHover[project.title]
              ? secondaryColor
              : mainColor,
          }}
          onMouseOver={() =>
            changeProjectHover({ ...projectHover, [project.title]: true })
          }
          onMouseOut={() =>
            changeProjectHover({ ...projectHover, [project.title]: false })
          }
        >
          <Style.ImageHolder
            style={{ alignItems: project.center ? "center" : "flex-start" }}
          >
            {linkMaker(
              project.link,
              <Style.Image alt={project.title} src={picturesToRender[i]} />
            )}
          </Style.ImageHolder>
          <Style.InfoHolder>
            <Style.Title style={{ borderBottomColor: secondaryColor }}>
              {linkMaker(project.link, project.title)}
            </Style.Title>
            <Style.Role style={{ color: contrastOne }}>
              {project.role}
            </Style.Role>
            <Style.Description>{project.description}</Style.Description>
            {linkMaker(project.github, `View ${project.title} on GitHub`)}
          </Style.InfoHolder>
        </Style.SingleProjectHolder>
      ))}
    </Style.AllProjectsHolder>
  )
}

export default Projects

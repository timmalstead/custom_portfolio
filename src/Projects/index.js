import React from "react"
import folioProjects from "./projects"
import * as Style from "./style"
import Context from "../ThemeContext"

const Projects = () => {
  const { secondaryColor, contrastOne } = React.useContext(Context).styles

  const linkMaker = (link, content) => (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  )

  //need to center bottom three profile pics and unify lengths.

  return (
    <Style.AllProjectsHolder>
      {folioProjects.map((project, i) => (
        <Style.SingleProjectHolder
          key={project.title}
          style={{
            flexDirection: i % 2 === 0 ? "row" : "row-reverse",
          }}
        >
          <Style.ImageHolder
            style={{ alignItems: project.center ? "center" : "flex-start" }}
          >
            {linkMaker(
              project.link,
              <Style.Image alt={project.title} src={project.fullImage} />
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

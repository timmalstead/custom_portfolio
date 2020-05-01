import React from "react"
import folioProjects from "./projects"
import * as Style from "./style"
import Context from "../ThemeContext"

const Projects = () => {
  const { secondaryColor, contrastOne } = React.useContext(Context).styles

  return (
    <Style.AllProjectsHolder>
      {folioProjects.map((project, i) => (
        <Style.SingleProjectHolder
          key={project.title}
          style={{ flexDirection: i % 2 === 0 ? "row" : "row-reverse" }}
        >
          <Style.ImageHolder>
            <div>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Style.Image alt={project.title} src={project.thumb} />
              </a>
            </div>
          </Style.ImageHolder>
          <Style.InfoHolder>
            <Style.Title style={{ borderBottomColor: secondaryColor }}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            </Style.Title>
            <Style.Role style={{ color: contrastOne }}>
              {project.role}
            </Style.Role>
            <Style.Description>{project.description}</Style.Description>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </Style.InfoHolder>
        </Style.SingleProjectHolder>
      ))}
    </Style.AllProjectsHolder>
  )
}

export default Projects

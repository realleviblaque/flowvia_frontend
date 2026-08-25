import { useState } from "react"
import { openProjects } from "../../data/StatusPage/openProject"

export function ProjectSelector({isOpen, isRendered, setIsRendered, setIsOpen, onSelectProject, setSelectHeadText}) {
  const [projects, ] = useState(openProjects.filter(p => p.jobType === 'Public'));
  const handleSelectProject = (project) => {
    onSelectProject(project);
    setSelectHeadText(project.details.name)
    setIsOpen(false);
  }
  return (
    <div className={`project-selector ${isOpen && 'open'}`} style={{display: isRendered ? 'flex' : 'none'}} onTransitionEnd={() => {
      if (!isOpen) setIsRendered(false)
    }}>
      {projects.length === 0 && (
        <p className="empty">No project found</p>
      )}
      {projects.map((project) => {
        return (
          <div className="projects" key={project.id} onClick={() => handleSelectProject(project)}>
            <div className="left"> 
              
            </div>
            <div className="right">
              <p className="title">{project.details.name}</p>
              <p className="description">{project.details.description}</p>
              <div className="extra-info">
                <p className="details">{project.info.location} <span></span> {project.info.type}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
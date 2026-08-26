import { useEffect, useRef, useState } from "react"
import { openProjects } from "../../data/StatusPage/openProject"

export function ProjectSelector({isOpen, isRendered, setIsRendered, setIsOpen, onSelectProject, setSelectHeadText, search, setSearch, selectedId, setSelectedId}) {
  const [projects, setProjects] = useState(openProjects.filter(p => p.jobType === 'Public'));
  const searchRef = useRef(null)
  const handleSelectProject = (project) => {
    onSelectProject(project);
    setSelectHeadText(project.details.name)
    setSelectedId(project.id)
    setSearch('')
    setIsOpen(false);
  }
  useEffect(() => {
    const handleSearch = () => {
      if (search) {
        setProjects(openProjects.filter(p => p.jobType === 'Public').filter(p => p.details.name.toLowerCase().includes(search.toLowerCase().trim())))
      } else {
        setProjects(openProjects.filter(p => p.jobType === 'Public'))
      }
    }
    handleSearch();
  }, [search])
  useEffect(() => {
    if (isOpen) {
      searchRef.current.focus();
    }
  }, [isOpen])
  return (
    <div className={`project-selector ${isOpen && 'open'}`} style={{display: isRendered ? 'flex' : 'none'}} onTransitionEnd={() => {
      if (!isOpen) setIsRendered(false)
    }}>
      <div className="projects-search">
        <input ref={searchRef} type="text" placeholder="Search for a project..." onChange={e => setSearch(e.target.value)} value={search} />
        <i className="fa-solid fa-x" onClick={() => setSearch('')}></i>
      </div>
      <span className="line"></span>
      {projects.length === 0 && (
        <p className="empty">No project found</p>
      )}
      {projects.map((project) => {
        return (
          <div className={`projects ${selectedId === project.id ? 'active' : ''}`} key={project.id} onClick={() => handleSelectProject(project)}>
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
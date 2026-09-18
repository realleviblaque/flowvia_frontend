import { useEffect, useState } from 'react';
import { ProfilePageRightSidebar } from '../../../../components/ProfilePage/ProfilePageRightSidebar';
import { Projects } from '../../../../data/ProfilePage/projects';

import './ProjectSection.css'
import { statusTimeAgo } from '../../../../utils/statusTimeAgo';
import { useNavigate } from 'react-router-dom';

export function ProjectSection() {
  const [projects, setProjects] = useState([])
  const [filter, setFilter] = useState('All')
  const all = projects.length,
  ongoing = projects.filter(p => !p.isComplete).length,
  open = projects.filter(p => p.projectType === 'Public Project').length,
  completed = projects.filter(p => p.isComplete).length
  const naviage = useNavigate();
  useEffect(() => {
    const handleFilter = () => {
      switch (filter) {
        case 'All':
          setProjects(Projects)
          break;
        case 'Ongoing':
          setProjects(Projects.filter(p => !p.isComplete))
          break;
        case 'Open':
          setProjects(Projects.filter(p => p.projectType === 'Public Project'))
          break;
        case 'Completed':
          setProjects(Projects.filter(p => p.isComplete))
          break;
        default:
          setProjects(Projects)
          break;
      }
    }
    // handleFilter();
  }, [filter])
  const isMobile = window.innerWidth < 768;
  return (
    <section className="project-section">
      <div className="main-project-wrap">
        {projects.length >= 1 && (
          <div className="project-tab">
            <div className={filter === 'All' ? 'current' : ''} onClick={() => setFilter('All')}>All <span>{all}</span></div>
            <div className={filter === 'Ongoing' ? 'current' : ''} onClick={() => setFilter('Ongoing')}>Ongoing <span>{ongoing}</span></div>
            <div className={filter === 'Open' ? 'current' : ''} onClick={() => setFilter('Open')}>Open <span>{open}</span></div>
            <div className={filter === 'Completed' ? 'current' : ''} onClick={() => setFilter('Completed')}>Completed <span>{completed}</span></div>
            <button onClick={() => naviage('/projects')}>
              Go to Projects
            </button>
          </div>
        )}
        <div className="all-project-section">
          {projects.length === 0 && (
            <div className="empty-projects">
              <i className="fa-solid fa-feather-alt"></i>
              <p>No projects yet</p>
              <p>You have not work on any project!</p>
              <button>Create new Project</button>
            </div>
          )}
          <div className="project-wrapper">
            {projects.map((project) => {
              return (
                <div className="project-container" key={project.id}>
                  <div className={`left ${project.projectType === 'Client Project' && 'client-project-left'} ${project.projectType === 'Public Project' && 'public-project-left'}`}>
                    <span className={`project-type ${project.projectType === 'Client Project' && 'client-project-type'} ${project.projectType === 'Public Project' &&'public-project-type'}`}>
                      {project.projectType === 'Personal Project' && 'Personal'}
                      {project.projectType === 'Client Project' && 'Client'}
                      {project.projectType === 'Public Project' && 'Public'}
                    </span>
                  </div>
                  <div className="middle">
                    <div className="top">
                      <div className="title-content">
                        <p className="title">{project.name}</p>
                        {project.projectType !== 'Public Project' && (
                          <p className={`portfolio-status ${project.isPortfolio ? '' : 'not-active'}`}>{isMobile ? <span className={!project.isPortfolio ? 'not' : ''}></span> : 'Portfolio:'} {project.isPortfolio ? 'Active' : 'Inactive'}</p>
                        )}
                      </div>
                      <div className="link-content">
                        <p>Link to Project</p>
                        {project.isComplete && (
                          <>
                            <span></span>
                            <a href={project.linkToProject}>Go to Project</a>
                          </>
                        )}
                      </div>
                      <div className="description-content">
                        <p>{project.description}</p>
                      </div>
                    </div>
                    <div className="bottom">
                      <div className="project-info">
                        <div className="budget-info">
                          <p>Budget</p>
                          <p className={`project-budget ${project.projectType === 'Client Project' || project.projectType === 'Public Project' && 'budget-active'}`}>{project.projectType === 'Personal Project' ? 'Personal' : `${project.budget}`}</p>
                        </div>
                        <div className="duration-info">
                          <p>Duration</p>
                          <p className="project-duration">{project.duration ? `${project.duration}` : 'None'}</p>
                        </div>
                        <div className="status-info">
                          <p>Status</p>
                          <p className={`project-status ${project.isComplete && 'completed-status'}`}>{project.projectType === 'Public Project' && !project.isComplete ? 'Open' :project.isComplete ? 'Completed' : 'In Progress'}</p>
                        </div>
                        {project.projectType === 'Public Project' && (
                          <div className="type-info">
                            <p>Project Type</p>
                            <p className="project-client">{project.type}</p>
                          </div>
                        )}
                        {project.projectType === 'Client Project' && (
                          <div className="client-info">
                            <p>Client</p>
                            <p className="project-client">Levi Blaque</p>
                          </div>
                        )}
                        {project.projectType === 'Personal Project' && (
                          <div className="client-info">
                            <p>Client</p>
                            <p className="project-client">Personal</p>
                          </div>
                        )}
                      </div>
                      {project.totalPhase && (
                        <div className="phase-progress-wrap">
                          <p>Phases</p>
                          <div className="progress-bar-wrap">
                            <span className="progress-bar"></span>
                          </div>
                          {isMobile ? (
                            <div className="mobile-phase">
                              <p>Phase 2/{project.totalPhase} <span className="dot"></span> 2 Completed</p>
                            </div>
                          ) : (
                            <>
                              <p><span className="completed-phase">2</span> / <span className="all-phase">{project.totalPhase}</span></p>
                              <span className="dot"></span>
                              <p><span className="completed-phase">2</span> Completed</p>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="right">
                    <div className="top">
                      <p>{statusTimeAgo(project.createdAt)}</p>
                    </div>
                    <div className="bottom">
                      <button className="view-project-btn">View Full Project</button>
                      <button className="edit-project-btn">Edit Project</button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <ProfilePageRightSidebar />
    </section>
  )
}
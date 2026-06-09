import { useState } from "react";
import { TeamProfilePageRightSidebar } from "../TeamProfilePageRightSidebar";
import { TeamProjects } from "../../../../data/TeamPage/TeamProject/TeamProjects";
import { useNavigate } from "react-router-dom";

export function TeamProjectSection() {
  const [projectView, setProjectView] = useState('All')
  const allCount = TeamProjects.length;
  const navigate = useNavigate();
  return (
    <>
      <div className="main-project-wrap">
        <div className="project-tab">
          <div className={projectView === 'All' && 'current'} onClick={() => setProjectView('All')}>All <span>{allCount}</span></div>
          <div className={projectView === 'Ongoing' && 'current'} onClick={() => setProjectView('Ongoing')}>Ongoing <span>0</span></div>
          <div className={projectView === 'Open' && 'current'} onClick={() => setProjectView('Open')}>Open <span>0</span></div>
          <div className={projectView === 'Completed' && 'current'} onClick={() => setProjectView('Completed')}>Completed <span>0</span></div>
          <button onClick={() => {
            navigate('/team/projects')
          }}>
            Go to Projects
          </button>
        </div>
        <div className="all-project-section">
          <div className="project-wrapper">
            {TeamProjects.slice().reverse().map((project) => {
              return (
                <div className="project-container">
                  <div className={`left ${project.projectType === 'Client Project' && 'client-project-left'} ${project.projectType === 'Public Project' && 'public-project-left'}`}>
                    <span className={`project-type ${project.projectType === 'Client Project' && 'client-project-type'} ${project.projectType === 'Public Project' &&'public-project-type'}`}>
                      {project.projectType === 'Team Project' && 'Team'}
                      {project.projectType === 'Client Project' && 'Client'}
                      {project.projectType === 'Public Project' && 'Public'}
                    </span>
                  </div>
                  <div className="middle">
                    <div className="top">
                      <div className="title-content">
                        <p className="title">{project.name}</p>
                        {project.projectType !== 'Public Project' && (
                          <p className={`portfolio-status ${project.isPortfolio ? '' : 'not-active'}`}>Portfolio: {project.isPortfolio ? 'Active' : 'Inactive'}</p>
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
                          <p className={`project-budget ${project.projectType === 'Client Project' || project.projectType === 'Public Project' && 'budget-active'}`}>{project.projectType === 'Team Project' ? 'Team' : `${project.budget}`}</p>
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
                        {project.projectType === 'Team Project' && (
                          <div className="client-info">
                            <p>Client</p>
                            <p className="project-client">Team</p>
                          </div>
                        )}
                      </div>
                      <div className="phase-progress-wrap">
                        <p>Phases</p>
                        <div className="progress-bar-wrap">
                          <span className="progress-bar"></span>
                        </div>
                        <p><span className="completed-phase">2</span> / <span className="all-phase">{project.totalPhase}</span></p>
                        <span className="dot"></span>
                        <p><span className="completed-phase">2</span> Completed</p>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <div className="top">
                      <p>Updatetd 2 days ago</p>
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
      <TeamProfilePageRightSidebar />
    </>
  )
}
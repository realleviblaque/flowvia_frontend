import { useState } from "react";
import { GeneralSidebar } from "../../../../components/TeamPage/GeneralSidebar";
import { TeamSidebar } from "../../../../components/TeamPage/TeamSidebar";
import './TeamProject.css'
import { TeamProjects } from "../../../../data/TeamPage/TeamProject/TeamProjects";

export function TeamProject({all}) {
  const [projectView, setProjectView] = useState('all');
  return (
    <>
      <GeneralSidebar notification={all} />
      <TeamSidebar />
      <main className="teamPageMain">
        <header className="team-project-header">
          <div className="left">
            <i className="fa-regular fa-folder"></i>
            <div className="info">
              <p className="hd-txt">Projects</p>
              <div>
                3 active 
                <span></span>
                5 completed
              </div>
            </div>
          </div>
          <div className="middle">
            <input type="text" placeholder="Search projects..." />
          </div>
          <div className="right">
            <select>
              <option value="all">All Projects</option>
              <option value="team">Team Projects</option>
              <option value="clinet">Client Projects</option>
            </select>
            <button>
              <i className="fa-solid fa-plus"></i>
              New Project
            </button>
          </div>
        </header>
        <div className="project-head-display">
          <div>
            <p className="count total">29</p>
            <p className="txt">TOTAL PROJECTS</p>
            <p className="info total">3 this month</p>
          </div>
          <div>
            <p className="count active">6</p>
            <p className="txt">ONGOING</p>
            <p className="info active">Active now</p>
          </div>
          <div>
            <p className="count complete">21</p>
            <p className="txt">COMPLETED</p>
            <p className="info complete">2 this month</p>
          </div>
          <div>
            <p className="count hold">2</p>
            <p className="txt">ON HOLD</p>
            <p className="info hold">Needs attention</p>
          </div>
        </div>
        <div className="project-head-nav">
          <div className={projectView === 'all' ? 'active' : ''} onClick={() => setProjectView('all')}>
            All Projects
            <span>24</span>
          </div>
          <div className={projectView === 'ongoing' ? 'active' : ''} onClick={() => setProjectView('ongoing')}>
            Ongoing
            <span>8</span>
          </div>
          <div className={projectView === 'completed' ? 'active' : ''} onClick={() => setProjectView('completed')}>
            Completed
            <span>14</span>
          </div>
          <div className={projectView === 'hold' ? 'active' : ''} onClick={() => setProjectView('hold')}>
            On Hold
            <span>2</span>
          </div>
        </div>
        <div className="project-content">
          {TeamProjects.map((project) => {
            return (
              project.projectType !== 'Public Project' && (
                <div key={project.id} className="project-container">
                  <div className={`left  ${project.projectType === 'Team Project' ? '' : 'client-project-left'}`}>
                    <span className={`project-type ${project.projectType === 'Team Project' ? '' : 'client-project-type'}`}>{project.projectType === 'Team Project' ? 'Team' : 'Client'}</span>
                  </div>
                  <div className="middle">
                    <div className="top">
                      <div className="title-content">
                        <p className="title">{project.name}</p>
                        <p className={`portfolio-status ${project.isPortfolio ? '' : 'not-active'}`}>Portfolio: {project.isPortfolio ? 'Active' : 'Inactive'}</p>
                      </div>
                      <div className="link-content">
                        <p>Link to Project</p>
                        {project.isComplete && (
                          <>
                            <span></span>
                            <a href={`${project.linkToProject}`}>Go to Project</a>
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
                          <p className={`project-budget ${project.projectType === 'Team Project' ? '' : 'budget-active'}`}>{project.projectType === 'Team Project' ? 'Team' : `${project.budget}`}</p>
                        </div>
                        <div className="duration-info">
                          <p>Duration</p>
                          <p className="project-duration">{project.duration ? `${project.duration}` : 'None'}</p>
                        </div>
                        <div className="status-info">
                          <p>Status</p>
                          <p className={`project-status ${project.isComplete ? 'completed-status' : ''}`}>{project.isComplete ? 'Completed' : 'In Progress'}</p>
                        </div>
                        <div className="client-info">
                          <p>Client</p>
                          <p className="project-client">-------</p>
                        </div>
                      </div>
                      {project.totalPhase && (
                        <div className="phase-progress-wrap">
                          <p>Phases</p>
                          <div className="progress-bar-wrap">
                            <span className="progress-bar"></span>
                          </div>
                          <p><span className="completed-phase">{project.completedPhase}</span> / <span className="all-phase">{project.totalPhase}</span></p>
                          <span className="dot"></span>
                          <p><span className="completed-phase">{project.completedPhase}</span> Completed</p>
                        </div>
                      )}
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
            )
          })}
        </div>
      </main>
    </>
  )
}
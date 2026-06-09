import { ProjectPageHeader } from "../../components/ProjectPage/ProjectPageHeader";
import { SideBar } from "../../components/Sidebar";
import { Projects } from "../../data/ProjectPage/Projects";
import './ProjectPage.css'

export function ProjectPage({all}) {
  return (
    <>
      <SideBar notification={all} />

      <ProjectPageHeader />

      <main className="project-main">
        <div className="project-main-head">
          <div>
            <p className="total-project-count">29</p>
            <p>TOTAL PROJECTS</p>
            <p className="total-project-increase">3 this month</p>
          </div>
          <div>
            <p className="ongoing-project-count">6</p>
            <p>ONGOING</p>
            <p className="ongoing-project-status">Active now</p>
          </div>
          <div>
            <p className="completed-project-count">21</p>
            <p>COMPLETED</p>
            <p className="completed-project-increase">2 this month</p>
          </div>
          <div>
            <p className="hold-project-count">2</p>
            <p>ON HOLD</p>
            <p className="hold-project-status">Needs attention</p>
          </div>
        </div>
        <div className="main-tab">
          <div className="all-my-project tab-open">
            <p>All Projects</p>
            <span className="total-project-count">24</span>
          </div>
          <div className="all-my-ongoing">
            <p>Ongoing</p>
            <span className="ongoing-project-count">8</span>
          </div>
          <div className="all-my-completed">
            <p>Completed</p>
            <span className="completed-project-count">14</span>
          </div>
          <div className="all-my-hold">
            <p>On Hold</p>
            <span className="hold-project-count">2</span>
          </div>
        </div>
        <div className="project-content">
          {Projects.map((project) => {
            return (
              project.projectType !== 'Public Project' && (
                <div key={project.id} className="project-container">
                  <div className={`left  ${project.projectType === 'Personal Project' ? '' : 'client-project-left'}`}>
                    <span className={`project-type ${project.projectType === 'Personal Project' ? '' : 'client-project-type'}`}>{project.projectType === 'Personal Project' ? 'Personal' : 'Client'}</span>
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
                          <p className={`project-budget ${project.projectType === 'Personal Project' ? '' : 'budget-active'}`}>{project.projectType === 'Personal Project' ? 'Personal' : `${project.budget}`}</p>
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
                          <p><span className="completed-phase">2</span> / <span className="all-phase">{project.totalPhase}</span></p>
                          <span className="dot"></span>
                          <p><span className="completed-phase">2</span> Completed</p>
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
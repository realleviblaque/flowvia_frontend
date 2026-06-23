import { useState } from "react";
import { BottomBar } from "../../components/BottomBar";
import { MobileHeader } from "../../components/MobileHeader";
import { Modal } from "../../components/Modal";
import { PlusModal } from "../../components/PlusModal";
import { ProjectPageHeader } from "../../components/ProjectPage/ProjectPageHeader";
import { SideBar } from "../../components/Sidebar";
import { Projects } from "../../data/ProjectPage/Projects";
import './ProjectPage.css'

export function ProjectPage({all, handleDialogOpen, handleDialogClose, dialog, hadnlePlusDialogOpen, hadnlePlusDialogClose, plusDialog}) {
  const isMobile = window.innerWidth < 768;
  const [projectNavFilter, setProjectNavFilter] = useState('All')
  return (
    <>
      <SideBar notification={all} />

      <ProjectPageHeader />
      <MobileHeader handleDialogOpen={handleDialogOpen} />
      <Modal dialog={dialog} handleDialogClose={handleDialogClose} />
      <main className="project-main">
        <div className="project-main-head">
          <div>
            <p className="total-project-count">29</p>
            <p>TOTAL {isMobile ? '' : 'PROJECTS'}</p>
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
          <div className={projectNavFilter === 'All' ? 'tab-open' : ''} onClick={() => setProjectNavFilter('All')}>
            <p>All Projects</p>
            <span className="total-project-count">24</span>
          </div>
          <div className={projectNavFilter === 'Ongoing' ? 'tab-open' : ''} onClick={() => setProjectNavFilter('Ongoing')}>
            <p>Ongoing</p>
            <span className="ongoing-project-count">8</span>
          </div>
          <div className={projectNavFilter === 'Completed' ? 'tab-open' : ''} onClick={() => setProjectNavFilter('Completed')}>
            <p>Completed</p>
            <span className="completed-project-count">14</span>
          </div>
          <div className={projectNavFilter === 'Hold' ? 'tab-open' : ''} onClick={() => setProjectNavFilter('Hold')}>
            <p>On Hold</p>
            <span className="hold-project-count">2</span>
          </div>
          {isMobile && (
            <select className="filter-project" style={{display: 'block'}}>
              <option value="all">All Projects</option>
              <option value="personal">Personal Projects</option>
              <option value="client">Client Projects</option>
            </select>
          )}
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
                        <p className={`portfolio-status ${project.isPortfolio ? '' : 'not-active'}`}>{isMobile ? <span className={!project.isPortfolio ? 'not' : ''}></span> : 'Portfolio:'} {project.isPortfolio ? 'Active' : 'Inactive'}</p>
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
      <BottomBar hadnlePlusDialogOpen={hadnlePlusDialogOpen} />
      <PlusModal plusDialog={plusDialog} hadnlePlusDialogClose={hadnlePlusDialogClose} />
    </>
  )
}
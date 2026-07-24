import { SideBar } from "../../../components/Sidebar";
import { StatusSectionHeader } from "../../../components/StatusPage/StatusSectionsHeader";
import './AppliedJob.css'

export function AppliedJob({all}) {
  const isMobile = window.innerWidth < 768;
  return (
    <>
      <SideBar notification={all} />
      <StatusSectionHeader />
      <main className="status-applied-job-main">
        <div className="top-side">
          <div>
              <p className="application">5</p>
              <p className="txt">Application</p>
          </div>
          <div>
            <p className="pending">2</p>
            <p className="txt">Pending Review</p>
          </div>
          <div>
            <p className="review">3</p>
            <p className="txt">In Review</p>
          </div>
          <div>
            <p className="avg-applicant">12</p>
            <p className="txt">Accepted</p>
          </div>
        </div>
        <div className="nav-wrap">
          <div className="left">
            <div className='active'>All (5)</div>
            <div>Pending (2)</div>
            <div>In Review (3)</div>
            <div>Accepted (0)</div>
            <div>Declined (0)</div>
          </div>
          <div className="right">
            <div className="search-wrap">
              <i className="fa-solid fa-search"></i>
              <input type="text" placeholder="Search applications..." />
            </div>
          </div>
        </div>
        <div className="projects-container">
          <div className="wrapper">
            <div className="top">
              <div className="up">
                <div className="first-top">
                  <div className="left">
                    <div className="review">In Review</div>
                  </div>
                  <div className="right">
                    Applied 3 days ago
                  </div>
                </div>
                <p className="title">React Developer needed - SaaS Dashboard</p>
                <p className="description">Full-time contact position building a SaaS analyics dashboard with custom charts, real-time data, and an admin portal.</p>
              </div>
              <div className="middle">
                <div className="client-wrap">
                  <div className="left">
                    <img src='/profile.png'/>
                    <div>
                      <p className="name">Zara Tanaka</p>
                      <p className="user-details">@zaratanaka <span></span> Reccruiter <span></span> Editech Startuo</p>
                    </div>
                  </div>
                  <div className="right">
                    <i className="fa-solid fa-chevron-right"></i>
                  </div>
                </div>
                <div className="project-info-wrap">
                  <div>
                    <p className="txt">Budget</p>
                    <p className="budget">$2K-$5K</p>
                  </div>
                  <div>
                    <p className="txt">Type</p>
                    <p className="deadline">Full-time</p>
                  </div>
                  <div>
                    <p className="txt">Deadline</p>
                    <p className="deadline">May 15</p>
                  </div>
                  <div>
                    <p className="txt">Applicants</p>
                    <p className="days">12</p>
                  </div>
                </div>
                <div className="skills-wrap">
                  <span>React</span>
                  <span>D3.js</span>
                  <span>TypeScript</span>
                  <span>Rest APIs</span>
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="left">
                <button>View Job {isMobile ? '' : 'Post'}</button>
                {isMobile ? (
                  <i className="fa-regular fa-message"></i>                  
                ) : (
                    <button>Message Client</button>
                )}
              </div>
              <div className="right">
                <button>Withdraw</button>
              </div>
            </div>
          </div>
          {/* {projects.length === 0 && (
            <div className="empty-state">
              <i className="fa-solid fa-inbox"></i>
              <p>
                {search.trim()
                  ? `No projects found for "${search.trim()}"`
                  : 'No projects found'
                }
              </p>
            </div>
          )} */}
          {/* {projects.map((project) => {
            const totalPhase = project.phases.length;
            const completedPhase = project.phases.filter(p => p.isComplete).length;
            const progress = (completedPhase / totalPhase) * 100;
            return (
              <div className="wrapper" key={project.id}>
                <div className="top">
                  <div className="up">
                    <div className="first-top">
                      <div className="left">
                        <div className="project-type">{project.createdFrom}</div>
                        {project.isPaused ? (<div className="paused"><span></span> Paused</div>) : (<div className="active"><span></span> Active</div>)}
                      </div>
                      <div className="right">
                        Started {dayjs(project.createdAt).format('MMM d')}
                      </div>
                    </div>
                    <p className="title">{project.details.name}</p>
                    <p className="description">{project.details.description}</p>
                  </div>
                  <div className="middle">
                    <div className="client-wrap">
                      <div className="left">
                        <img src={project.client.image}/>
                        <div>
                          <p className="name">{project.client.name}</p>
                          <p className="user-details">@{project.client.username} <span></span> {project.client.accountType}</p>
                        </div>
                      </div>
                      <div className="right">
                        <i className="fa-solid fa-chevron-right"></i>
                      </div>
                    </div>
                    <div className="project-info-wrap">
                      <div>
                        <p className="txt">Budget</p>
                        <p className="budget">${formatCount(project.info.budget)}</p>
                      </div>
                      <div>
                        <p className="txt">Deadline</p>
                        <p className="deadline">{dayjs(project.info.deadline).format('MMM d')}</p>
                      </div>
                      <div>
                        <p className="txt">Days Left</p>
                        <p className="days">{project.info.daysLeft}</p>
                      </div>
                      <div>
                        <p className="txt">Tasks</p>
                        <p className="task">{project.info.completedTask}/{project.info.totalTask}</p>
                      </div>
                    </div>
                    <div className="phase-wrap">
                      {project.phases.map((phase) => {
                        return (
                          <div className={phase.isComplete ? 'completed' : ''} key={phase.id}>
                            <span></span>
                            {isMobile ? (
                              <p>{phase.name}</p>
                            ) : phase.name}
                          </div>
                        )
                      })}
                    </div>
                    <div className="progress-wrap">
                      <div className="top-up">
                        <p className="progress-count">Progress <span></span> Phase {completedPhase}/{totalPhase}</p>
                        <p className="progress-percent">{progress}%</p>
                      </div>
                      <div className="progress-bar">
                        <span className="bar" style={{width: `${progress}%`}}></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom">
                  <div className="left">
                    <button>View {isMobile ? '' : 'Peoject'}</button>
                    {isMobile ? (
                      <i className="fa-regular fa-message"></i>                  
                    ) : (
                        <button>Message Client</button>
                    )}
                    <button>Mark {isMobile ? '' : 'Delivered'}</button>
                  </div>
                  <div className="right">
                    <button>Pause</button>
                  </div>
                </div>
              </div>
            )
          })} */}
        </div>
      </main>
    </>
  )
}
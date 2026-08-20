import { useEffect, useState } from "react";
import { BottomBar } from "../../components/BottomBar";
import { MobileHeader } from "../../components/MobileHeader";
import { Modal } from "../../components/Modal";
import { PlusModal } from "../../components/PlusModal";
import { ProjectPageHeader } from "../../components/ProjectPage/ProjectPageHeader";
import { SideBar } from "../../components/Sidebar";
import { Projects } from "../../data/ProjectPage/Projects";
import './ProjectPage.css'
import formatCount from "../../utils/formatCount";
import { statusTimeAgo } from "../../utils/statusTimeAgo";
import dayjs from "../../lib/dayjs";

export function ProjectPage({all, handleDialogOpen, handleDialogClose, dialog, hadnlePlusDialogOpen, hadnlePlusDialogClose, plusDialog}) {
  const [projects, setProjects] = useState(Projects);
  const [filter, setFilter] = useState('All');
  const [topFiler, setTopFilter] = useState('all');
  const [search, setSearch] = useState('')
  const ongoing = projects.filter(p => p.status === 'In Progress').length;
  const completed = projects.filter(p => p.status === 'Completed').length;
  const onHold = projects.filter(p => p.status === 'On Hold').length;
  const thisMonth = projects.filter(p => dayjs(p.createdAt).month() === dayjs().month()).length;
  const completedThisMonth = projects.filter(p => dayjs(p.createdAt).month() === dayjs().month() && p.status === 'Completed').length;
  useEffect(() => {
    const handleTopFiler = () => {
      switch (topFiler) {
        case 'all':
          setProjects(Projects)
          break;
        case 'personal':
          setProjects(Projects.filter(p => p.projectType === 'Personal'))
          break;
        case 'client':
          setProjects(Projects.filter(p => p.projectType === 'Client'))
          break;
        default:
          setProjects(Projects)
          break;
      }
    }
    handleTopFiler();
  }, [topFiler])
  useEffect(() => {
    const handleFilter = () => {
      const Personal = Projects.filter(p => p.projectType === 'Personal');
      const Client = Projects.filter(p => p.projectType === 'Client');
      if (topFiler === 'all') {
        switch (filter) {
          case 'All':
            setProjects(Projects)
            break;
          case 'Ongoing':
            setProjects(Projects.filter(p => p.status === 'In Progress'))
            break;
          case 'Completed':
            setProjects(Projects.filter(p => p.status === 'Completed'))
            break;
          case 'Hold':
            setProjects(Projects.filter(p => p.status === 'On Hold'))
            break;
          default:
            setProjects(Projects)
            break;
        }
      } else if (topFiler === 'personal') {
        switch (filter) {
          case 'All':
            setProjects(Personal)
            break;
          case 'Ongoing':
            setProjects(Personal.filter(p => p.status === 'In Progress'))
            break;
          case 'Completed':
            setProjects(Personal.filter(p => p.status === 'Completed'))
            break;
          case 'Hold':
            setProjects(Personal.filter(p => p.status === 'On Hold'))
            break;
          default:
            setProjects(Personal)
            break;
        }
      } else if (topFiler === 'client') {
        switch (filter) {
          case 'All':
            setProjects(Client)
            break;
          case 'Ongoing':
            setProjects(Client.filter(p => p.status === 'In Progress'))
            break;
          case 'Completed':
            setProjects(Client.filter(p => p.status === 'Completed'))
            break;
          case 'Hold':
            setProjects(Client.filter(p => p.status === 'On Hold'))
            break;
          default:
            setProjects(Client)
            break;
        }
      }
    }
    handleFilter();
  }, [topFiler, filter]);
  useEffect(() => {
    const handleSearch = () => {
      const Personal = Projects.filter(p => p.projectType === 'Personal');
      const Client = Projects.filter(p => p.projectType === 'Client');
      if (search.trim()) {
        if (topFiler === 'all') {
          switch (filter) {
            case 'All':
              setProjects(Projects.filter(p => 
                p.details.title.toLowerCase().includes(search.toLowerCase().trim())
                || p.info.client?.name.toLowerCase().includes(search.toLowerCase().trim())
              ))
              break;
            case 'Ongoing':
              setProjects(Projects.filter(p => p.status === 'In Progress').filter(p => 
                p.details.title.toLowerCase().includes(search.toLowerCase().trim())
                || p.info.client?.name.toLowerCase().includes(search.toLowerCase().trim())
              ))
              break;
            case 'Completed':
              setProjects(Projects.filter(p => p.status === 'Completed').filter(p => 
                p.details.title.toLowerCase().includes(search.toLowerCase().trim())
                || p.info.client?.name.toLowerCase().includes(search.toLowerCase().trim())
              ))
              break;
            case 'Hold':
              setProjects(Projects.filter(p => p.status === 'On Hold').filter(p => 
                p.details.title.toLowerCase().includes(search.toLowerCase().trim())
                || p.info.client?.name.toLowerCase().includes(search.toLowerCase().trim())
              ))
              break;
            default:
              setProjects(Projects.filter(p => 
                p.details.title.toLowerCase().includes(search.toLowerCase().trim())
                || p.info.client?.name.toLowerCase().includes(search.toLowerCase().trim())
              ))
              break;
          }
        } else if (topFiler === 'personal') {
          switch (filter) {
            case 'All':
              setProjects(Personal.filter(p => 
                p.details.title.toLowerCase().includes(search.toLowerCase().trim())
                || p.info.client?.name.toLowerCase().includes(search.toLowerCase().trim())
              ))
              break;
            case 'Ongoing':
              setProjects(Personal.filter(p => p.status === 'In Progress').filter(p => 
                p.details.title.toLowerCase().includes(search.toLowerCase().trim())
                || p.info.client?.name.toLowerCase().includes(search.toLowerCase().trim())
              ))
              break;
            case 'Completed':
              setProjects(Personal.filter(p => p.status === 'Completed').filter(p => 
                p.details.title.toLowerCase().includes(search.toLowerCase().trim())
                || p.info.client?.name.toLowerCase().includes(search.toLowerCase().trim())
              ))
              break;
            case 'Hold':
              setProjects(Personal.filter(p => p.status === 'On Hold').filter(p => 
                p.details.title.toLowerCase().includes(search.toLowerCase().trim())
                || p.info.client?.name.toLowerCase().includes(search.toLowerCase().trim())
              ))
              break;
            default:
              setProjects(Personal.filter(p => 
                p.details.title.toLowerCase().includes(search.toLowerCase().trim())
                || p.info.client?.name.toLowerCase().includes(search.toLowerCase().trim())
              ))
              break;
          }
        } else if (topFiler === 'client') {
          switch (filter) {
            case 'All':
              setProjects(Client.filter(p => 
                p.details.title.toLowerCase().includes(search.toLowerCase().trim())
                || p.info.client?.name.toLowerCase().includes(search.toLowerCase().trim())
              ))
              break;
            case 'Ongoing':
              setProjects(Client.filter(p => p.status === 'In Progress').filter(p => 
                p.details.title.toLowerCase().includes(search.toLowerCase().trim())
                || p.info.client?.name.toLowerCase().includes(search.toLowerCase().trim())
              ))
              break;
            case 'Completed':
              setProjects(Client.filter(p => p.status === 'Completed').filter(p => 
                p.details.title.toLowerCase().includes(search.toLowerCase().trim())
                || p.info.client?.name.toLowerCase().includes(search.toLowerCase().trim())
              ))
              break;
            case 'Hold':
              setProjects(Client.filter(p => p.status === 'On Hold').filter(p => 
                p.details.title.toLowerCase().includes(search.toLowerCase().trim())
                || p.info.client?.name.toLowerCase().includes(search.toLowerCase().trim())
              ))
              break;
            default:
              setProjects(Client.filter(p => 
                p.details.title.toLowerCase().includes(search.toLowerCase().trim())
                || p.info.client?.name.toLowerCase().includes(search.toLowerCase().trim())
              ))
              break;
          }
        }
      } else {
        if (topFiler === 'all') {
          switch (filter) {
            case 'All':
              setProjects(Projects)
              break;
            case 'Ongoing':
              setProjects(Projects.filter(p => p.status === 'In Progress'))
              break;
            case 'Completed':
              setProjects(Projects.filter(p => p.status === 'Completed'))
              break;
            case 'Hold':
              setProjects(Projects.filter(p => p.status === 'On Hold'))
              break;
            default:
              setProjects(Projects)
              break;
          }
        } else if (topFiler === 'personal') {
          switch (filter) {
            case 'All':
              setProjects(Personal)
              break;
            case 'Ongoing':
              setProjects(Personal.filter(p => p.status === 'In Progress'))
              break;
            case 'Completed':
              setProjects(Personal.filter(p => p.status === 'Completed'))
              break;
            case 'Hold':
              setProjects(Personal.filter(p => p.status === 'On Hold'))
              break;
            default:
              setProjects(Personal)
              break;
          }
        } else if (topFiler === 'client') {
          switch (filter) {
            case 'All':
              setProjects(Client)
              break;
            case 'Ongoing':
              setProjects(Client.filter(p => p.status === 'In Progress'))
              break;
            case 'Completed':
              setProjects(Client.filter(p => p.status === 'Completed'))
              break;
            case 'Hold':
              setProjects(Client.filter(p => p.status === 'On Hold'))
              break;
            default:
              setProjects(Client)
              break;
          }
        }
      }
    }
    handleSearch()
  }, [search, filter, topFiler])
  const isMobile = window.innerWidth < 768;
  return (
    <>
      <SideBar notification={all} />

      <ProjectPageHeader setTopFilter={setTopFilter} search={search} setSearch={setSearch} />
      <MobileHeader handleDialogOpen={handleDialogOpen} />
      <Modal dialog={dialog} handleDialogClose={handleDialogClose} />
      <main className="project-main">
        <div className="project-main-head">
          <div>
            <p className="total-project-count">{projects.length}</p>
            <p>TOTAL {isMobile ? '' : 'PROJECTS'}</p>
            <p className="total-project-increase">{thisMonth} this month</p>
          </div>
          <div>
            <p className="ongoing-project-count">{ongoing}</p>
            <p>ONGOING</p>
            <p className="ongoing-project-status">Active now</p>
          </div>
          <div>
            <p className="completed-project-count">{completed}</p>
            <p>COMPLETED</p>
            <p className="completed-project-increase">{completedThisMonth} this month</p>
          </div>
          <div>
            <p className="hold-project-count">{onHold}</p>
            <p>ON HOLD</p>
            <p className="hold-project-status">Needs attention</p>
          </div>
        </div>
        <div className="main-tab">
          {isMobile ? (
            <>
              <div className="top-side">
                <div className={filter === 'All' ? 'tab-open' : ''} onClick={() => setFilter('All')}>
                  <p>All Projects</p>
                </div>
                <div className={filter === 'Ongoing' ? 'tab-open' : ''} onClick={() => setFilter('Ongoing')}>
                  <p>Ongoing</p>
                </div>
                <div className={filter === 'Completed' ? 'tab-open' : ''} onClick={() => setFilter('Completed')}>
                  <p>Completed</p>
                </div>
                <div className={filter === 'Hold' ? 'tab-open' : ''} onClick={() => setFilter('Hold')}>
                  <p>On Hold</p>
                </div>
                <select className="filter-project" style={{display: 'block'}} onChange={e => setTopFilter(e.target.value)}>
                  <option value="all">All Projects</option>
                  <option value="personal">Personal Projects</option>
                  <option value="client">Client Projects</option>
                </select>
              </div>
              <div className="search-wrap">
                <i className="fa-solid fa-search"></i>
                <input type="text" placeholder="Search projects..." value={search} onChange={(e) => setSearch(e.target.value)} />
              </div>
            </>
          ) : (
            <>
              <div className={filter === 'All' ? 'tab-open' : ''} onClick={() => setFilter('All')}>
                <p>All Projects</p>
              </div>
              <div className={filter === 'Ongoing' ? 'tab-open' : ''} onClick={() => setFilter('Ongoing')}>
                <p>Ongoing</p>
              </div>
              <div className={filter === 'Completed' ? 'tab-open' : ''} onClick={() => setFilter('Completed')}>
                <p>Completed</p>
              </div>
              <div className={filter === 'Hold' ? 'tab-open' : ''} onClick={() => setFilter('Hold')}>
                <p>On Hold</p>
              </div>
            </>
          )}
        </div>
        <div className="project-content">
          {projects.length === 0 && (
            <div className="empty-state">
              <i className="fa-solid fa-inbox"></i>
              <p>
                {search.trim()
                  ? `No projects found for "${search.trim()}"`
                  : 'No projects found'
                }
              </p>
            </div>
          )}
          {projects.map((project) => {
            const progress = (project.phases.completed / project.phases.total) * 100;
            return (
              <div key={project.id} className="project-container">
                <div className={`left  ${project.projectType === 'Personal' ? '' : 'client-project-left'}`}>
                  {project.details.image ? (
                    <img src={project.details.image} />
                  ) : ''}
                  <span className={`project-type ${project.projectType === 'Personal' ? '' : 'client-project-type'}`}>{project.projectType === 'Personal' ? 'Personal' : 'Client'}</span>
                </div>
                <div className="middle">
                  <div className="top">
                    <div className="title-content">
                      <p className="title">{project.details.title}</p>
                      <p className={`portfolio-status ${project.inPortfolio ? '' : 'not-active'}`}>{isMobile ? <span className={!project.inPortfolio ? 'not' : ''}></span> : 'Portfolio:'} {project.inPortfolio ? 'Active' : 'Inactive'}</p>
                    </div>
                    <div className="link-content">
                      <p>Link to Project</p>
                      {project.info.isComplete && (
                        project.linkToProject && (
                          <>
                            <span></span>
                            <a href={project.linkToProject} target="_blank">Go to Project</a>
                          </>
                        )
                      )}
                    </div>
                    <div className="description-content">
                      <p>{project.details.description}</p>
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="project-info">
                      <div className="budget-info">
                        <p>Budget</p>
                        <p className={`project-budget ${project.info?.budget ? 'budget-active' : ''}`}>{project.info?.budget ? `$${formatCount(project.info.budget.min)}-$${formatCount(project.info.budget.max)}` : 'Personal'}</p>
                      </div>
                      <div className="duration-info">
                        <p>Duration</p>
                        <p className="project-duration">{project.info.duration ? `${project.info.duration}` : 'Not Set'}</p>
                      </div>
                      <div className="status-info">
                        <p>Status</p>
                        <p className={`project-status ${project.status === 'Completed' ? 'completed-status' :project.status === 'On Hold' ? 'onhold-status' : ''}`}>{project.status}</p>
                      </div>
                      <div className="client-info">
                        <p>Client</p>
                        <p className="project-client">{project.info.client ? `${project.info.client.name}` : 'Personal'}</p>
                      </div>
                    </div>
                    {project.phases && (
                      <div className="phase-progress-wrap">
                        <p>Phases</p>
                        <div className="progress-bar-wrap">
                          <span className="progress-bar" style={{width: `${progress}%`}}></span>
                        </div>
                        {isMobile ? (
                          <div className="mobile-phase">
                            <p>Phase {project.phases.completed}/{project.phases.total} <span className="dot"></span> {project.phases.completed} Completed</p>
                          </div>
                        ) : (
                          <>
                            <p><span className="completed-phase">{project.phases.completed}</span> / <span className="all-phase">{project.phases.total}</span></p>
                            <span className="dot"></span>
                            <p><span className="completed-phase">{project.phases.completed}</span> Completed</p>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <div className="right">
                  <div className="top">
                    <p>Updatetd {statusTimeAgo(project.updatedAt)}</p>
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
      </main>
      <BottomBar hadnlePlusDialogOpen={hadnlePlusDialogOpen} />
      <PlusModal plusDialog={plusDialog} hadnlePlusDialogClose={hadnlePlusDialogClose} />
    </>
  )
}
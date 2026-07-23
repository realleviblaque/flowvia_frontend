import { useEffect, useState } from "react";
import { SideBar } from "../../../components/Sidebar";
import { StatusSectionHeader } from "../../../components/StatusPage/StatusSectionsHeader";
import { activeProject } from "../../../data/Status/activeProject";
import './ActiveProject.css'
import formatCount from "../../../utils/formatCount";
import dayjs from "dayjs";

export function ActiveProject({all}) {
  const [projects, setProjects] = useState(activeProject);
  const [filter, setFilter] = useState('All');
  const [status, setStatus] = useState('Active')
  const [search, setSearch] = useState('')
  const activeProjectCount = projects.filter(p => !p.isPaused).length;
  const pausedProjectCount = projects.filter(p => p.isPaused).length;
  let totalValue = 0;
  projects.forEach(p => {
    totalValue += p.info.budget;
  })
  const calculateAvgProgress = () => {
    let phase = 0;
    let completed = 0;
    projects.forEach(p => {
      phase += p.phases.length;
      completed += p.phases.filter(p => p.isComplete).length;
    })

    const avgProgress = Math.round((completed / phase) * 100) || 0;
    return {avgProgress};
  }
  const {avgProgress} = calculateAvgProgress();
  const calculateAvgDaysLeft = () => {
    let allProject = 0;
    let allDaysLeft = 0;
    projects.forEach(p => {
      allProject ++;
      allDaysLeft += p.info.daysLeft;
    })
    const avgDaysLeft = Math.round(allDaysLeft / allProject) || 0;
    return {avgDaysLeft}
  }
  const {avgDaysLeft} = calculateAvgDaysLeft();
  const handleFilter = (prop) => {
    setFilter(prop)
    if (status === 'Active') {
      setProjects(
        prop === 'All'
        ? activeProject
        : prop === 'Client'
        ? activeProject.filter(p => p.createdFrom === 'Client Work')
        : activeProject.filter(p => p.createdFrom === 'Public Listing')
      )
    } else {
      setProjects(
        prop === 'All'
        ? activeProject.filter(p => p.isPaused)
        : prop === 'Client'
        ? activeProject.filter(p => p.createdFrom === 'Client Work' && p.isPaused)
        : activeProject.filter(p => p.createdFrom === 'Public Listing' && p.isPaused)
      )
    }
  }
  const handleStatus = (prop) => {
    setStatus(prop)
    if (filter === 'All') {
      setProjects(
        prop === 'Active'
        ? activeProject
        : activeProject.filter(p => p.isPaused)
      )
    } else if (filter === 'Client') {
      setProjects(
        prop === 'Active'
        ? activeProject.filter(p => p.createdFrom === 'Client Work')
        : activeProject.filter(p => p.createdFrom === 'Client Work' && p.isPaused)
      )
    } else if (filter === 'Public') {
      setProjects(
        prop === 'Active'
        ? activeProject.filter(p => p.createdFrom === 'Public Listing')
        : activeProject.filter(p => p.createdFrom === 'Public Listing' && p.isPaused)
      )
    }
  }

  useEffect(() => {
    const handleSearch = () => {
      const active = activeProject;
      const paused = activeProject.filter(p => p.isPaused)
      const clientActive = activeProject.filter(p => p.createdFrom === 'Client Work');
      const clientPaused = activeProject.filter(p => p.createdFrom === 'Client Work' && p.isPaused)
      const publicActive = activeProject.filter(p => p.createdFrom === 'Public Listing');
      const publicPaused = activeProject.filter(p => p.createdFrom === 'Public Listing' && p.isPaused)
      if (search.trim()) {
        if (filter === 'All') {
          setProjects(
            status === 'Active'
            ? active.filter(
              p => p.client.name.toLowerCase().includes(search.toLowerCase().trim())
              || p.client.username.toLowerCase().includes(search.toLowerCase().trim())
              || p.details.name.toLowerCase().includes(search.toLowerCase().trim())
            )
            : paused.filter(
              p => p.client.name.toLowerCase().includes(search.toLowerCase().trim())
              || p.client.username.toLowerCase().includes(search.toLowerCase().trim())
              || p.details.name.toLowerCase().includes(search.toLowerCase().trim())
            )
          )
        } else if (filter === 'Client') {
          setProjects(
            status === 'Active'
            ? clientActive.filter(
              p => p.client.name.toLowerCase().includes(search.toLowerCase().trim())
              || p.client.username.toLowerCase().includes(search.toLowerCase().trim())
              || p.details.name.toLowerCase().includes(search.toLowerCase().trim())
            )
            : clientPaused.filter(
              p => p.client.name.toLowerCase().includes(search.toLowerCase().trim())
              || p.client.username.toLowerCase().includes(search.toLowerCase().trim())
              || p.details.name.toLowerCase().includes(search.toLowerCase().trim())
            )
          )
        } else if (filter === 'Public') {
          setProjects(
            status === 'Active'
            ? publicActive.filter(
              p => p.client.name.toLowerCase().includes(search.toLowerCase().trim())
              || p.client.username.toLowerCase().includes(search.toLowerCase().trim())
              || p.details.name.toLowerCase().includes(search.toLowerCase().trim())
            )
            : publicPaused.filter(
              p => p.client.name.toLowerCase().includes(search.toLowerCase().trim())
              || p.client.username.toLowerCase().includes(search.toLowerCase().trim())
              || p.details.name.toLowerCase().includes(search.toLowerCase().trim())
            )
          )
        }
      } else {
        if (filter === 'All') {
          setProjects(
            status === 'Active'
            ? activeProject
            : activeProject.filter(p => p.isPaused)
          )
        } else if (filter === 'Client') {
          setProjects(
            status === 'Active'
            ? activeProject.filter(p => p.createdFrom === 'Client Work')
            : activeProject.filter(p => p.createdFrom === 'Client Work' && p.isPaused)
          )
        } else if (filter === 'Public') {
          setProjects(
            status === 'Active'
            ? activeProject.filter(p => p.createdFrom === 'Public Listing')
            : activeProject.filter(p => p.createdFrom === 'Public Listing' && p.isPaused)
          )
        }
      }
    }
    handleSearch()
  }, [search, filter, status])
  const isMobile = window.innerWidth < 768;
  return (
    <>
      <SideBar notification={all} />
      <StatusSectionHeader />
      <main className="status-active-project-main">
        <div className="top-side">
          <div>
            {status === 'Paused' ? (
              <>
                <p className="paused">{pausedProjectCount}</p>
                <p className="txt">Paused</p>
              </>
            ) : (
              <>
                <p className="active">{activeProjectCount}</p>
                <p className="txt">Active</p>
              </>
            )}
          </div>
          <div>
            <p className="value">${formatCount(totalValue)}</p>
            <p className="txt">Total Value</p>
          </div>
          <div>
            <p className="progress">{avgProgress}%</p>
            <p className="txt">Avg. Progress</p>
          </div>
          <div>
            <p className="days">{avgDaysLeft}d</p>
            <p className="txt">Avg. Days Left</p>
          </div>
        </div>
        <div className="nav-wrap">
          <div className="left">
            <div className={filter === 'All' ? 'active' : ''} onClick={() => handleFilter('All')}>All ({activeProject.length})</div>
            <div className={filter === 'Client' ? 'active' : ''} onClick={() => handleFilter('Client')}>Client Work ({activeProject.filter(p => p.createdFrom === 'Client Work').length})</div>
            <div className={filter === 'Public' ? 'active' : ''} onClick={() => handleFilter('Public')}>Public Listing ({activeProject.filter(p => p.createdFrom === 'Public Listing').length})</div>
            <span></span>
            <div className={status === 'Active' ? 'active' : ''} onClick={() => handleStatus('Active')}>Active</div>
            <div className={status === 'Paused' ? 'active' : ''} onClick={() => handleStatus('Paused')}>Paused</div>
          </div>
          <div className="right">
            <div className="search-wrap">
              <i className="fa-solid fa-search"></i>
              <input type="text" placeholder="Search Projects..." value={search} onInput={(e) => setSearch(e.target.value)} />
            </div>
          </div>
        </div>
        <div className="projects-container">
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
          })}
        </div>
      </main>
    </>
  )
}
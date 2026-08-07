import { useEffect, useState } from "react";
import { SideBar } from "../../../components/Sidebar";
import { StatusSectionHeader } from "../../../components/StatusPage/StatusSectionsHeader";
import './TakenProject.css'
import { takenProjects } from "../../../data/StatusPage/takenProjects";
import dayjs from "../../../lib/dayjs";
import formatCount from '../../../utils/formatCount'
import { formatDate } from "../../../utils/formatDate";

export function TakenProject({all}) {
  const [projects, setProjects] = useState(takenProjects);
  const [search, setSearch] = useState('')
  const active = projects.filter(p => !p.isCompleted).length;
  let value = 0;
  let avgProgress = 0;
  let avgDaysLeft = 0;
  let progress = 0;
  let days = 0;
  projects.forEach(p => {
    value += p.projects.info.budget;
    progress += p.projects.info.progressPercent;
    avgProgress = Math.round(progress / active);
    days += dayjs(p.projects.info.deadline).diff(dayjs(), 'day');
    avgDaysLeft = Math.round(days / active)
  })
  useEffect(() => {
    const handleSearch = () => {
      if (search.trim()) {
        setProjects(
          takenProjects.filter(p => 
            p.projects.name.toLowerCase().includes(search.toLowerCase().trim())
            || p.freelancer.name.toLowerCase().includes(search.toLowerCase().trim())
            || p.freelancer.username.toLowerCase().includes(search.toLowerCase().trim())
          )
        )
      } else {
        setProjects(takenProjects)
      }
    }
    handleSearch();
  }, [search])
  const isMobile = window.innerWidth < 768;
  return (
    <>
      <SideBar notification={all} />
      <StatusSectionHeader />
      <main className="status-taken-project-main">
        <div className="top-side">
          <div>
              <p className="active">{active}</p>
              <p className="txt">Active</p>
          </div>
          <div>
            <p className="value">${formatCount(value)}</p>
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
            
          </div>
          <div className="right">
            <div className="search-wrap">
              <i className="fa-solid fa-search"></i>
              <input type="text" placeholder="Search projects..." value={search} onChange={e => setSearch(e.target.value)} />
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
          const daysLeft = dayjs(project.projects.info.deadline).diff(dayjs(), 'day');
          const progress = project.projects.info.progressPercent;
            return (
              <div className="wrapper" key={project.id}>
                <div className="top">
                  <div className="up">
                    <div className="first-top">
                      <div className="left">
                        <div className='active'><span></span> Active</div>
                      </div>
                      <div className="right">
                        Started {formatDate(project.createdAt)}
                      </div>
                    </div>
                    <p className="title">{project.projects.name}</p>
                    <p className="description">{project.projects.description}</p>
                  </div>
                  <div className="middle">
                    <div className="client-wrap">
                      <div className="left">
                        <img src={project.freelancer.image} />
                        <div>
                          <p className="name">{project.freelancer.name}</p>
                          <p className="user-details">@{project.freelancer.username} <span></span> {project.freelancer.accountType}</p>
                        </div>
                      </div>
                      <div className="right">
                        <i className="fa-solid fa-chevron-right"></i>
                      </div>
                    </div>
                    <div className="project-info-wrap">
                      <div>
                        <p className="txt">Price</p>
                        <p className="budget">${formatCount(project.projects.info.budget)}</p>
                      </div>
                      <div>
                        <p className="txt">Deadline</p>
                        <p className="deadline">{dayjs(project.projects.info.deadline).format('MMM D')}</p>
                      </div>
                      <div>
                        <p className="txt">Days Left</p>
                        <p className="type">{daysLeft}</p>
                      </div>
                      <div>
                        <p className="txt">Progress</p>
                        <p className="applicant">{progress}%</p>
                      </div>
                    </div>
                    <div className="progress-wrap">
                      <div className="top-up">
                        <p className="txt">Delivery Progress</p>
                        <p className="percent">{progress}%</p>
                      </div>
                      <div className="progress-bar">
                        <span className="bar" style={{width: `${progress}%`}}></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom">
                  <div className="left">
                    <button>View {isMobile ? '' : 'Project'}</button>
                    {isMobile ? (
                      <i className="fa-regular fa-message"></i>                  
                    ) : (
                        <button>Message Freelancer</button>
                    )}
                    <button>{isMobile ? '' : 'Mark '}Complete</button>
                  </div>
                  <div className="right">
                    <button>Report {isMobile ? '' : 'Issue'}</button>
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
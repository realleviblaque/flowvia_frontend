import { useEffect, useState } from "react";
import { SideBar } from "../../../components/Sidebar";
import { StatusSectionHeader } from "../../../components/StatusPage/StatusSectionsHeader";
import './AppliedJob.css'
import { appliedJob } from "../../../data/StatusPage/appliedJob";
import dayjs from "dayjs";
import formatCount from "../../../utils/formatCount";
import { statusTimeAgo } from "../../../utils/statusTimeAgo";

export function AppliedJob({all}) {
  const [projects, setProjects] = useState(appliedJob);
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')
  const pendingCount = appliedJob.filter(p => p.status === 'Pending').length;
  const reviewtCount = appliedJob.filter(p => p.status === 'In Review').length;
  const acceptedCOunt = appliedJob.filter(p => p.status === 'Accepted').length;
  const declinedCount = appliedJob.filter(p => p.status === 'Declined').length;
  const handleFilter = (prop) => {
    setFilter(prop)
    setProjects(
      prop === 'All'
      ? appliedJob
      : appliedJob.filter(p => p.status === prop)
    )
  }
  useEffect(() => {
    const handleSearch = () => {
      if (search.trim()) {
        setProjects(
          filter === 'All'
          ? appliedJob.filter(
            p => p.client.name.toLowerCase().includes(search.toLowerCase().trim())
            || p.client.username.toLowerCase().includes(search.toLowerCase().trim())
            || p.details.name.toLowerCase().includes(search.toLowerCase().trim())
          )
          : appliedJob.filter(p => p.status === filter).filter(
            p => p.client.name.toLowerCase().includes(search.toLowerCase().trim())
            || p.client.username.toLowerCase().includes(search.toLowerCase().trim())
            || p.details.name.toLowerCase().includes(search.toLowerCase().trim())
          )
        )
      } else {
        setProjects(
          filter === 'All'
          ? appliedJob
          : appliedJob.filter(p => p.status === filter)
        )
      }
    }
    handleSearch();
  }, [search, filter])
  const isMobile = window.innerWidth < 768;
  return (
    <>
      <SideBar notification={all} />
      <StatusSectionHeader />
      <main className="status-applied-job-main">
        <div className="top-side">
          <div>
              <p className="application">{appliedJob.length}</p>
              <p className="txt">Application</p>
          </div>
          <div>
            <p className="pending">{pendingCount}</p>
            <p className="txt">Pending {isMobile ? '' : 'Review'}</p>
          </div>
          <div>
            <p className="review">{reviewtCount}</p>
            <p className="txt">In Review</p>
          </div>
          <div>
            <p className="avg-applicant">{acceptedCOunt}</p>
            <p className="txt">Accepted</p>
          </div>
        </div>
        <div className="nav-wrap">
          <div className="left">
            <div className={filter === 'All' ? 'active' : ''} onClick={() => handleFilter('All')}>All ({appliedJob.length})</div>
            <div className={filter === 'Pending' ? 'active' : ''} onClick={() => handleFilter('Pending')}>Pending ({pendingCount})</div>
            <div className={filter === 'In Review' ? 'active' : ''} onClick={() => handleFilter('In Review')}>In Review ({reviewtCount})</div>
            <div className={filter === 'Accepted' ? 'active' : ''} onClick={() => handleFilter('Accepted')}>Accepted ({acceptedCOunt})</div>
            <div className={filter === 'Declined' ? 'active' : ''} onClick={() => handleFilter('Declined')}>Declined ({declinedCount})</div>
          </div>
          <div className="right">
            <div className="search-wrap">
              <i className="fa-solid fa-search"></i>
              <input type="text" placeholder="Search applications..." value={search} onInput={(e) => setSearch(e.target.value)} />
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
            return (
              <div className="wrapper" key={project.id}>
                <div className="top">
                  <div className="up">
                    <div className="first-top">
                      <div className="left">
                        <div className={project.status === 'In Review' ? 'review': project.status === 'Pending' ? 'pending' :project.status === 'Accepted' ? 'accepted' : project.status === 'Declined' ? 'declined' : ''}>{project.status}</div>
                      </div>
                      <div className="right">
                        Applied {statusTimeAgo(project.createdAt)}
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
                          {isMobile ? (
                            <div className="m-client">
                              <p className="username">@{project.client.username}</p>
                              <span></span>
                              <p className="account-type">{project.client.accountType}</p>
                              <span></span>
                              <p className="title">{project.client.title}</p>
                            </div>
                          ) : (
                            <p className="user-details">@{project.client.username} <span></span> {project.client.accountType} <span></span> {project.client.title}</p>
                          )}
                        </div>
                      </div>
                      <div className="right">
                        <i className="fa-solid fa-chevron-right"></i>
                      </div>
                    </div>
                    <div className="project-info-wrap">
                      <div>
                        <p className="txt">Budget</p>
                        <p className="budget">${formatCount(project.info.minBuget)}-${formatCount(project.info.maxBudget)}</p>
                      </div>
                      <div>
                        <p className="txt">Type</p>
                        <p className="type">{project.info.type}</p>
                      </div>
                      <div>
                        <p className="txt">Deadline</p>
                        <p className="deadline">{dayjs(project.info.deadline).format('MMM d')}</p>
                      </div>
                      <div>
                        <p className="txt">Applicants</p>
                        <p className="applicant">{project.info.applicant}</p>
                      </div>
                    </div>
                    <div className="skills-wrap">
                      {project.skills && (
                        project.skills.map((skill) => {
                          return (
                            <span key={skill.id}>{skill.name}</span>
                          )
                        })
                      )}
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
            )
          })}
        </div>
      </main>
    </>
  )
}
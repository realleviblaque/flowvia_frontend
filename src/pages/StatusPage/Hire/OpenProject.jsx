import { useEffect, useState } from "react";
import { SideBar } from "../../../components/Sidebar";
import { StatusSectionHeader } from "../../../components/StatusPage/StatusSectionsHeader";
import './OpenProject.css'
import { openProjects } from "../../../data/StatusPage/openProject";
import { statusTimeAgo } from "../../../utils/statusTimeAgo";
import formatCount from "../../../utils/formatCount";

export function OpenProject({all}) {
  const [projects, setProjects] = useState(openProjects);
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const livePost = projects.filter(p => p.isOpen).length;
  let totalApplicant = 0;
  let notReviewed = 0;
  projects.forEach(p => {
    if (p.isOpen) totalApplicant += p.applicant.length, 
    notReviewed += p.applicant.filter(a => a.application.status === 'new').length;
  })
  useEffect(() => {
    const hadnleFilter = () => {
      switch (filter) {
        case 'all':
          setProjects(openProjects)
          break;
        case 'public':
          setProjects(
            openProjects.filter(p => p.jobType.toLowerCase() === 'public')
          )
          break;
        case 'personal':
          setProjects(
            openProjects.filter(p => p.jobType.toLowerCase() === 'personal invite')
          )
          break;
        default:
          setProjects(openProjects)
      }
    }
    hadnleFilter();
  }, [filter]);
  useEffect(() => {
    const handleSearch = () => {
      if (search.trim()) {
        switch (filter) {
          case 'all':
            setProjects(
              openProjects.filter(p => 
                p.details.name.toLowerCase().includes(search.toLowerCase().trim())
                || p.info.type.toLowerCase().includes(search.toLowerCase().trim())
              )
            )
            break;
          case 'public':
            setProjects(
              openProjects.filter(p => p.jobType.toLowerCase() === 'public').filter(p => 
                p.details.name.toLowerCase().includes(search.toLowerCase().trim())
                || p.info.type.toLowerCase().includes(search.toLowerCase().trim())
              )
            )
            break;
          case 'personal':
            setProjects(
              openProjects.filter(p => p.jobType.toLowerCase() === 'personal invite').filter(p => 
                p.details.name.toLowerCase().includes(search.toLowerCase().trim())
                || p.info.type.toLowerCase().includes(search.toLowerCase().trim())
              )
            )
            break;
          default:
            setProjects(
              openProjects.filter(p => 
                p.details.name.toLowerCase().includes(search.toLowerCase().trim())
                || p.info.type.toLowerCase().includes(search.toLowerCase().trim())
              )
            )
        }
      } else {
        switch (filter) {
          case 'all':
            setProjects(openProjects)
            break;
          case 'public':
            setProjects(
              openProjects.filter(p => p.jobType.toLowerCase() === 'public')
            )
            break;
          case 'personal':
            setProjects(
              openProjects.filter(p => p.jobType.toLowerCase() === 'personal invite')
            )
            break;
          default:
            setProjects(openProjects)
        }
      }
    }
    handleSearch()
  }, [filter, search])
  const isMobile = window.innerWidth < 768;
  return (
    <>
      <SideBar notification={all} />
      <StatusSectionHeader />
      <main className="status-open-project-main">
        <div className="top-side">
          <div>
              <p className="application">{livePost}</p>
              <p className="txt">Live {isMobile ? '' : 'Posts'}</p>
          </div>
          <div>
            <p className="pending">{totalApplicant}</p>
            <p className="txt">Total {isMobile ? '' : 'Applicants'}</p>
          </div>
          <div>
            <p className="review">{notReviewed}</p>
            <p className="txt">Not {isMobile ? 'Rev.' : 'Reviewed'}</p>
          </div>
          <div>
            <p className="avg-applicant">0</p>
            <p className="txt">Drafts {isMobile ? '' : 'Saved'}</p>
          </div>
        </div>
        <div className="nav-wrap">
          <div className="left">
            <div className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All Posts</div>
            <div className={filter === 'public' ? 'active' : ''} onClick={() => setFilter('public')}>Public</div>
            <div className={filter === 'personal' ? 'active' : ''} onClick={() => setFilter('personal')}>Personal Invite</div>
          </div>
          <div className="right">
            <div className="search-wrap">
              <i className="fa-solid fa-search"></i>
              <input type="text" placeholder="Search job posts..." value={search} onChange={e => setSearch(e.target.value)} />
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
            const applicants = project.applicant;
            const notReviewed = project.applicant.filter(p => p.application.status === 'new').length
            const shortlisted = project.applicant.filter(p => p.application.status === 'shortlisted').length
            const inDiscussion = project.applicant.filter(p => p.application.status === 'in discussion').length
            return (
              <div className="wrapper" key={project.id}>
                <div className="top">
                  <div className="up">
                    <div className="first-top">
                      <div className="left">
                        <div className='type'>{project.jobType}</div>
                        {project.isOpen ? <div className='status'><span></span> Open</div> : <div className='closed'><span></span> Closed</div>}
                      </div>
                      <div className="right">
                        Posted {statusTimeAgo(project.createdAt)}
                      </div>
                    </div>
                    <p className="title">{project.details.name}</p>
                    <p className="description">{project.details.description}</p>
                  </div>
                  <div className="middle">
                    <div className="project-info-wrap">
                      <div>
                        <p className="txt">Budget</p>
                        <p className="budget">${formatCount(project.info.minBudget)}-${formatCount(project.info.maxBudget)}</p>
                      </div>
                      <div>
                        <p className="txt">Type</p>
                        <p className="type">{project.info.type}</p>
                      </div>
                      <div>
                        <p className="txt">Deadline</p>
                        <p className="deadline">{project.info.deadline}</p>
                      </div>
                      <div>
                        <p className="txt">Applicants</p>
                        <p className="applicant">{applicants.length}</p>
                      </div>
                    </div>
                    <div className="skills-wrap">
                      {project.skills.map((skill) => {
                        return (
                        <span key={skill.id}>{skill.name}</span>
                        )
                      })}
                    </div>
                    <div className="job-message-cover">
                      <strong>{applicants.length} applicants</strong> - {notReviewed} not yet reviewed <span></span> {shortlisted} shortlisted <span></span> {inDiscussion} in discussion
                    </div>
                  </div>
                </div>
                <div className="bottom">
                  <div className="job-details-container">
                    <div>
                      <p className="appli">{applicants.length}</p>
                      <p className="txt">Applicants</p>
                    </div>
                    <div>
                      <p className="not-re">{notReviewed}</p>
                      <p className="txt">Not Reviewed</p>
                    </div>
                    <div>
                      <p className="short">{shortlisted}</p>
                      <p className="txt">Shortlisted</p>
                    </div>
                    <div>
                      <p className="in-dis">{inDiscussion}</p>
                      <p className="txt">In Discusion</p>
                    </div>
                  </div>
                  <div className="lower">
                    {project.isOpen ? (
                      <>
                        <div className="left">
                          <button>Review {isMobile ? '' : 'Applicant'}</button>
                          <button>Edit {isMobile ? '' : 'Post'}</button>
                          <button>Share {isMobile ? '' : 'Link'}</button>
                        </div>
                        <div className="right">
                          <button>Close {isMobile ? '' : 'Job'}</button>
                        </div>
                      </>
                    ) : (
                      <div className="left">
                        <button>Re-Open</button>
                      </div>
                    )}
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
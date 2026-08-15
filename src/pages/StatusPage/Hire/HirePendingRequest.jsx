import { useEffect, useState } from "react";
import { SideBar } from "../../../components/Sidebar";
import { StatusSectionHeader } from "../../../components/StatusPage/StatusSectionsHeader";
import './HirePendingRequest.css'
import { openProjects } from "../../../data/StatusPage/openProject";
import { statusTimeAgo } from "../../../utils/statusTimeAgo";

export function HirePendingRequest({all, selectedId, setSelectedId}) {
  const [pendingRequests, setPendingRequests] = useState([]);
  const notReviewed = pendingRequests.filter(p => p.application.status === 'new').length;
  const shortlisted = pendingRequests.filter(p => p.application.status === 'shortlisted').length;
  const inDiscussion = pendingRequests.filter(p => p.application.status === 'in discussion').length;
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  useEffect(() => {
    const Update = () => {
      setPendingRequests(openProjects.find(p => p.id === selectedId)?.applicant || [])
    }
    Update()
  }, [selectedId])
  useEffect(() => {
    const hadnleFilter = () => {
      switch (filter) {
        case 'all':
          setPendingRequests(openProjects.find(p => p.id === selectedId)?.applicant || [])
          break;
        case 'new':
          setPendingRequests(
            openProjects.find(p => p.id === selectedId)?.applicant.filter(p => p.application.status === 'new') || []
          )
          break;
        case 'shortlisted':
          setPendingRequests(
            openProjects.find(p => p.id === selectedId)?.applicant.filter(p => p.application.status === 'shortlisted') || []
          )
          break;
        case 'reviewed':
          setPendingRequests(
            openProjects.find(p => p.id === selectedId)?.applicant.filter(p => p.application.status === 'reviewed') || []
          )
          break;
        case 'discussion':
          setPendingRequests(
            openProjects.find(p => p.id === selectedId)?.applicant.filter(p => p.application.status === 'in discussion') || []
          )
          break;
        default:
          setPendingRequests(openProjects.find(p => p.id === selectedId)?.applicant || [])
      }
    }
    hadnleFilter();
  }, [filter, selectedId]);
  useEffect(() => {
    const handleSearch = () => {
      if (search.trim()) {
        switch (filter) {
          case 'all':
            setPendingRequests(
              openProjects.find(p => p.id === selectedId)?.applicant.filter(p => 
                p.profile.name.toLowerCase().includes(search.toLowerCase().trim())
                || p.profile.username.toLowerCase().includes(search.toLowerCase().trim())
              ) || []
            )
            break;
          case 'new':
            setPendingRequests(
              openProjects.find(p => p.id === selectedId)?.applicant.filter(p => p.application.status === 'new').filter(p => 
                p.profile.name.toLowerCase().includes(search.toLowerCase().trim())
                || p.profile.username.toLowerCase().includes(search.toLowerCase().trim())
              ) || []
            )
            break;
          case 'shortlisted':
            setPendingRequests(
              openProjects.find(p => p.id === selectedId)?.applicant.filter(p => p.application.status === 'shortlisted').filter(p => 
                p.profile.name.toLowerCase().includes(search.toLowerCase().trim())
                || p.profile.username.toLowerCase().includes(search.toLowerCase().trim())
              ) || []
            )
            break;
          case 'reviewed':
            setPendingRequests(
              openProjects.find(p => p.id === selectedId)?.applicant.filter(p => p.application.status === 'reviewed').filter(p => 
                p.profile.name.toLowerCase().includes(search.toLowerCase().trim())
                || p.profile.username.toLowerCase().includes(search.toLowerCase().trim())
              ) || []
            )
            break;
          case 'discussion':
            setPendingRequests(
              openProjects.find(p => p.id === selectedId)?.applicant.filter(p => p.application.status === 'in discussion').filter(p => 
                p.profile.name.toLowerCase().includes(search.toLowerCase().trim())
                || p.profile.username.toLowerCase().includes(search.toLowerCase().trim())
              ) || []
            )
            break;
          default:
            setPendingRequests(
              openProjects.find(p => p.id === selectedId)?.applicant.filter(p => 
                p.profile.name.toLowerCase().includes(search.toLowerCase().trim())
                || p.profile.username.toLowerCase().includes(search.toLowerCase().trim())
              ) || []
            )
        }
      } else {
        switch (filter) {
          case 'all':
            setPendingRequests(openProjects.find(p => p.id === selectedId)?.applicant || [])
            break;
          case 'new':
            setPendingRequests(
              openProjects.find(p => p.id === selectedId)?.applicant.filter(p => p.application.status === 'new') || []
            )
            break;
          case 'shortlisted':
            setPendingRequests(
              openProjects.find(p => p.id === selectedId)?.applicant.filter(p => p.application.status === 'shortlisted') || []
            )
            break;
          case 'reviewed':
            setPendingRequests(
              openProjects.find(p => p.id === selectedId)?.applicant.filter(p => p.application.status === 'reviewed') || []
            )
            break;
          case 'discussion':
            setPendingRequests(
              openProjects.find(p => p.id === selectedId)?.applicant.filter(p => p.application.status === 'in discussion') || []
            )
            break;
          default:
            setPendingRequests(openProjects.find(p => p.id === selectedId)?.applicant || [])
        }
      }
    }
    handleSearch();
  }, [search, filter, selectedId])
  const isMobile = window.innerWidth < 768;
  return (
    <>
      <SideBar notification={all} />
      <StatusSectionHeader selectedId={selectedId} setSelectedId={setSelectedId} />
      <main className="status-hire-pending-request-main">
        <div className="top-side">
          <div>
              <p className="applicant">{pendingRequests.length}</p>
              <p className="txt">{isMobile ? '' : 'Total '}Applicants</p>
          </div>
          <div>
            <p className="not-rev">{notReviewed}</p>
            <p className="txt">{isMobile ? 'Not Rev.' : 'Not Reviewed'}</p>
          </div>
          <div>
            <p className="shortlisted">{shortlisted}</p>
            <p className="txt">Shortlisted</p>
          </div>
          <div>
            <p className="discussion">{inDiscussion}</p>
            <p className="txt">{isMobile ? '' : 'In '}Discussion</p>
          </div>
        </div>
        <div className="nav-wrap">
          <div className="left">
            <div className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</div>
            <div className={filter === 'new' ? 'active' : ''} onClick={() => setFilter('new')}>New</div>
            <div className={filter === 'shortlisted' ? 'active' : ''} onClick={() => setFilter('shortlisted')}>Shortlisted</div>
            <div className={filter === 'reviewed' ? 'active' : ''} onClick={() => setFilter('reviewed')}>Reviewed</div>
            <div className={filter === 'discussion' ? 'active' : ''} onClick={() => setFilter('discussion')}>In Discussion</div>
          </div>
          <div className="right">
            <div className="search-wrap">
              <i className="fa-solid fa-search"></i>
              <input type="text" placeholder="Search applicants..." onChange={e => setSearch(e.target.value)} value={search} />
            </div>
          </div>
        </div>
        <div className="projects-container">
          {pendingRequests.length === 0 && (
            <div className="empty-state">
              <i className="fa-solid fa-inbox"></i>
              <p>
                {search.trim()
                  ? `No applicants found for "${search.trim()}"`
                  : 'Empty - Select Live Job Post'
                }
              </p>
            </div>
          )}
          {pendingRequests.map((request) => {
            return (
              <div className="wrapper" key={request.id}>
                <div className="top">
                  <div className="up">
                    <div className="first-top">
                      <div className="client">
                        <div className="left-side">
                          <img src={request.profile.image} />
                        </div>
                        <div className="right-side">
                          <div className="name-info">
                            <p className="name">{request.profile.name}</p>
                            <div className={`${request.application.status} ${request.application.status === 'in discussion' && 'discussion'}`}>{request.application.status}</div>
                          </div>
                          <p className="username">@{request.profile.username}</p>
                          <div className="title">{request.profile.title}</div>
                          <p className="bio">{request.profile.bio}</p>
                          <div className="details">
                            <div>
                              {request.stats.jobsDone} job{request.stats.jobsDone > 1 ? 's' : ''} done
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="right">
                        {isMobile ? '' : 'Applied '}{statusTimeAgo(request.application.appliedAt)}
                      </div>
                    </div>
                  </div>
                  <div className="middle">
                    <p className="txt">Cover Message</p>
                    <span>
                      <p className="message">{request.application.coverMessage}</p>
                    </span>
                  </div>
                </div>
                <div className="bottom">
                  <div className="left">
                    {request.application.status === 'in discussion' 
                      ? <button className="message">Message</button> 
                      : request.application.status === 'shortlisted' 
                      ? <button className="start">Start Discussion</button> 
                      : <button className="shortlist">Shortlist</button>
                    }
                    <button className={request.application.status === 'reviewed' ? 'reviewed' : 'review'}>{request.application.status === 'reviewed' ? 'Reviewed' : 'Review'}</button>
                  </div>
                  <div className="right">
                    <button>Decline</button>
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
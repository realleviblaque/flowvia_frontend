import { useEffect, useState } from "react";
import { SideBar } from "../../../components/Sidebar";
import { StatusSectionHeader } from "../../../components/StatusPage/StatusSectionsHeader";
import { inNegotiation } from "../../../data/StatusPage/inNegotiation";
import './InNegotiation.css'
import { statusTimeAgo } from "../../../utils/statusTimeAgo";
import formatCount from "../../../utils/formatCount";

export function InNegotiation({all}) {
  const [negotiations, setNegotiations] = useState(inNegotiation)
  const [search, setSearch] = useState('');
  useEffect(() => {
    const handleSearch = () => {
      if (search.trim()) {
        setNegotiations(
          inNegotiation.filter(p => 
            p.projects.name.toLowerCase().includes(search.toLowerCase().trim())
            || p.applicant.name.toLowerCase().includes(search.toLowerCase().trim())
            || p.applicant.username.toLowerCase().includes(search.toLowerCase().trim())
          )
        )
      } else {
        setNegotiations(inNegotiation)
      }
    }
    handleSearch();
  }, [search])
  const isMobile = window.innerWidth < 768;
  return (
    <>
      <SideBar notification={all} />
      <StatusSectionHeader />
      <main className="status-in-negotiation-main">
        <div className="nav-wrap">
          <div className="left">
            
          </div>
          <div className="right">
            <div className="search-wrap">
              <i className="fa-solid fa-search"></i>
              <input type="text" placeholder="Search negotiation..." value={search} onChange={e => setSearch(e.target.value)} />
            </div>
          </div>
        </div>
        <div className="projects-container">
          {negotiations.length === 0 && (
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
          {negotiations.map((negotiation) => {
            const isWithin = negotiation.projects.budget.max >= negotiation.applicant.priceRange.min;
            return (
              <div className="wrapper" key={negotiation.id}>
                <div className="top">
                  <div className="up">
                    <div className="first-top">
                      <div className="left">
                        <div className='short'>{negotiation.projects.status}</div>
                      </div>
                      <div className="right">
                        Started {statusTimeAgo(negotiation.createdAt)}
                      </div>
                    </div>
                    <p className="title">{negotiation.projects.name}</p>
                    <p className="description">{negotiation.projects.description}</p>
                  </div>
                  <div className="middle">
                    <div className="client-wrap">
                      <div className="left">
                        <img src={negotiation.applicant.image} />
                      </div>
                      <div className="right">
                        <p className="name">{negotiation.applicant.name}</p>
                        <p className="user-details">@{negotiation.applicant.username} <span></span> {negotiation.applicant.accountType}</p>
                        <p className="title">{negotiation.applicant.title}</p>
                        <p className="bio">{negotiation.applicant.bio}</p>
                        <div className="job-done">{negotiation.applicant.totalJobs} job{negotiation.applicant.totalJobs > 1 ? 's' : ''} done</div>
                      </div>
                    </div>
                    <div className="thier-message">
                      <p className="hd-txt">Their Message</p>
                      <span>
                        <p className="message">{negotiation.message}</p>
                      </span>
                    </div>
                    <div className="negotiation">
                      <p className="hd-txt">Negotiation</p>
                      <div className="wrap">
                        <div>
                          <p className="txt">Their Ask</p>
                          <p className="hd">${formatCount(negotiation.applicant.priceRange.min)}-${formatCount(negotiation.applicant.priceRange.max)} / project</p>
                        </div>
                        <div>
                          <p className="txt">Your Budget</p>
                          <p className="hd">${formatCount(negotiation.projects.budget.min)}-${formatCount(negotiation.projects.budget.max)}</p>
                        </div>
                        <div className={!isWithin && 'not-within'}>
                          <p className="txt">Status</p>
                          <p className="hd">{isWithin ? (
                            <>
                              Within Range <i className="fa-solid fa-check"></i>
                            </>
                          ) : (
                            <>
                              Not Within Range <i className="fa-solid fa-x"></i>
                            </>
                          )}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom">
                  <div className="left">
                    <button>Hire {isMobile ? '' : 'Now'}</button>
                    {isMobile ? (
                      <i className="fa-regular fa-message"></i>                  
                    ) : (
                        <button>Message</button>
                    )}
                    <button>{isMobile ? '' : 'View'} Profile</button>
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
import { SideBar } from "../../../components/Sidebar";
import { StatusSectionHeader } from "../../../components/StatusPage/StatusSectionsHeader";
import './OpenProject.css'

export function OpenProject({all}) {
  const isMobile = window.innerWidth < 768;
  return (
    <>
      <SideBar notification={all} />
      <StatusSectionHeader />
      <main className="status-open-project-main">
        <div className="top-side">
          <div>
              <p className="application">0</p>
              <p className="txt">Live {isMobile ? '' : 'Posts'}</p>
          </div>
          <div>
            <p className="pending">0</p>
            <p className="txt">Total {isMobile ? '' : 'Applicants'}</p>
          </div>
          <div>
            <p className="review">0</p>
            <p className="txt">Not {isMobile ? 'Rev.' : 'Reviewed'}</p>
          </div>
          <div>
            <p className="avg-applicant">0</p>
            <p className="txt">Drafts {isMobile ? '' : 'Saved'}</p>
          </div>
        </div>
        <div className="nav-wrap">
          <div className="left">
            <div className='active'>All Posts</div>
            <div>Public</div>
            <div>Personal Invite</div>
          </div>
          <div className="right">
            <div className="search-wrap">
              <i className="fa-solid fa-search"></i>
              <input type="text" placeholder="Search job posts..." />
            </div>
          </div>
        </div>
        <div className="projects-container">
          <div className="wrapper">
            <div className="top">
              <div className="up">
                <div className="first-top">
                  <div className="left">
                    <div className='type'>Public</div>
                    <div className='status'><span></span> Open</div>
                  </div>
                  <div className="right">
                    Posted 5 days ago
                  </div>
                </div>
                <p className="title">React Developer Needed - Part-time</p>
                <p className="description">Full-time contact position building a SaaS analyics dashboard with custom charts, real-time data, and an admin portal.</p>
              </div>
              <div className="middle">
                <div className="project-info-wrap">
                  <div>
                    <p className="txt">Budget</p>
                    <p className="budget">$2K-$5K</p>
                  </div>
                  <div>
                    <p className="txt">Type</p>
                    <p className="type">Part-time</p>
                  </div>
                  <div>
                    <p className="txt">Deadline</p>
                    <p className="deadline">May 1</p>
                  </div>
                  <div>
                    <p className="txt">Applicants</p>
                    <p className="applicant">7</p>
                  </div>
                </div>
                <div className="skills-wrap">
                  <span>React</span>
                  <span>D3.js</span>
                  <span>TypeScript</span>
                  <span>Rest APIs</span>
                </div>
                <div className="job-message-cover">
                  <strong>7 applicants</strong> - 4 not yet reviewed <span></span> 2 shortlisted <span></span> 1 in discussion
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="job-details-container">
                <div>
                  <p className="appli">7</p>
                  <p className="txt">Applicants</p>
                </div>
                <div>
                  <p className="not-re">4</p>
                  <p className="txt">Not Reviewed</p>
                </div>
                <div>
                  <p className="short">2</p>
                  <p className="txt">Shortlisted</p>
                </div>
                <div>
                  <p className="in-dis">1</p>
                  <p className="txt">In Discusion</p>
                </div>
              </div>
              <div className="lower">
                <div className="left">
                  <button>Review {isMobile ? '' : 'Applicant'}</button>
                  <button>Edit {isMobile ? '' : 'Post'}</button>
                  <button>Share {isMobile ? '' : 'Link'}</button>
                </div>
                <div className="right">
                  <button>Close {isMobile ? '' : 'Job'}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
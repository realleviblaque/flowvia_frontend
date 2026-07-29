import { SideBar } from "../../../components/Sidebar";
import { StatusSectionHeader } from "../../../components/StatusPage/StatusSectionsHeader";
import './CompletedProject.css'

export function CompletedProject({all}) {
  const isMobile = window.innerWidth < 768;
  return (
    <>
      <SideBar notification={all} />
      <StatusSectionHeader />
      <main className="status-completed-project-main">
        <div className="top-side">
          <div>
              <p className="application">0</p>
              <p className="txt">Application</p>
          </div>
          <div>
            <p className="pending">0</p>
            <p className="txt">Pending Review</p>
          </div>
          <div>
            <p className="review">0</p>
            <p className="txt">In Review</p>
          </div>
          <div>
            <p className="avg-applicant">0</p>
            <p className="txt">Accepted</p>
          </div>
        </div>
        <div className="nav-wrap">
          <div className="left">
            <div className='active'>All (0)</div>
            <div>Pending (0)</div>
            <div>In Review (0)</div>
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
                    <div className='review'>Review</div>
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
                    <p className="type">Full-time</p>
                  </div>
                  <div>
                    <p className="txt">Deadline</p>
                    <p className="deadline">May 15</p>
                  </div>
                  <div>
                    <p className="txt">Applicants</p>
                    <p className="applicant">12</p>
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
        </div>
      </main>
    </>
  )
}
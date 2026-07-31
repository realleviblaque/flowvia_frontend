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
              <p className="txt">Completed</p>
          </div>
          <div>
            <p className="pending">0</p>
            <p className="txt">Total Earned</p>
          </div>
          <div>
            <p className="review">0</p>
            <p className="txt">Avg. Rating Received</p>
          </div>
          <div>
            <p className="avg-applicant">0</p>
            <p className="txt">Repeat Clients</p>
          </div>
        </div>
        <div className="nav-wrap">
          <div className="left">
            <div className='active'>All</div>
            <div>This year</div>
            <div>5 Star</div>
            <div>Repeat Clients</div>
          </div>
          <div className="right">
            <div className="search-wrap">
              <i className="fa-solid fa-search"></i>
              <input type="text" placeholder="Search completed..." />
            </div>
          </div>
        </div>
        <div className="projects-container">
          <div className="wrapper">
            <div className="top">
              <div className="up">
                <div className="first-top">
                  <div className="left">
                    <div className='completed'><i className="fa-solid fa-check"></i> Completed</div>
                  </div>
                  <div className="right">
                    Completed Mar 12, 2025
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
                      <p className="user-details">@zaratanaka <span></span> Reccruiter</p>
                    </div>
                  </div>
                  <div className="right">
                    <i className="fa-solid fa-chevron-right"></i>
                  </div>
                </div>
                <div className="project-info-wrap">
                  <div>
                    <p className="txt">Earned</p>
                    <p className="earned">$8.4K</p>
                  </div>
                  <div>
                    <p className="txt">Duration</p>
                    <p className="duration">3 months</p>
                  </div>
                  <div>
                    <p className="txt">Rating</p>
                    <p className="rating"><i className="fa-solid fa-star"></i> 5.0</p>
                  </div>
                  <div>
                    <p className="txt">Repeat Client</p>
                    <p className="repeat">Yes</p>
                  </div>
                </div>
                <div className="no-review">
                  <div className="left">
                    <i className="fa-regular fa-star"></i>
                    <p>No review received yet. Nudge the client - reviews boost your profile ranking and build trust with future clients.</p>
                  </div>
                  <div className="right">
                    <button>Request Review</button>
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
                    <button>Message Client</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
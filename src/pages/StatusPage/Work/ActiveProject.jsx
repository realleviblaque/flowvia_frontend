import { SideBar } from "../../../components/Sidebar";
import { StatusSectionHeader } from "../../../components/StatusPage/StatusSectionsHeader";
import './ActiveProject.css'

export function ActiveProject({all}) {
  const isMobile = window.innerWidth < 768;
  return (
    <>
      <SideBar notification={all} />
      <StatusSectionHeader />
      <main className="status-active-project-main">
        <div className="top-side">
          <div>
            <p className="active">2</p>
            <p className="txt">Active</p>
          </div>
          <div>
            <p className="value">$11.7K</p>
            <p className="txt">Total Value</p>
          </div>
          <div>
            <p className="progress">60%</p>
            <p className="txt">Avg. Progress</p>
          </div>
          <div>
            <p className="days">31d</p>
            <p className="txt">Avg. Days Left</p>
          </div>
        </div>
        <div className="nav-wrap">
          <div className="left">
            <div className="active">All (2)</div>
            <div>Client Work (1)</div>
            <div>Public Listing (1)</div>
            <span></span>
            <div className="active">Active</div>
            <div>Paused</div>
          </div>
          <div className="right">
            <div className="search-wrap">
              <i className="fa-solid fa-search"></i>
              <input type="text" placeholder="Search Projects..." />
            </div>
          </div>
        </div>
        <div className="projects-container">
          <div className="wrapper">
            <div className="top">
              <div className="up">
                <div className="first-top">
                  <div className="left">
                    <div className="project-type">Client Work</div>
                    <div className="active"><span></span> Active</div>
                  </div>
                  <div className="right">
                    Started Jan 15
                  </div>
                </div>
                <p className="title">FinDash - Fintech Analytics Platform</p>
                <p className="description">Building a real-time fintech dashboard with portfolioa analytics, transaction tracking, and custom charting.</p>
              </div>
              <div className="middle">
                <div className="client-wrap">
                  <div className="left">
                    <img src="/profile.png" />
                    <div>
                      <p className="name">Amara Osei</p>
                      <p className="user-details">@amaraosei <span></span> Recruiter</p>
                    </div>
                  </div>
                  <div className="right">
                    <i className="fa-solid fa-chevron-right"></i>
                  </div>
                </div>
                <div className="project-info-wrap">
                  <div>
                    <p className="txt">Budget</p>
                    <p className="budget">$3,200</p>
                  </div>
                  <div>
                    <p className="txt">Deadline</p>
                    <p className="deadline">Mar 20</p>
                  </div>
                  <div>
                    <p className="txt">Days Left</p>
                    <p className="days">47</p>
                  </div>
                  <div>
                    <p className="txt">Tasks</p>
                    <p className="task">3/8</p>
                  </div>
                </div>
                <div className="phase-wrap">
                  <div className="completed">
                    <span></span>
                    {isMobile ? (
                      <p>Design</p>
                    ) : 'Design'}
                  </div>
                  <div className="completed">
                    <span></span>
                    {isMobile ? (
                      <p>Frontend</p>
                    ) : 'Frontend'}
                  </div>
                  <div>
                    <span></span>
                    {isMobile ? (
                      <p>Backend</p>
                    ) : 'Backend'}
                  </div>
                  <div>
                    <span></span>
                    {isMobile ? (
                      <p>QA</p>
                    ) : 'QA'}
                  </div>
                  <div>
                    <span></span>
                    {isMobile ? (
                      <p>Launch</p>
                    ) : 'Launch'}
                  </div>
                </div>
                <div className="progress-wrap">
                  <div className="top-up">
                    <p className="progress-count">Progress <span></span> Phase 2/5</p>
                    <p className="progress-percent">40%</p>
                  </div>
                  <div className="progress-bar">
                    <span className="bar" style={{width: '40%'}}></span>
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
          <div className="wrapper">
            <div className="top">
              <div className="up">
                <div className="first-top">
                  <div className="left">
                    <div className="project-type">Public Listing</div>
                    <div className="active"><span></span> Active</div>
                  </div>
                  <div className="right">
                    Started Jan 15
                  </div>
                </div>
                <p className="title">E-Commerce Platform Rebuild</p>
                <p className="description">Pulling e-commerce rebuild with cart, checkout, inventory management, and Strip payments.</p>
              </div>
              <div className="middle">
                <div className="client-wrap">
                  <div className="left">
                    <img src="/profile.png" />
                    <div>
                      <p className="name">Apex Build Co.</p>
                      <p className="user-details">@apexbuild <span></span> Recruiter</p>
                    </div>
                  </div>
                  <div className="right">
                    <i className="fa-solid fa-chevron-right"></i>
                  </div>
                </div>
                <div className="project-info-wrap">
                  <div>
                    <p className="txt">Budget</p>
                    <p className="budget">$8,500</p>
                  </div>
                  <div>
                    <p className="txt">Deadline</p>
                    <p className="deadline">April 5</p>
                  </div>
                  <div>
                    <p className="txt">Days Left</p>
                    <p className="days">14</p>
                  </div>
                  <div>
                    <p className="txt">Tasks</p>
                    <p className="task">21/26</p>
                  </div>
                </div>
                <div className="phase-wrap">
                  <div className="completed">
                    <span></span>
                    {isMobile ? (
                      <p>Design</p>
                    ) : 'Design'}
                  </div>
                  <div className="completed">
                    <span></span>
                    {isMobile ? (
                      <p>Frontend</p>
                    ) : 'Frontend'}
                  </div>
                  <div>
                    <span></span>
                    {isMobile ? (
                      <p>Backend</p>
                    ) : 'Backend'}
                  </div>
                  <div>
                    <span></span>
                    {isMobile ? (
                      <p>QA</p>
                    ) : 'QA'}
                  </div>
                  <div>
                    <span></span>
                    {isMobile ? (
                      <p>Launch</p>
                    ) : 'Launch'}
                  </div>
                </div>
                <div className="progress-wrap">
                  <div className="top-up">
                    <p className="progress-count">Progress <span></span> Phase 4/5</p>
                    <p className="progress-percent">80%</p>
                  </div>
                  <div className="progress-bar">
                    <span className="bar" style={{width: '80%'}}></span>
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
        </div>
      </main>
    </>
  )
}
import { SideBar } from "../../../components/Sidebar";
import { StatusSectionHeader } from "../../../components/StatusPage/StatusSectionsHeader";
import './TakenProject.css'

export function TakenProject({all}) {
  const isMobile = window.innerWidth < 768;
  return (
    <>
      <SideBar notification={all} />
      <StatusSectionHeader />
      <main className="status-taken-project-main">
        <div className="top-side">
          <div>
              <p className="active">3</p>
              <p className="txt">Active</p>
          </div>
          <div>
            <p className="value">$14.5K</p>
            <p className="txt">Total Value</p>
          </div>
          <div>
            <p className="progress">68%</p>
            <p className="txt">Avg. Progress</p>
          </div>
          <div>
            <p className="days">22d</p>
            <p className="txt">Avg. Days Left</p>
          </div>
        </div>
        <div className="nav-wrap">
          <div className="left">
            
          </div>
          <div className="right">
            <div className="search-wrap">
              <i className="fa-solid fa-search"></i>
              <input type="text" placeholder="Search projects..." />
            </div>
          </div>
        </div>
        <div className="projects-container">
          <div className="wrapper">
            <div className="top">
              <div className="up">
                <div className="first-top">
                  <div className="left">
                    <div className='active'><span></span> Active</div>
                  </div>
                  <div className="right">
                    Started Aug 15
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
                      <p className="name">Amara Osei</p>
                      <p className="user-details">@zaratanaka <span></span> Reccruiter</p>
                    </div>
                  </div>
                  <div className="right">
                    <i className="fa-solid fa-chevron-right"></i>
                  </div>
                </div>
                <div className="project-info-wrap">
                  <div>
                    <p className="txt">Price</p>
                    <p className="budget">$2.2K</p>
                  </div>
                  <div>
                    <p className="txt">Deadline</p>
                    <p className="deadline">May 20</p>
                  </div>
                  <div>
                    <p className="txt">Days Left</p>
                    <p className="type">12</p>
                  </div>
                  <div>
                    <p className="txt">Progress</p>
                    <p className="applicant">75%</p>
                  </div>
                </div>
                <div className="progress-wrap">
                  <div className="top-up">
                    <p className="txt">Delivery Progress</p>
                    <p className="percent">75%</p>
                  </div>
                  <div className="progress-bar">
                    <span className="bar" style={{width: '75%'}}></span>
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
        </div>
      </main>
    </>
  )
}
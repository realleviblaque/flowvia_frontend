import { SideBar } from "../../../components/Sidebar";
import { StatusSectionHeader } from "../../../components/StatusPage/StatusSectionsHeader";
import './BookmarkJob.css'

export function BookmarkJob({all}) {
  const isMobile = window.innerWidth < 768;
  return (
    <>
      <SideBar notification={all} />
      <StatusSectionHeader />
      <main className="status-bookmark-job-main">
        <div className="top-side">
          <div>
              <p className="bookmark">8</p>
              <p className="txt">Bookmarked</p>
          </div>
          <div>
            <p className="closing">3</p>
            <p className="txt">Closing {isMobile ? '' : 'Soon'}</p>
          </div>
          <div>
            <p className="open">5</p>
            <p className="txt">Still Open</p>
          </div>
          <div>
            <p className="avg-budget">$4.5K</p>
            <p className="txt">Avg. Budget</p>
          </div>
        </div>
        <div className="nav-wrap">
          <div className="left">
            <div className='active'>All (8)</div>
            <div>Closing Soon</div>
            <div>Remote</div>
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
                    <div className='status'><span></span> Open</div>
                    <div className="closing">Close Apr 10</div>
                  </div>
                  <div className="right">
                    <i className="fa-solid fa-x"></i>
                  </div>
                </div>
                <p className="title">Senior Frontend Developer - Fintech</p>
                <div className="client-details">
                  <img src="/profile.png" />
                  <p className="name">Apex Build Co.</p>
                  <span></span>
                  <p className="username">@apexbuild</p>
                </div>
                <p className="description">Full-time contact position building a SaaS analyics dashboard with custom charts, real-time data, and an admin portal.</p>
                <div className="projects-details">
                  <div className="details">
                    <p className="project-type">Long-Term Contract</p>
                    <span></span>
                    <p className="location">Remote</p>
                    <span></span>
                    <p className="budget">$2K-$4K</p>
                  </div>
                  <div className="skills-wrap">
                    <span></span>
                    <p>React</p>
                    <span></span>
                    <p>TypeScript</p>
                    <span></span>
                    <p>D3.js</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="left">
                <button>Apply {isMobile ? '' : 'Now'}</button>
                <button>View Job {isMobile ? '' : 'Post'}</button>
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
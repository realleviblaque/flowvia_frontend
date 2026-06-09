import { GeneralSidebar } from "../../../../components/TeamPage/GeneralSidebar";
import { TeamSidebar } from "../../../../components/TeamPage/TeamSidebar";
import './TeamStatus.css'

export function TeamStatus({all}) {
  return (
    <>
      <GeneralSidebar notification={all} />
      <TeamSidebar />
      <main className="teamPageMain">
        <header className="team-status-header">
          <div className="left">
            <i className="fa-solid fa-chart-line"></i>
            <div className="info">
              <p className="hd-txt">Team Status</p>
              <div>
                Work and hiring activity across Flowvia Team
              </div>
            </div>
          </div>
          <div className="right">
            <button>
              <i className="fa-solid fa-plus"></i>
              Post a Job
            </button>
          </div>
        </header>
        <div className="status-container">
          <div className="work">
            <div className="top">
              <div className="left">
                <span></span>
              </div>
              <div className="right">
                <p className="hd-txt">Work Status</p>
                <p className="txt">Jobs your team are doing - from clients who hired your team directly at via public listings</p>
              </div>
            </div>
            <div className="bottom">
              <div className="status">
                <div className="up">
                  <p className="hd-txt">22</p>
                  <span>
                    <i className="fa-solid fa-table-cells-large"></i>
                  </span>
                </div>
                <div className="middle">
                  <p className="head-txt">Active Projects</p>
                  <p className="txt">Work your team are currently delivering</p>
                </div>
                <div className="down">
                  <button>
                    View All <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              </div>
              <div className="status">
                <div className="up">
                  <p className="hd-txt">22</p>
                  <span>
                    <i className="fa-solid fa-display"></i>
                  </span>
                </div>
                <div className="middle">
                  <p className="head-txt">Applied Jobs</p>
                  <p className="txt">Jobs your team applied to - awaiting response or in review</p>
                </div>
                <div className="down">
                  <button>
                    View All <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              </div>
              <div className="status">
                <div className="up">
                  <p className="hd-txt">22</p>
                  <span>
                    <i className="fa-regular fa-bookmark"></i>
                  </span>
                </div>
                <div className="middle">
                  <p className="head-txt">Bookmarked Jobs</p>
                  <p className="txt">Jobs your team saved to apply to later</p>
                </div>
                <div className="down">
                  <button>
                    View All <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              </div>
              <div className="status">
                <div className="up">
                  <p className="hd-txt">22</p>
                  <span>
                    <i className="fa-solid fa-arrow-up"></i>
                  </span>
                </div>
                <div className="middle">
                  <p className="head-txt">Pending Request</p>
                  <p className="txt">Direct hire requests from clients - awaiting on your response</p>
                </div>
                <div className="down">
                  <button>
                    View All <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              </div>
              <div className="status">
                <div className="up">
                  <p className="hd-txt">22</p>
                  <span>
                    <i className="fa-regular fa-square-check"></i>
                  </span>
                </div>
                <div className="middle">
                  <p className="head-txt">Completed Projects</p>
                  <p className="txt">Work your team have successfully delivered</p>
                </div>
                <div className="down">
                  <button>
                    View All <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="hire">
            <div className="top">
              <div className="left">
                <span></span>
              </div>
              <div className="right">
                <p className="hd-txt">Hire Status</p>
                <p className="txt">Jobs posts your team created - manage applicants, ongoing work, and completions</p>
              </div>
            </div>
            <div className="bottom">
              <div className="status">
                <div className="up">
                  <p className="hd-txt">22</p>
                  <span>
                    <i className="fa-solid fa-circle-plus"></i>
                  </span>
                </div>
                <div className="middle">
                  <p className="head-txt">Open Projects</p>
                  <p className="txt">Job posts currently open - accepting applications</p>
                </div>
                <div className="down">
                  <button>
                    View All <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              </div>
              <div className="status">
                <div className="up">
                  <p className="hd-txt">22</p>
                  <span>
                    <i className="fa-regular fa-message"></i>
                  </span>
                </div>
                <div className="middle">
                  <p className="head-txt">In Negotiations</p>
                  <p className="txt">Applicants your team are active discussion with before hiring</p>
                </div>
                <div className="down">
                  <button>
                    View All <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              </div>
              <div className="status">
                <div className="up">
                  <p className="hd-txt">22</p>
                  <span>
                    <i className="fa-solid fa-user-group"></i>
                  </span>
                </div>
                <div className="middle">
                  <p className="head-txt">Taken Projects</p>
                  <p className="txt">Jobs your tean hired someone for - work is currently in progress</p>
                </div>
                <div className="down">
                  <button>
                    View All <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              </div>
              <div className="status">
                <div className="up">
                  <p className="hd-txt">22</p>
                  <span>
                    <i className="fa-regular fa-user"></i>
                  </span>
                </div>
                <div className="middle">
                  <p className="head-txt">Pending Request</p>
                  <p className="txt">People who applied to your team jobs - awaiting your review</p>
                </div>
                <div className="down">
                  <button>
                    View All <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              </div>
              <div className="status">
                <div className="up">
                  <p className="hd-txt">22</p>
                  <span>
                    <i className="fa-regular fa-square-check"></i>
                  </span>
                </div>
                <div className="middle">
                  <p className="head-txt">Completed Projects</p>
                  <p className="txt">Jobs your team posted that have been fully delivered</p>
                </div>
                <div className="down">
                  <button>
                    View All <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
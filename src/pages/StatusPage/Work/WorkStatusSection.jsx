import './WorkStatusSection.css'

export function WorkStatusSection() {
  const isMobile = window.innerWidth < 768;
  return (
    <div className="work-status-container">
      <div className="work-top">
        <span></span>
        <div>
          <p>Work Status</p>
          <p className="note">Jobs you're doing - from clients who hired you directly at via public listings</p>
        </div>
      </div>
      <div className="work-cards">
        <div className="status active-project-card">
          <div className="top">
            <p className="active-project-count">22</p>
            <span>
              <i className="fa-solid fa-table-cells-large"></i>
            </span>
          </div>
          <div className="middle">
            <p className="name">Active Projects</p>
            <p className="note">{isMobile ? 'Currently delivering' : "work you're currently delivering"}</p>
          </div>
          <div className="bottom">
            <button className="view-all-btn">
              View All <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div className="status applied-job-card">
          <div className="top">
            <p className="applied-job-count">11</p>
            <span>
              <i className="fa-solid fa-display"></i>
            </span>
          </div>
          <div className="middle">
            <p className="name">Applied Jobs</p>
            <p className="note">{isMobile ? 'Awaiting response' : 'Jobs you applied to - awaiting response or in review'}</p>
          </div>
          <div className="bottom">
            <button className="view-all-btn">
              View All <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div className="status bookmark-project-card">
          <div className="top">
            <p className="bookmark-project-count">6</p>
            <span>
              <i className="fa-regular fa-bookmark"></i>
            </span>
          </div>
          <div className="middle">
            <p className="name">{isMobile ? 'Bookmarked' : 'Bookmarked Jobs'}</p>
            <p className="note">{isMobile ? 'Saved to apply later' : 'Jobs you saved to apply to later'}</p>
          </div>
          <div className="bottom">
            <button className="view-all-btn">
              View All <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div className="status pending-request-card">
          <div className="top">
            <p className="pending-request-count">8</p>
            <span>
              <i className="fa-solid fa-arrow-up"></i>
            </span>
          </div>
          <div className="middle">
            <p className="name">{isMobile ? 'Hire' : 'Pending'} Request</p>
            <p className="note">{isMobile ? 'Direct from clients' : 'Direct hire requests from clients - awaiting on your response'}</p>
          </div>
          <div className="bottom">
            <button className="view-all-btn">
              View All <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div className="status completed-project-card">
          <div className="top">
            <p className="completed-project-count">8</p>
            <span>
              <i className="fa-regular fa-square-check"></i>
            </span>
          </div>
          <div className="middle">
            <p className="name">{isMobile ? 'Completed' : 'Completed Projects'}</p>
            <p className="note">{isMobile ? 'Fully' : 'Work you have successfully'} delivered</p>
          </div>
          <div className="bottom">
            <button className="view-all-btn">
              View All <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
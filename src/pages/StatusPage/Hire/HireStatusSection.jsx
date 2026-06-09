import './HireStatusSection.css'

export function HireStatusSection() {
  return (
    <div className="hire-status-container">
      <div className="work-top">
        <span></span>
        <div>
          <p>Hire Status</p>
          <p className="note">Jobs posts you created - manage applicants, ongoing work, and completions</p>
        </div>
      </div>
      <div className="work-cards">
        <div className="status open-project-card">
          <div className="top">
            <p className="open-project-count">20</p>
            <span>
              <i className="fa-solid fa-circle-plus"></i>
            </span>
          </div>
          <div className="middle">
            <p className="name">Open Projects</p>
            <p className="note">Job posts currently open - accepting applications</p>
          </div>
          <div className="bottom">
            <button className="view-all-btn">
              View All <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div className="status negotiation-card">
          <div className="top">
            <p className="negotiation-count">10</p>
            <span>
              <i className="fa-regular fa-message"></i>
            </span>
          </div>
          <div className="middle">
            <p className="name">In Negotiations</p>
            <p className="note">Applicants you're in active discussion with before hiring</p>
          </div>
          <div className="bottom">
            <button className="view-all-btn">
              View All <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div className="status taken-project-card">
          <div className="top">
            <p className="taken-project-count">9</p>
            <span>
              <i className="fa-solid fa-user-group"></i>
            </span>
          </div>
          <div className="middle">
            <p className="name">Taken Projects</p>
            <p className="note">Jobs you hired someone for - work is currently in progress</p>
          </div>
          <div className="bottom">
            <button className="view-all-btn">
              View All <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div className="status hire-pending-request-card">
          <div className="top">
            <p className="hire-pending-request-count">18</p>
            <span>
              <i className="fa-regular fa-user"></i>
            </span>
          </div>
          <div className="middle">
            <p className="name">Pending Request</p>
            <p className="note">People who applied to your jobs - awaiting your review</p>
          </div>
          <div className="bottom">
            <button className="view-all-btn">
              View All <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div className="status hire-completed-project-card">
          <div className="top">
            <p className="complete-open-project-count">33</p>
            <span>
              <i className="fa-regular fa-square-check"></i>
            </span>
          </div>
          <div className="middle">
            <p className="name">Completed Projects</p>
            <p className="note">Jobs you posted that have been fully delivered</p>
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
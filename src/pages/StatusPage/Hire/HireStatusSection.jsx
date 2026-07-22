import { useNavigate } from 'react-router-dom';
import './HireStatusSection.css'

export function HireStatusSection() {
  const isMobile = window.innerWidth < 768;
  const navigate = useNavigate();
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
            <p className="note">{isMobile ? 'Job posts currently open' : 'Job posts currently open - accepting applications'}</p>
          </div>
          <div className="bottom">
            <button className="view-all-btn" onClick={() => navigate('/status/hire/open')}>
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
            <p className="name">{isMobile ? 'Negotiating' : 'In Negotiations'}</p>
            <p className="note">{isMobile ? 'In discussion' : "Applicants you're in active discussion with before hiring"}</p>
          </div>
          <div className="bottom">
            <button className="view-all-btn" onClick={() => navigate('/status/hire/negotiation')}>
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
            <p className="note">{isMobile ? 'Job currently in progress' : 'Jobs you hired someone for - work is currently in progress'}</p>
          </div>
          <div className="bottom">
            <button className="view-all-btn" onClick={() => navigate('/status/hire/taken')}>
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
            <p className="name">Pending {isMobile ? '' : 'Request'}</p>
            <p className="note">{isMobile ? 'Need review' : 'People who applied to your jobs - awaiting your review'}</p>
          </div>
          <div className="bottom">
            <button className="view-all-btn" onClick={() => navigate('/status/hire/pending')}>
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
            <p className="name">Completed {isMobile ? '' : 'Projects'}</p>
            <p className="note">{isMobile ? 'Fully delivered' : 'Jobs you posted that have been fully delivered'}</p>
          </div>
          <div className="bottom">
            <button className="view-all-btn" onClick={() => navigate('/status/hire/completed')}>
              View All <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
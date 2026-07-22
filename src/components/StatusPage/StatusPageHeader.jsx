import { useNavigate } from 'react-router-dom'
import './StatusPageHeader.css'

export function StatusPageHeader() {
  const navigate = useNavigate();
  return (
    <header className='status-header'>
      <div className="left">
        <p>Status</p>
        <p>Track your work - client jobs, public projects, and hiring posts</p>
      </div>
      <div className="right">
        <button className="post-job-btn" onClick={() => navigate('/status/create/job')}>
          <i className="fa-solid fa-plus"></i>
          <p>Post a Job</p>
        </button>
      </div>
    </header>
  )
}
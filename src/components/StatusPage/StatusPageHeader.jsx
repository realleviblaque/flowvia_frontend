import './StatusPageHeader.css'

export function StatusPageHeader() {
  return (
    <header className='status-header'>
      <div className="left">
        <p>Status</p>
        <p>Track your work - client jobs, public projects, and hiring posts</p>
      </div>
      <div className="right">
        <button className="post-job-btn">
          <i className="fa-solid fa-plus"></i>
          <p>Post a Job</p>
        </button>
      </div>
    </header>
  )
}
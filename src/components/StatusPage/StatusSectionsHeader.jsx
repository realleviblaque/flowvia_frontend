import { useLocation, useNavigate } from 'react-router-dom'
import './StatusSectionHeader.css'
import { SelectOption } from './SelectOptions';

export function StatusSectionHeader({selectedId, setSelectedId}) {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = window.innerWidth < 768;
  return (
    <header className="status-section-header">
      <div className="left">
        {isMobile ? (
          <i className="fa-solid fa-chevron-left go-back" onClick={() => navigate('/status')}></i>
        ) : (
            <button onClick={() => navigate('/status')}>
              <i className="fa-solid fa-chevron-left"></i> 
              Back to Status
            </button>
        )}
        <span></span>
        <div>
            {location.pathname === '/status/work/active' && (
              <>
                <p className="hd">Active Projects</p>
                <p className="txt">Work you're currently delivering</p>
              </>
            )}
            {location.pathname === '/status/work/applied' && (
              <>
                <p className="hd">Applied Jobs</p>
                <p className="txt">Jobs you've applied to</p>
              </>
            )}
            {location.pathname === '/status/work/bookmark' && (
              <>
                <p className="hd">Bookmarked Jobs</p>
                <p className="txt">Saved to apply later</p>
              </>
            )}
            {location.pathname === '/status/work/pending' && (
              <>
                <p className="hd">Pending Requests</p>
                <p className="txt">Direct hire requests from clients - waiting on your response</p>
              </>
            )}
            {location.pathname === '/status/work/completed' && (
              <>
                <p className="hd">Completed Projects</p>
                <p className="txt">Projects you completed for clients - your delivered work history</p>
              </>
            )}
            {location.pathname === '/status/hire/open' && (
              <>
                <p className="hd">Open Projects</p>
                <p className="txt"> Your live job posts - accepting applications</p>
              </>
            )}
            {location.pathname === '/status/hire/negotiation' && (
              <>
                <p className="hd">In Negotiation</p>
                <p className="txt">Applicants you're in active discussion with</p>
              </>
            )}
            {location.pathname === '/status/hire/taken' && (
              <>
                <p className="hd">Taken Projects</p>
                <p className="txt">Jobs you hired someone for - work in progress</p>
              </>
            )}
            {location.pathname === '/status/hire/pending' && (
              <>
                <p className="hd">Pending Requests</p>
                <p className="txt">People who applied to your jobs - awaiting your review</p>
              </>
            )}
            {location.pathname === '/status/hire/completed' && (
              <>
                <p className="hd">Completed Projects</p>
                <p className="txt">Jobs you posted that were fully delivered</p>
              </>
            )}
        </div>
      </div>
        <div className="right">
          {location.pathname === '/status/hire/open' && (
            <>
              {isMobile ? (
                <button className='p-draft'>Drafts</button>
              ) : (
                  <button className='draft'>
                    <i className="fa-solid fa-pencil"></i>
                    Drafts
                    <span>0</span>
                  </button>
              )}
              {isMobile ? (
                <button className='p-post'>
                  Post Job
                </button>
              ) : (
                <button className='post'>
                  <i className="fa-solid fa-plus"></i>
                  Post a Job
                </button>
              )}
            </>
          )}
          {location.pathname === '/status/hire/pending' && (
            <SelectOption selectedId={selectedId} setSelectedId={setSelectedId} />
          )}
      </div>
    </header>
  )
}
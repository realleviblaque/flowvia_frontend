import './MarketplacePageHeader.css'

export function MarketplacePageHeader({type}) {
  return (
    <header className='marketplace-header'>
      <div className="top">
        <p>Marketplace</p>
        <input type="text" placeholder="Search talent, teams or jobs..." id="search-input" />
        <button className="search-btn">Search</button>
      </div>
      <div className="bottom">
        {type === 'freelancer' && (
          <div className="individual-filter-wrap">
            <div className="all-filter active-filter">All</div>
            <div className="available-filter">Available Now</div>
          </div>
        )}
        {type === 'team' && (
          <div className="team-filter-wrap team-filter-gone">
            <div className="all-team-filter active-filter">All</div>
            <div className="open-status-filter">Open</div>
            <div className="busy-status-filter">Busy</div>
            <div className="verified-team-filter">Verified Team</div>
          </div>
        )}
        {type == 'job' && (
          <div className="job-filter-wrap job-filter-gone">
            <div className="all-job-filter active-filter">All</div>
            <div className="remote-filter">Remote</div>
            <div className="deadline-filter">Deadline: None</div>
            <div className="mid-senior-filter">Mid-Senior</div>
            <div className="senior-filter">Senior</div>
            <div className="mid-level-filter">Mid-Level</div>
            <div className="any-level-filter">Any Level</div>
            <div className="long-term-filter">Long Term Contract</div>
            <div className="one-time-filter">One-Time Project</div>
          </div>
        )}
      </div>
    </header>
  )
}
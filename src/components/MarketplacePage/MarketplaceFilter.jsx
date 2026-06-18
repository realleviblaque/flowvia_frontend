import { useLocation } from 'react-router-dom'
import './MarketplaceFilter.css'

export function MarketplaceFilter() {
  const location = useLocation();
  return (
    <div className="marketplace-filter">
      <div className="search">
        <i className="fa-solid fa-search"></i>
        <input type="search" placeholder={`Search ${location.pathname === '/marketplace' ? 'freelancers' :location.pathname === '/marketplace/teams' ? 'teams' :location.pathname === '/marketplace/jobs' ? 'jobs' : ''}, ${location.pathname === '/marketplace/jobs' ? 'opportunities' : 'skills'}...`} />
      </div>
      <div className="filter">
        {location.pathname === '/marketplace' && (
          <>
            <span className='active'>All</span>
            <span>Available Now</span>
            <span>Open to Work</span>
          </>
        )}
        {location.pathname === '/marketplace/teams' && (
          <>
            <span className='active'>All</span>
            <span>Open</span>
            <span>Busy</span>
            <span>Verified Team</span>
          </>
        )}
        {location.pathname === '/marketplace/jobs' && (
          <>
            <span className='active'>All</span>
            <span>Remote</span>
            <span>Deadline: None</span>
            <span>Mid-Senior</span>
            <span>Senior</span>
            <span>Mid-Level</span>
            <span>Any Level</span>
            <span>Long Term Contract</span>
            <span>One-Time Project</span>
          </>
        )}
      </div>
    </div>
  )
}
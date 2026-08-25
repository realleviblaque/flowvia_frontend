import { useLocation, useSearchParams } from 'react-router-dom'
import './MarketplacePageHeader.css'
import { useEffect, useState } from 'react';

export function MarketplacePageHeader({freelancersFilter, setFreelancersFilter, teamsFilter, setTeamsFilter, jobsFilter, setJobsFilter, jobsStatusFilter, setJobsStatusFilter}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('search') || '')
  const location = useLocation();
  useEffect(() => {
    const inputSet = () => {
      setSearch(searchParams.get('search') || '')
    }
    inputSet();
  }, [searchParams])
  const handleInput = (e) => {
    setSearch(e.target.value)
  }
  const handleKeydown = (e) => {
    if (search.trim()) {
      if (e.key === 'Enter') {
        handleSearch();
      }
    }
    if (!search.trim()) {
      if (e.key === 'Enter') {
        setSearchParams({
          search: ''
        })
      }
    }
    if (e.key === 'Escape') {
      setSearch('')
      setSearchParams({
        search: ''
      })
    }
  }
  const handleSearch = () => {
    if (search.trim()) {
      setSearchParams({
        search: search.trim()
      })
    }
    if (!search.trim()) {
      setSearchParams({
        search: ''
      })
    }
  }
  return (
    <header className='marketplace-header'>
      <div className="top">
        <p>Marketplace</p>
        <input type="text" placeholder="Search talent, teams or jobs..." id="search-input" value={search} onInput={(e) => handleInput(e)} onKeyDown={(e) => handleKeydown(e)} />
        <button className="search-btn" onClick={handleSearch}>Search</button>
      </div>
      <div className="bottom">
        {location.pathname === '/marketplace' && (
          <div className="individual-filter-wrap">
            <div className={freelancersFilter === 'all' ? 'active' : ''} onClick={() => setFreelancersFilter('all')}>All</div>
            <div className={freelancersFilter === 'available' ? 'active' : ''} onClick={() => setFreelancersFilter('available')}>Available Now</div>
            <div className={freelancersFilter === 'busy' ? 'active' : ''} onClick={() => setFreelancersFilter('busy')}>Busy</div>
            <div className={freelancersFilter === '1kbudget' ? 'active' : ''} onClick={() => setFreelancersFilter('1kbudget')}><i className="fa-solid fa-chevron-left"></i> $1K Budget</div>
          </div>
        )}
        {location.pathname === '/marketplace/teams' && (
          <div className="team-filter-wrap">
            <div className={teamsFilter === 'all' ? 'active' : ''} onClick={() => setTeamsFilter('all')}>All</div>
            <div className={teamsFilter === 'open' ? 'active' : ''} onClick={() => setTeamsFilter('open')}>Open</div>
            <div className={teamsFilter === 'busy' ? 'active' : ''} onClick={() => setTeamsFilter('busy')}>Busy</div>
            <div className={teamsFilter === 'verified' ? 'active' : ''} onClick={() => setTeamsFilter('verified')}>Verified Team</div>
          </div>
        )}
        {location.pathname == '/marketplace/jobs' && (
          <div className="job-filter-wrap">
            <div className={jobsFilter === 'all' ? 'active' : ''} onClick={() => setJobsFilter('all')}>All</div>
            <div className={jobsFilter === 'remote' ? 'active' : ''} onClick={() => setJobsFilter('remote')}>Remote</div>
            <div className={jobsFilter === 'on-site' ? 'active' : ''} onClick={() => setJobsFilter('on-site')}>On-Site</div>
            <div className={jobsFilter === 'deadline-open' ? 'active' : ''} onClick={() => setJobsFilter('deadline-open')}>Deadline: Open</div>
            <div className={jobsFilter === 'mid-senior' ? 'active' : ''} onClick={() => setJobsFilter('mid-senior')}>Mid-Senior</div>
            <div className={jobsFilter === 'senior' ? 'active' : ''} onClick={() => setJobsFilter('senior')}>Senior</div>
            <div className={jobsFilter === 'mid-level' ? 'active' : ''} onClick={() => setJobsFilter('mid-level')}>Mid-Level</div>
            <div className={jobsFilter === 'any-level' ? 'active' : ''} onClick={() => setJobsFilter('any-level')}>Any Level</div>
            <div className={jobsFilter === 'long-term' ? 'active' : ''} onClick={() => setJobsFilter('long-term')}>Long Term Contract</div>
            <div className={jobsFilter === 'one-time' ? 'active' : ''} onClick={() => setJobsFilter('one-time')}>One-Time Project</div>
            <select value={jobsStatusFilter} onChange={e => setJobsStatusFilter(e.target.value)}>
              <option value="all">All</option>
              <option value="open">Open</option>
              <option value="under-discussion">Under Discussion</option>
              <option value="taken">Taken</option>
            </select>
          </div>
        )}
      </div>
    </header>
  )
}
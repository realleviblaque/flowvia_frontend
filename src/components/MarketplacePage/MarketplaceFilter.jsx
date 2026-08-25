import { useLocation, useSearchParams } from 'react-router-dom'
import './MarketplaceFilter.css'
import { useEffect, useState } from 'react';

export function MarketplaceFilter({freelancersFilter, setFreelancersFilter, teamsFilter, setTeamsFilter, jobsFilter, setJobsFilter, jobsStatusFilter, setJobsStatusFilter}) {
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
  const handleCancle = () => {
    setSearch('')
    setSearchParams({
      search: ''
    })

  }
  return (
    <div className="marketplace-filter">
      <div className="search">
        <i className="fa-solid fa-search"></i>
        <input type="search" placeholder={`Search ${location.pathname === '/marketplace' ? 'freelancers' :location.pathname === '/marketplace/teams' ? 'teams' :location.pathname === '/marketplace/jobs' ? 'jobs' : ''}, ${location.pathname === '/marketplace/jobs' ? 'opportunities' : 'skills'}...`} value={search} onInput={(e) => handleInput(e)} onKeyDown={(e) => handleKeydown(e)} />
        <i className={`fa-solid fa-x cancel ${search && 'show'}`} onClick={handleCancle}></i>
      </div>
      <div className="filter">
        {location.pathname === '/marketplace' && (
          <>
            <span className={freelancersFilter === 'all' ? 'active' : ''} onClick={() => setFreelancersFilter('all')}>All</span>
            <span className={freelancersFilter === 'available' ? 'active' : ''} onClick={() => setFreelancersFilter('available')}>Available Now</span>
            <span className={freelancersFilter === 'busy' ? 'active' : ''} onClick={() => setFreelancersFilter('busy')}>Busy</span>
            <span className={freelancersFilter === '1kbudget' ? 'active' : ''} onClick={() => setFreelancersFilter('1kbudget')}><i className="fa-solid fa-chevron-left"></i> $1K Budget</span>
          </>
        )}
        {location.pathname === '/marketplace/teams' && (
          <>
            <span className={teamsFilter === 'all' ? 'active' : ''} onClick={() => setTeamsFilter('all')}>All</span>
            <span className={teamsFilter === 'open' ? 'active' : ''} onClick={() => setTeamsFilter('open')}>Open</span>
            <span className={teamsFilter === 'busy' ? 'active' : ''} onClick={() => setTeamsFilter('busy')}>Busy</span>
            <span className={teamsFilter === 'verified' ? 'active' : ''} onClick={() => setTeamsFilter('verified')}>Verified Team</span>
          </>
        )}
        {location.pathname === '/marketplace/jobs' && (
          <>
            <span className={jobsFilter === 'all' ? 'active' : ''} onClick={() => setJobsFilter('all')}>All</span>
            <span className={jobsFilter === 'remote' ? 'active' : ''} onClick={() => setJobsFilter('remote')}>Remote</span>
            <span className={jobsFilter === 'on-site' ? 'active' : ''} onClick={() => setJobsFilter('on-site')}>On-Site</span>
            <span className={jobsFilter === 'deadline-open' ? 'active' : ''} onClick={() => setJobsFilter('deadline-open')}>Deadline: Open</span>
            <span className={jobsFilter === 'mid-senior' ? 'active' : ''} onClick={() => setJobsFilter('mid-senior')}>Mid-Senior</span>
            <span className={jobsFilter === 'senior' ? 'active' : ''} onClick={() => setJobsFilter('senior')}>Senior</span>
            <span className={jobsFilter === 'mid-level' ? 'active' : ''} onClick={() => setJobsFilter('mid-level')}>Mid-Level</span>
            <span className={jobsFilter === 'any-level' ? 'active' : ''} onClick={() => setJobsFilter('any-level')}>Any Level</span>
            <span className={jobsFilter === 'long-term' ? 'active' : ''} onClick={() => setJobsFilter('long-term')}>Long Term Contract</span>
            <span className={jobsFilter === 'one-time' ? 'active' : ''} onClick={() => setJobsFilter('one-time')}>One-Time Project</span>
            <select value={jobsStatusFilter} onChange={e => setJobsStatusFilter(e.target.value)}>
              <option value="all">All</option>
              <option value="open">Open</option>
              <option value="under-discussion">Under Discussion</option>
              <option value="taken">Taken</option>
            </select>
          </>
        )}
      </div>
    </div>
  )
}
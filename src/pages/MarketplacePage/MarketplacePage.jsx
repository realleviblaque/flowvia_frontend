import { Outlet, useLocation } from 'react-router-dom'
import './MarketplacePage.css'
import { useEffect, useState } from 'react'

export function MarketplacePage() {
  const [freelancersFilter, setFreelancersFilter] = useState('all');
  const [teamsFilter, setTeamsFilter] = useState('all');
  const [jobsFilter, setJobsFilter] = useState('all');
  const [jobsStatusFilter, setJobsStatusFilter] = useState('open')
  
  // this resets everything back to default once we navigate to another page or once the url changes
  const location = useLocation();
  useEffect(() => {
    const hadleReset = () => {
      setFreelancersFilter('all')
      setTeamsFilter('all')
      setJobsFilter('all')
      setJobsStatusFilter('open')
    }
    hadleReset()
  }, [location.pathname])
  return (
    <Outlet context={{
      freelancersFilter, 
      setFreelancersFilter, 
      teamsFilter, 
      setTeamsFilter, 
      jobsFilter, 
      setJobsFilter, 
      jobsStatusFilter, 
      setJobsStatusFilter
    }} />
  )
}
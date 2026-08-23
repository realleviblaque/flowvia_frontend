import { Outlet } from 'react-router-dom'
import './MarketplacePage.css'
import { useState } from 'react'

export function MarketplacePage() {
  const [freelancersFilter, setFreelancersFilter] = useState('all');
  const [teamsFilter, setTeamsFilter] = useState('all');
  const [jobsFilter, setJobsFilter] = useState('all');
  const [jobsStatusFilter, setJobsStatusFilter] = useState('open')
  return (
    <Outlet context={{freelancersFilter, setFreelancersFilter, teamsFilter, setTeamsFilter, jobsFilter, setJobsFilter, jobsStatusFilter, setJobsStatusFilter}} />
  )
}
import { NavLink } from 'react-router-dom'
import './TeamMarketplaceNavbar.css'

export function TeamMarketplaceNavbar() {
  return (
    <div className="main-head">
      <NavLink to='/team/marketplace' end className="freelancer-tab">Freelancers</NavLink>
      <NavLink to='/team/marketplace/teams' className="team-tab">Teams</NavLink>
      <NavLink to='/team/marketplace/jobs' className="job-tab">Jobs</NavLink>
    </div>
  )
}
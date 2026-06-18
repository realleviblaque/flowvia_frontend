import { NavLink } from 'react-router-dom'

export function MarketplaceNavbar() {
  return (
    <div className="main-head">
      <NavLink to='/marketplace' end className="freelancer-tab">Freelancers</NavLink>
      <NavLink to='/marketplace/teams' className="team-tab">Teams</NavLink>
      <NavLink to='/marketplace/jobs' className="job-tab">Jobs</NavLink>
    </div>
  )
}
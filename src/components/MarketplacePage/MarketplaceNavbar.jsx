import { NavLink, useSearchParams } from 'react-router-dom'

export function MarketplaceNavbar() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search')
  return (
    <div className="main-head">
      <NavLink to={`${search ? `/marketplace?search=${search}` : '/marketplace'}`} end className="freelancer-tab">Freelancers</NavLink>
      <NavLink to={`${search ? `/marketplace/teams?search=${search}` : '/marketplace/teams'}`} className="team-tab">Teams</NavLink>
      <NavLink to={`${search ? `/marketplace/jobs?search=${search}` : '/marketplace/jobs'}`} className="job-tab">Jobs</NavLink>
    </div>
  )
}
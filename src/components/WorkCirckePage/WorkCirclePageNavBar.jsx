import { NavLink } from "react-router-dom"
import './WorkCirclePageNavBar.css'

export function WorkCirclePageNavBar({freelancer, client}) {
  return (
    <div className="work-circle-filter-container">
      <NavLink to='/work-circle' end className="freelan-filter-btn">
        Freelancers <span className="frealancer-total-count">{freelancer.length}</span>
      </NavLink>
      <NavLink to='/work-circle/clients' className="client-filter-btn">
        Clients <span className="client-total-count">{client.length}</span>
      </NavLink>
    </div>
  )
}
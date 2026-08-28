import { NavLink } from 'react-router-dom'
import './BottomBar.css'

export function BottomBar({hadnlePlusDialogOpen, chatOpen}) {
  return (
    <div className={`bottom-bar ${chatOpen ? 'chat-open' : ''}`}>
      <NavLink to='/'>
        <i className="fa-solid fa-house"></i>
        Home
      </NavLink>
      <NavLink to='/marketplace'>
        <i className="fa-solid fa-briefcase"></i>
        Marketplace
      </NavLink>
      <div onClick={hadnlePlusDialogOpen}><i className="fa-solid fa-plus"></i></div>
      <NavLink to='/status'>
        <i className="fa-solid fa-chart-line"></i>
        Status
      </NavLink>
      <NavLink to='/projects'>
        <i className="fa-solid fa-folder"></i>
        Projects
      </NavLink>
    </div>
  )
}

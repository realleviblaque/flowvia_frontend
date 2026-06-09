import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo/logo.png'
import './GeneralSidebar.css'

export function GeneralSidebar({notification}) {
  return (
    <>
      <nav className='general-sidebar'>
        <div className="contetn-container">
          <div className="head-logo">
            <Link className="head-content" to='/'>
              <img src={logo} />
            </Link>
          </div>
          <ul className="main-ul">
            <NavLink className='nav-link' to='/'>
              <i className='fa-solid fa-house'></i>
            </NavLink>
            <NavLink className='nav-link' to='/status'>
              <i className='fa-solid fa-chart-line'></i>
            </NavLink>
            <NavLink className='nav-link' to='/projects'>
              <i className='fa-solid fa-folder'></i>
            </NavLink>
            <NavLink className='nav-link' to='/marketplace'>
              <i className='fa-solid fa-briefcase'></i>
            </NavLink>
            <NavLink className='nav-link' to='/messages'>
              <i className='fa-solid fa-message'></i>
            </NavLink>
            <NavLink className='nav-link' to='/team'>
              <i className='fa-solid fa-users'></i>
            </NavLink>
            <NavLink className='nav-link' to='/work-circle'>
              <i className='fa-solid fa-circle-nodes'></i>
            </NavLink>
            <NavLink className='nav-link' to='/notification'>
              <i className='fa-solid fa-bell'></i>
              {notification >= 1 && <span className="notify-red"></span>}
            </NavLink>
            <NavLink className='nav-link' to='/profile'>
              <i className='fa-solid fa-user'></i>
            </NavLink>
            <NavLink className='nav-link' to='/settings'>
              <i className='fa-solid fa-gear'></i>
            </NavLink>
          </ul>
          <div className="nav-bottom">
            <div className='nav-profile'>
              <img src="/profile.png" />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
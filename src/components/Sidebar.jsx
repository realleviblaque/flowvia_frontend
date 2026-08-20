import { Link, NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/logo/logo.png'
import './SideBar.css'
import { activeProject } from '../data/StatusPage/activeProject';
import { appliedJob } from '../data/StatusPage/appliedJob';
import { bookmarkJob } from '../data/StatusPage/bookmarkJob';
import { workPendingRequest } from '../data/StatusPage/workPendingRequest';
import { workCompletedProject } from '../data/StatusPage/workCompletedProject';
import dayjs from '../lib/dayjs';

const statusActive = (path, current) => current.startsWith(path);

export function SideBar({notification}) {
  const active = activeProject.filter(p => !p.isPaused).length;
  const applied = appliedJob.length;
  const bookmark = bookmarkJob.length;
  const request = workPendingRequest.length;
  const completed = workCompletedProject.length;
  let expired = 0;
  workPendingRequest.forEach(p => {
    const expirationDays = 5;
    const createdAt = dayjs(p.createdAt);
    const daysElapsed = dayjs().diff(createdAt, 'day');
    const daysLeft = expirationDays - daysElapsed;
    if (daysLeft <= 0) expired ++;
  })
  const location = useLocation();
  const [viewStatus, setViewStatus] = useState(false)
  return (
    <>
      <nav className='main-sidebar'>
        <div className="contetn-container">
          <div className="head-logo">
            <Link className="head-content" to='/'>
              <img src={logo} />
              <p>Flowvia</p>
            </Link>
          </div>
          <ul className="main-ul">
            <NavLink className={`nav-link ${statusActive('/post' ,location.pathname) ? 'active' : ''}`} to='/'>
              <i className='fa-solid fa-house'></i>
              Home
            </NavLink>
            <div className={statusActive('/status', location.pathname) ? 'active stat' : 'stat'}>
              <div className="stat-text">
                <NavLink className='status-nav-link' to='/status'>
                  <i className='fa-solid fa-chart-line'></i>
                  Status
                </NavLink>
                <i className='fa-solid fa-chevron-down stat-click' onClick={(event) => {
                  viewStatus ? `${setViewStatus(false)} ${event.target.className = 'fa-solid fa-chevron-down stat-click'}` : `${setViewStatus(true)} ${event.target.className = 'fa-solid fa-chevron-up stat-click'}`;
                }}></i>
              </div>
              <div className={viewStatus ? "status-open status-view" : 'status-view'}>
                <ul className="client">
                  <NavLink className='status-inlink' href="">Open Projects <p>10</p></NavLink>
                  <NavLink className='status-inlink' href="">In Negotiations <p>22</p></NavLink>
                  <NavLink className='status-inlink' href="">Taken Projects <p>11</p></NavLink>
                  <NavLink className='status-inlink' href="">Completed Projects<p className="completet-status-project">8</p></NavLink>
                  <NavLink className='status-inlink' href="">Bookmarked <p>22</p></NavLink>
                  <NavLink className='status-inlink' href="">Pending Request <p>11</p></NavLink>
                </ul>
                <ul className="team">
                  <NavLink className='status-inlink' href="">Available Jobs <p>10</p></NavLink>
                  <NavLink className='status-inlink' href="">Active Projects <p className="active-status-project">22</p></NavLink>
                  <NavLink className='status-inlink' href="">Applied Jobs <p>11</p></NavLink>
                  <NavLink className='status-inlink' href="">Bookmarked Jobs<p>6</p></NavLink>
                  <NavLink className='status-inlink' href="">Completed Projects<p className="completet-status-project">8</p></NavLink>
                  <NavLink className='status-inlink' href="">Pending Request <p>11</p></NavLink>
                </ul>
                <ul className="self">
                  <NavLink className='status-inlink' to="/status/work/active">Active Projects <p className="active-status-project">{active}</p></NavLink>
                  <NavLink className='status-inlink' to="/status/work/applied">Applied Jobs <p>{applied}</p></NavLink>
                  <NavLink className='status-inlink' to="/status/work/bookmark">Bookmarked Jobs<p>{bookmark}</p></NavLink>
                  <NavLink className='status-inlink' to="/status/work/pending">Pending Request<p>{request - expired}</p></NavLink>
                  <NavLink className='status-inlink' to="/status/work/completed">Completed Projects<p className="completet-status-project">{completed}</p></NavLink>
                </ul>
              </div>
            </div>
            <NavLink className='nav-link' to='/projects'>
              <i className='fa-solid fa-folder'></i>
              Projects
            </NavLink>
            <NavLink className='nav-link' to='/marketplace'>
              <i className='fa-solid fa-briefcase'></i>
              Marketplace
            </NavLink>
            <NavLink className='nav-link' to='/messages'>
              <i className='fa-solid fa-message'></i>
              Messages
            </NavLink>
            <NavLink className='nav-link' to='/team'>
              <i className='fa-solid fa-users'></i>
              Team
            </NavLink>
            <NavLink className='nav-link' to='/work-circle'>
              <i className='fa-solid fa-circle-nodes'></i>
              Work Circle
            </NavLink>
            <NavLink className='nav-link' to='/notification'>
              <i className='fa-solid fa-bell'></i>
              {notification >= 1 && <span className="notify-red"></span>}
              Notifications
            </NavLink>
            <NavLink className='nav-link' to='/profile'>
              <i className='fa-solid fa-user'></i>
              Profile
            </NavLink>
            <NavLink className='nav-link' to='/settings'>
              <i className='fa-solid fa-gear'></i>
              Settings
            </NavLink>
          </ul>
          <div className="nav-bottom">
            <div className='nav-profile'>
              <img src="/profile.png" />
              <div>
                <p className='name'>Levi Blaque</p>
                <p className='username'>@realleviblaque</p>
              </div>
            </div>
            <button className="btn-nav-click"> <i className='fa-solid fa-plus'></i> Create Team</button>
            <button className='logout-btn'>
              <i className='fa-solid fa-arrow-right'></i>
              Logout
            </button>
          </div>
          <dialog className="dialog">
            <div className="close-dialog">
              <i className='fa-solid fa-xmark'></i>
            </div>
            <p className="dialog-head-text">Welcome to Flowvia Team</p>
            <span></span>
            <div className="dialog-action">
              <button>Create New Team</button>
              <p>or</p>
              <button>Join Existing Team</button>
            </div>
          </dialog>
        </div>
      </nav>
    </>
  )
}
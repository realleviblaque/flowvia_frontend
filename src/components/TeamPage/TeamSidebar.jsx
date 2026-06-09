import { NavLink } from 'react-router-dom'
import './TeamSidebar.css'

export function TeamSidebar() {
  return (
    <nav className='team-sidebar'>
      <div className="profile-top">
        <div className="top">
          <div className="img">
            <img src="/profile.png" />
            <span className="active"></span>
          </div>
          <div className="team-info">
            <p className="name">Flowvia Team</p>
            <div className="details">
              <p>@flowviateam</p>
              <span></span>
              <p>5 members</p>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div>
            <p className="project">8</p>
            <p className="txt">Projects</p>
          </div>
          <div>
            <p className="earnings">$120K</p>
            <p className="txt">Earned</p>
          </div>
          <div>
            <p className="status">Open</p>
            <p className="txt">Status</p>
          </div>
        </div>
      </div>
      <nav className="tabs">
        <NavLink to='/team' end>
          <i className="fa-regular fa-message"></i>
          Team Chat
          <span>5</span>
        </NavLink>
        <NavLink to='/team/projects'>
          <i className="fa-regular fa-folder"></i>
          Projects
        </NavLink>
        <NavLink to='/team/members'>
          <i className="fa-regular fa-user"></i>
          Members
        </NavLink>
        <NavLink to='/team/status'>
          <i className="fa-solid fa-chart-line"></i>
          Status
        </NavLink>
        <NavLink to='/team/marketplace'>
          <i className="fa-solid fa-briefcase"></i>
          Marketplace
        </NavLink>
        <NavLink to='/team/portfolio'>
          <i className="fa-regular fa-bookmark"></i>
          Portfolio
        </NavLink>
        <NavLink to='/team/overview'>
          <i className="fa-regular fa-clock"></i>
          Overview
        </NavLink>
        <NavLink to='/team/profile'>
          <i className="fa-regular fa-user"></i>
          Profile
        </NavLink>
      </nav>
      <div className="direct-msg">
        <div className="top">
          <p>Direct Messages</p>
          <i className="fa-solid fa-plus" title='Add new member'></i>
        </div>
        <div className="bottom">
          <div className="members">
            <div className="img">
              <img src="/profile.png" />
              <span className="active"></span>
            </div>
            <p className="name">Amara Osei</p>
            <span className="new-msg" title='sent you a new message'></span>
          </div>
          <div className="members">
            <div className="img">
              <img src="/profile.png" />
              <span className="active"></span>
            </div>
            <p className="name">Tunde Nwosu</p>
          </div>
          <div className="members">
            <div className="img">
              <img src="/profile.png" />
            </div>
            <p className="name">Kofi Mensah</p>
          </div>
          <div className="members">
            <div className="img">
              <img src="/profile.png" />
            </div>
            <p className="name">Zara Tanaka</p>
          </div>
        </div>
      </div>
      <NavLink to='/team/settings' className='settings-tab'>
        <i className="fa-solid fa-plus"></i>
        Settings
      </NavLink>
    </nav>
  )
}
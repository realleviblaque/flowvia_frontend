import { NavLink } from 'react-router-dom'
import './Modal.css'

export function Modal({dialog, handleDialogClose}) {
  return (
    <dialog className="phone-menu-content" ref={dialog}>
      <div className="top">
        <i className="fa-solid fa-x" onClick={handleDialogClose}></i>
        <div className="profile">
          <img src="/profile.png" />
          <div>
            <p className="name">Levi Blaque</p>
            <p className="user-details">@realleviblaque <span></span> Freelancer</p>
          </div>
        </div>
      </div>
      <div className="middle">
        <p className="txt">Navigation</p>
        <div>
          <NavLink to='/'>
            <i className="fa-solid fa-house"></i>
            Home
          </NavLink>
          <NavLink to='/projects'>
            <i className="fa-solid fa-folder"></i>
            Projects
          </NavLink>
          <NavLink to='/work-circle'>
            <i className="fa-solid fa-circle-nodes"></i>
            Work Cricle
          </NavLink>
          <NavLink to='/team'>
            <i className="fa-solid fa-users"></i>
            Team
          </NavLink>
          <NavLink to='/profile'>
            <i className="fa-solid fa-user"></i>
            Profile
          </NavLink>
        </div>
      </div>
      <div className="bottom">
        <p className="txt">Account</p>
        <div>
          <NavLink to='/settings'>
            <i className="fa-solid fa-gear"></i>
            Settings
          </NavLink>
          <NavLink to='/help'>
            <i className="fa-regular fa-message"></i>
            Help & Support
          </NavLink>
        </div>
        <button className="create">
          <i className='fa-solid fa-plus'></i>
          Create Team
        </button>
        <button className='logout'>
          <i className='fa-solid fa-arrow-right'></i>
          Logout
        </button>
      </div>
    </dialog>
  )
}
import { useLocation } from 'react-router-dom'
import './MobileHeader.css'

export function MobileHeader({handleDialogOpen, setOpenSearch, openSearch, setOpenSearch2, openSearch2}) {
  const location = useLocation();
  return (
    <header className='mobile-home-header'>
      <div className="phone-size">
        {location.pathname === '/' && (
          <div className="name">Flow<span>via</span></div>
        )}
        {location.pathname.startsWith('/marketplace') && (
          <div className="name">Marketplace</div>
        )}
        {location.pathname.startsWith('/status') && (
          <div className="name">Status</div>
        )}
        {location.pathname.startsWith('/projects') && (
          <div className="name">Projects</div>
        )}
        {location.pathname.startsWith('/messages') && (
          <div className="name">Messages</div>
        )}
        {location.pathname.startsWith('/work-circle') && (
          <div className="name">Work Circle</div>
        )}
        {location.pathname.startsWith('/notification') && (
          <div className="name">Notification</div>
        )}
        {location.pathname.startsWith('/profile') && (
          <div className="name">Profile</div>
        )}
        {location.pathname.startsWith('/settings') && (
          <div className="name">Settings</div>
        )}
        <div className="right-side">
          {location.pathname === '/' && (
            <span>
              <i className="fa-solid fa-search"></i>
            </span>
          )}
          {location.pathname.startsWith('/work-circle') && (
            <span onClick={() => {
              location.pathname === '/work-circle' && (
                setOpenSearch(!openSearch)
              )
              location.pathname === '/work-circle/clients' && (
                setOpenSearch2(!openSearch2)
              )
            }}>
              <i className="fa-solid fa-search"></i>
            </span>
          )}
          <span>
            <i className="fa-regular fa-bell"></i>
            <div className='notification'></div>
          </span>
          <span>
            <i className="fa-regular fa-message"></i>
            <div className="message">6</div>
          </span>
          <span>
            <img src="/profile.png" />
          </span>
          <span className='hanburger' onClick={handleDialogOpen}>
            <i className="fa-solid fa-bars"></i>
          </span>
        </div>
      </div>
    </header>
  )
}
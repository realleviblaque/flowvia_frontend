import { useLocation, useNavigate } from 'react-router-dom'
import './MobileHeader2.css'

export function MobileHeader2() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <header className="mobile-home-header2">
      <div className="left">
        <span onClick={() => navigate(-1)}>
          <i className="fa-solid fa-chevron-left"></i>
        </span>
        {location.pathname === '/notification' && (
          <p>Notifications</p>
        )}
        {location.pathname === '/messages' && (
          <p>Messages</p>
        )}
        {location.pathname === '/settings' && (
          <p>Settings</p>
        )}
      </div>
      <div className="right">
        <span className='mark'>Mark all read</span>
      </div>
    </header>
  )
}
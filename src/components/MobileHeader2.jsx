import { useLocation, useNavigate } from 'react-router-dom'
import './MobileHeader2.css'
import dayjs from '../lib/dayjs';

export function MobileHeader2({setNotifications}) {
  const handleMarkAllRead = () => {
    const now = dayjs().toISOString();
    setNotifications((prev) => prev.map((notification) => ({
      ...notification,
      readAt: notification.readAt ?? now
    })))
  }
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <header className="mobile-home-header2">
      <div className="left">
        <span onClick={() => navigate(-1)} className={location.pathname === '/profile' ? 'profile' : ''}>
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
        {location.pathname === '/notification' && <span className='mark' onClick={handleMarkAllRead}>Mark all read</span>}
        {location.pathname === '/messages' && <span><i className="fa-solid fa-pencil"></i></span>}
        {location.pathname === '/profile' && (
          <>
            <span className='profile'>
              <i className="fa-solid fa-pencil"></i>
            </span>
            <span className='profile'>
              <i className="fa-solid fa-ellipsis-h"></i>
            </span>
          </>
        )}
      </div>
    </header>
  )
}
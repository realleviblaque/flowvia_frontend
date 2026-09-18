import { useLocation, useNavigate } from 'react-router-dom'
import './MobileHeader2.css'
import dayjs from '../lib/dayjs';

export function MobileHeader2({setNotifications, copyToClipboard, setOpenMoreMenu, openMoreMenu, handleShareClick, user}) {
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
            <span className='profile' onClick={() => setOpenMoreMenu(prev => !prev)}>
              <i className="fa-solid fa-ellipsis-h"></i>
            </span>
            <div className={`more-options ${openMoreMenu ? 'open' : ''}`}>
              <div onClick={() => navigate('/create/post/drafts')}>
                <p>Drafts</p>
                <i className="fa-solid fa-file-alt"></i>
              </div>
              <div onClick={handleShareClick}>
                <p>Share</p>
                <i className="fa-solid fa-share"></i>
              </div>
              <div onClick={() => navigate('/profile/cover')}>
                <p>Edit Cover</p>
                <i className="fa-solid fa-pencil-alt"></i>
              </div>
              <div onClick={() => copyToClipboard(`${window.location.origin}/user/${user.username}`)}>
                <p>Copy profile link</p>
                <i className="fa-solid fa-link"></i>
              </div>
              <div onClick={() => copyToClipboard(`${window.location.origin}/user/${user.username}/porfolio`)}>
                <p>Copy portfolio link</p>
                <i className="fa-solid fa-link"></i>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  )
}
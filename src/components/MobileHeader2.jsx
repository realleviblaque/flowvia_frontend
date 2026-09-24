import { useLocation, useNavigate } from 'react-router-dom'
import './MobileHeader2.css'
import dayjs from '../lib/dayjs';

export function MobileHeader2({setNotifications, setOpenMoreMenu, openMoreMenu, user}) {
  const handleMarkAllRead = () => {
    const now = dayjs().toISOString();
    setNotifications((prev) => prev.map((notification) => ({
      ...notification,
      readAt: notification.readAt ?? now
    })))
  }
  const navigate = useNavigate();
  const location = useLocation();
  const userProfile = location.pathname === '/profile';
  const publicProfile = location.pathname.startsWith('/user')
  const copyToClipboard = async (link) => {
    try {
      await navigator.clipboard.writeText(link);
      setOpenMoreMenu(false)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }
  const handleShareClick = async () => {
    const profileUrl = `${window.location.origin}/user/${user.profile.username}`;
    try {
      if (navigator.share) {
        await navigator.share({
          title: `${user.profile.username} on Flowvia!`,
          text: `Check out ${user.profile.username}'s profile on Flowvia.`,
          url: profileUrl,
        })
        setOpenMoreMenu(false)
        return;
      }
      await navigator.clipboard.writeText(profileUrl);
      setOpenMoreMenu(false);
    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error('Failed to share profile:', error)
      }
    }
  }
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
        {(userProfile || publicProfile) && (
          <>
            <span className='profile' onClick={() => setOpenMoreMenu(prev => !prev)}>
              <i className="fa-solid fa-ellipsis-h"></i>
            </span>
            <div className={`more-options ${openMoreMenu ? 'open' : ''}`}>
              {userProfile && (
                <div onClick={() => navigate('/create/post/drafts')}>
                  <p>Drafts</p>
                  <i className="fa-solid fa-file-alt"></i>
                </div>
              )}
              <div onClick={handleShareClick}>
                <p>Share</p>
                <i className="fa-solid fa-share"></i>
              </div>
              {userProfile && (
                <div onClick={() => navigate('/profile/cover')}>
                  <p>Edit Cover</p>
                  <i className="fa-solid fa-pencil-alt"></i>
                </div>
              )}
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
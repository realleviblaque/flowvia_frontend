import { useLocation, useNavigate } from 'react-router-dom'
import './MobileHeader.css'
import { ChatLists } from '../data/MessagePage/messages';

export function MobileHeader({handleDialogOpen, setOpenSearch, openSearch, setOpenSearch2, openSearch2, setOpenHomeSearch}) {
  const unReadLists = ChatLists.filter(list => list.messages.some(msg => msg.details.isRead === false)).length
  const location = useLocation();
  const navigate = useNavigate();
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
            <span onClick={() => setOpenHomeSearch(true)}>
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
          <span onClick={() => {
            navigate('/notification')
          }}>
            <i className="fa-regular fa-bell"></i>
            <div className='notification'></div>
          </span>
          <span onClick={() => {
            navigate('/messages')
          }}>
            <i className="fa-regular fa-message"></i>
            <div className="message">{unReadLists}</div>
          </span>
          <span onClick={handleDialogOpen}>
            <img src="/profile.png" />
          </span>
        </div>
      </div>
    </header>
  )
}
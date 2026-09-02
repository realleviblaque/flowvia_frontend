import dayjs from '../../lib/dayjs';
import './NotificationPageHeader.css'

export function NotificationPageHeader({setNotifications}) {
  const handleMarkAllRead = () => {
    const now = dayjs().toISOString();
    setNotifications((prev) => prev.map((notification) => ({
      ...notification,
      readAt: notification.readAt ?? now
    })))
  }
  return (
    <header className='notification-header'>
      <div className="left">
        <p className="txt">Notifications</p>
      </div>
      <div className="right" onClick={handleMarkAllRead}>
        <button id="mark-all-btn">Mark all read</button>
      </div>
    </header>
  )
}
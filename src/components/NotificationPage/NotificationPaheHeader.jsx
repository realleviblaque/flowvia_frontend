import './NotificationPageHeader.css'

export function NotificationPageHeader() {
  return (
    <header className='notification-header'>
      <div className="left">
        <p className="txt">Notifications</p>
      </div>
      <div className="right">
        <button id="mark-all-btn">Mark all read</button>
      </div>
    </header>
  )
}
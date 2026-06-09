import { Messages } from '../../data/MessagePage/messages'
import './MessagePageSidebar.css'

export function MessagePageSidebar() {
  return (
    <div className="chat-list-container">
      <div className="chat-list">
        <div className="search-wrap">
          <div>
            <p className="txt-head">Messages</p>
            <i className="fa-solid fa-plus"></i>
          </div>
          <div>
            <input type="text" placeholder="Search conversations..." id="search-msg" />
          </div>
        </div>
        <div className="filter-container">
          <div className="all-msg-btn active-msg">
            All
          </div>
          <div className="unread-msg-btn">
            Unread (<span className="unread-count">0</span>)
          </div>
          <div className="request-msg-btn">
            Request (<span>0</span>)
          </div>
        </div>
        <div className="chat-list-cover">
          {Messages.length === 0 && (
            <h1>No Message Test</h1>
          )}
          {Messages.reverse().map((message) => {
            return (
              <div key={message.id} className="chat-list-wrap">
                <div className="profile">
                  <img src={message.profile} className={`${message.accountType === 'Team' && 'team-profile'}`} />
                  {message.isActive && (<span className="active-badge"></span>)}
                </div>
                <div className="sender-info">
                  <p className="name">{message.name} <i className="fa-regular fa-check-circle"></i> {!message.unread && (<span className="time">{message.time}</span>)}</p>
                  <p className="message">{message.lastMsg}</p>
                </div>
                {message.unread && (
                  <div className="message-count">
                    <span>{message.unread}</span>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
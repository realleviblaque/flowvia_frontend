import { useState } from 'react'
import { Messages } from '../../data/MessagePage/messages'
import './MessagePageSidebar.css'

export function MessagePageSidebar({setChatOpen}) {
  const [filterMessage, setFilterMessage] = useState('All')
  const handleClick = () => {
    setChatOpen(true);
  }
  return (
    <div className="chat-list-container">
      <div className="chat-list">
        <div className="search-wrap">
          <div className='message-head'>
            <p className="txt-head">Messages</p>
            <i className="fa-solid fa-plus"></i>
          </div>
          <div>
            <input type="text" placeholder="Search conversations..." id="search-msg" />
          </div>
        </div>
        <div className="filter-container">
          <div className={filterMessage === 'All' ? 'active-msg' : ''} onClick={() => setFilterMessage('All')}>
            All
          </div>
          <div className={filterMessage === 'Unread' ? 'active-msg' : ''} onClick={() => setFilterMessage('Unread')}>
            Unread (<span className="unread-count">0</span>)
          </div>
          <div className={filterMessage === 'Request' ? 'active-msg' : ''} onClick={() => setFilterMessage('Request')}>
            Request (<span>0</span>)
          </div>
        </div>
        <div className="chat-list-cover">
          {Messages.length === 0 && (
            <h1>No Message Test</h1>
          )}
          {Messages.slice().reverse().map((message) => {
            return (
              <div key={message.id} className="chat-list-wrap" onClick={handleClick}>
                <div className={`profile ${message.accountType === 'Team' && 'team'}`}>
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
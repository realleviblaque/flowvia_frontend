import { useState } from 'react'
import { ChatLists } from '../../data/MessagePage/messages'
import './MessagePageSidebar.css'
import { statusTimeAgo } from '../../utils/statusTimeAgo'

export function MessagePageSidebar({setChatOpen, selectedId, setSelectedId, handleScrollTop}) {
  const [lists, setLists] = useState(ChatLists)
  const [filterMessage, setFilterMessage] = useState('All')
  const handleClick = (list) => {
    if (selectedId === list.id) {
      handleScrollTop();
    }
    setSelectedId(list.id)
    setChatOpen(true);
    console.log(selectedId)
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
          {lists.length === 0 && (
            <h1>No Message Test</h1>
          )}
          {lists.map((list) => {
            const lastMessage = list.messages[list.messages.length - 1];
            const lastSent = lastMessage.createdAt;
            return (
              <div key={list.id} className={`chat-list-wrap ${selectedId === list.id ? 'active' : ''}`} onClick={() => handleClick(list)}>
                <div className={`profile ${list.user.accountType === 'Team' ? 'team' : ''}`}>
                  <img src={list.user.image} className={list.user.accountType === 'Team' ? 'team-profile' : ''} />
                  {list.user.isOnline && <span className="active-badge"></span>}
                </div>
                <div className="sender-info">
                  <div className="name-wrap">
                    <p className="name">{list.user.name}</p>
                    {list.user.isVerified && <i className="fa-regular fa-check-circle"></i>}
                    <span className="time">{statusTimeAgo(lastSent)}</span>
                  </div>
                  <p className="message">{lastMessage.details.text}</p>
                </div>
                {lastMessage.details.sender === 'sender' && (
                  <div className="message-read">
                    <i className={`fa-${lastMessage.details.isSeen ? 'solid' : 'regular'} fa-check-circle`}></i>
                  </div>
                )}
                {lastMessage.details.sender === 'user' && (
                  !lastMessage.details.isRead && (
                    <div className="message-count">
                      <span>{list.messages.filter(m => m.details.sender === 'user').filter(m => !m.details.isRead).length}</span>
                    </div>
                  )
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
import { useEffect, useState } from 'react'
import { ChatLists } from '../../data/MessagePage/messages'
import './MessagePageSidebar.css'
import { statusTimeAgo } from '../../utils/statusTimeAgo'

export function MessagePageSidebar({setChatOpen, selectedId, setSelectedId, handleScrollTop, setSelectedChat, lists, setLists, filter, setFilter}) {
  const unReadLists = lists.filter(list => list.messages.some(msg => msg.details.isRead === false)).length;
  const requestLists = lists.filter(list => list.type === 'Request').length
  const [search, setSearch] = useState('')
  const handleClick = (list) => {
    const chat = ChatLists.find(chat => chat.id === list.id);
    if (!chat) return;
    chat.messages.forEach((message) => {
      if (!message.details.isRead) {
        message.details.isRead = true;
      }
    })
    if (selectedId === list.id) {
      handleScrollTop();
    }
    setSelectedId(list.id)
    setChatOpen(true);
    setSelectedChat({
      ...chat,
      messages: [...chat.messages]
    })
  }
  useEffect(() => {
    const handleSearch = () => {
      if (search) {
        setLists(ChatLists.filter(list => 
          list.user.name.toLowerCase().includes(search.toLowerCase().trim())
          || list.user.username.toLowerCase().toLowerCase().includes(search.toLowerCase().trim())
        ))
      } else {
        setLists(ChatLists)
      }
    }
    handleSearch();
  }, [search, setLists])
  useEffect(() => {
    const handleFilter = () => {
      if (search) {
        if (filter === 'All') {
          setLists(ChatLists.filter(list => 
            list.user.name.toLowerCase().includes(search.toLowerCase().trim())
            || list.user.username.toLowerCase().toLowerCase().includes(search.toLowerCase().trim())
          ))
        } else if (filter === 'Unread') {
          setLists(ChatLists.filter(list => list.messages.some(msg => msg.details.isRead === false)).filter(list => 
            list.user.name.toLowerCase().includes(search.toLowerCase().trim())
            || list.user.username.toLowerCase().toLowerCase().includes(search.toLowerCase().trim())
          ))
        } else if (filter === 'Request') {
          setLists(ChatLists.filter(list => list.type === 'Request').filter(list => 
            list.user.name.toLowerCase().includes(search.toLowerCase().trim())
            || list.user.username.toLowerCase().toLowerCase().includes(search.toLowerCase().trim())
          ))
        }
      } else {
        if (filter === 'All') {
          setLists(ChatLists)
        } else if (filter === 'Unread') {
          setLists(ChatLists.filter(list => list.messages.some(msg => msg.details.isRead === false)))
        } else if (filter === 'Request') {
          setLists(ChatLists.filter(list => list.type === 'Request'))
        }
      }
    }
    handleFilter();
  }, [filter,search, setLists])
  return (
    <div className="chat-list-container">
      <div className="chat-list">
        <div className="search-wrap">
          <div className='message-head'>
            <p className="txt-head">Messages</p>
            <i className="fa-solid fa-plus"></i>
          </div>
          <div>
            <input type="text" placeholder="Search conversations..." id="search-msg" value={search} onChange={e => setSearch(e.target.value)} />
          </div>
        </div>
        <div className="filter-container">
          <div className={filter === 'All' ? 'active-msg' : ''} onClick={() => setFilter('All')}>
            All
          </div>
          <div className={filter === 'Unread' ? 'active-msg' : ''} onClick={() => setFilter('Unread')}>
            Unread (<span className="unread-count">{unReadLists}</span>)
          </div>
          <div className={filter === 'Request' ? 'active-msg' : ''} onClick={() => setFilter('Request')}>
            Request (<span>{requestLists}</span>)
          </div>
        </div>
        <div className="chat-list-cover">
          {lists.length === 0 && (
            <div className="empty-state">
              {search.trim() ? (
                <>
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <p>We couldn't find any conversations matching "{search.trim()}"</p>
                </>
              ) : (
                filter === 'All' ? (
                  <>
                    <i className="fa-regular fa-comment"></i>
                    <p>Start a conversation and your chat will appear here</p>
                    <button>Start a conversation</button>
                  </>
                ) : filter === 'Unread' ? (
                  <>
                    <i className="fa-regular fa-comment"></i>
                    <p>You have no unread message</p>
                    <button onClick={() => setFilter('All')}>Return to All</button>
                  </>
                ) : filter === 'Request' ? (
                  <>
                    <i className="fa-regular fa-comment"></i>
                    <p>You have no message request</p>
                    <button onClick={() => setFilter('All')}>Return to All</button>
                  </>
                ) : ''
              )}
            </div>
          )}
          {lists.map((list) => {
            const lastMessage = list.messages[list.messages.length - 1];
            const lastSent = lastMessage?.createdAt;
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
                    {lastMessage && <span className="time">{statusTimeAgo(lastSent)}</span>}
                  </div>
                  <p className="message">{lastMessage?.details.text || 'New'}</p>
                </div>
                {lastMessage?.details.sender === 'sender' && (
                  <div className="message-read">
                    <i className={`fa-${lastMessage.details.isSeen ? 'solid' : 'regular'} fa-check-circle`}></i>
                  </div>
                )}
                {lastMessage?.details.sender === 'user' && (
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
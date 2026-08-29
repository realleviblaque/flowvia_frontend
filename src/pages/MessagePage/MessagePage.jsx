import { useState, Fragment, useRef, useEffect, useLayoutEffect } from "react";
import { MessagePageSidebar } from "../../components/MessagePage/MessagePageSidebar";
import { SideBar } from "../../components/Sidebar";
import './MessagePage.css'
import { MobileHeader2 } from "../../components/MobileHeader2";
import { BottomBar } from "../../components/BottomBar";
import { PlusModal } from "../../components/PlusModal";
import { ChatLists } from "../../data/MessagePage/messages";
import dayjs from "../../lib/dayjs";


export function MessagePage({all, hadnlePlusDialogOpen, hadnlePlusDialogClose, plusDialog}) {
  const [selectedChat, setSelectedChat] = useState(null)
  const [lists, setLists] = useState(ChatLists)
  const [filter, setFilter] = useState('All')
  const [selectedId, setSelectedId] = useState(null)
  const [message, setMessage] = useState('')
  const messageInput = useRef(null)
  const messagesEndRef = useRef(null)
  const [chatOpen, setChatOpen] = useState(false)
  const [draftText, setDraftText] = useState({})
  const chatContainerRef = useRef(null)
  const isMobile = window.innerWidth < 768;
  useLayoutEffect(() => {
    const handleMsgDraftUpdate = () => {
      if (draftText[selectedId]) {
        setMessage(draftText[selectedId]);
      } else {
        setMessage('')
      }
    }
    handleMsgDraftUpdate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedId])
  useEffect(() => {
    if (isMobile) return;
    const handleDraftDelete = () => {
      if (draftText[selectedId]) {
        setDraftText(prev => {
          const newDraft = {...prev}
          delete newDraft[selectedId]
          return newDraft;
        })
      }
    }
    handleDraftDelete();
    ;
  }, [draftText, selectedId, isMobile])
  useEffect(() => {
    const handlePopState = () => {
      setChatOpen(false);
      if (message.trim()) {
        setDraftText(prev => ({...prev, [selectedId]: message}))
      } else {
        setDraftText(prev => {
          const newDraft = {...prev}
          delete newDraft[selectedId]
          return newDraft;
        })
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [selectedId, message])
  const handleScrollTop = () => {
    const chat = messagesEndRef.current;
    if (!chat) return;
    chat.scrollTop = chat.scrollHeight;
  }
  useLayoutEffect(() => {
    handleScrollTop();
  }, [selectedChat])
  useEffect(() => {
    if (!isMobile) return;
    const viewport = window.visualViewport;
    if (!viewport) return;
    const isNearBottom = () => {
      const chat = messagesEndRef.current;
      if (!chat) return false;
      const distanceFromBottom =
        chat.scrollHeight -
        chat.scrollTop -
        chat.clientHeight;
      return distanceFromBottom < 100;
    };
    const updateChatHeight = () => {
      if (!chatContainerRef.current) return;
      const wasNearBottom = isNearBottom();
      
      chatContainerRef.current.style.height =
        `${viewport.height}px`;

      chatContainerRef.current.style.top =
        `${viewport.offsetTop}px`;

      if (wasNearBottom) {
        requestAnimationFrame(() => {
          handleScrollTop();
        });
      }
    };
    updateChatHeight();
    viewport.addEventListener('resize', updateChatHeight)
    viewport.addEventListener('scroll', updateChatHeight)
    return () => {
      viewport.removeEventListener('resize', updateChatHeight)
      viewport.removeEventListener('scroll', updateChatHeight)
    }
  }, [isMobile])
  useEffect(() => {
    if (!isMobile) return;
    document.body.style.overflow = chatOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    }
  }, [chatOpen, isMobile])
  const handleMobileChatClose = () => {
    window.history.back();
    if (message.trim()) {
      setDraftText(prev => ({...prev, [selectedId]: message}))
    } else {
      setDraftText(prev => {
        const newDraft = {...prev}
        delete newDraft[selectedId]
        return newDraft;
      })
    }
  }
  const sendMessage = () => {
    if (message.trim()) {
      const chat = ChatLists.find(chat => chat.id === selectedId);
      if (!chat) return;
      const newMessage = {
        id: crypto.randomUUID(),
        createdAt: dayjs().toISOString(),
        updatedAt: null,
        details: {
          sender: 'sender',
          text: message.trim(),
          isSeen: false
        }
      }
      chat.messages.push(newMessage)
      const chatIndex = ChatLists.indexOf(chat);
      ChatLists.splice(chatIndex, 1);
      ChatLists.unshift(chat)
      setSelectedChat({
        ...chat,
        messages: [...chat.messages]
      })
      if (filter === 'All') {
        setLists([...ChatLists])
      } else if (filter === 'Unread') {
         setLists([...ChatLists].filter(list => list.messages.some(msg => msg.details.isRead === false)))
      } else if (filter === 'Request') {
         setLists([...ChatLists].filter(list => list.type === 'Request'))
      }
      setFilter('All')
      setMessage('')
      if (isMobile) {
        messageInput.current.style.height = '18px'
      } else {
        messageInput.current.style.height = '24px';
      }
    }
  }
  return (
    <>
      <SideBar notification={all} />
      <MobileHeader2 />
      <main className={`message-main ${chatOpen ? 'chat-open' : ''}`}>
        <MessagePageSidebar 
          setChatOpen={setChatOpen} 
          selectedId={selectedId} 
          setSelectedId={setSelectedId} 
          handleScrollTop={handleScrollTop} 
          setSelectedChat={setSelectedChat} 
          lists={lists}
          setLists={setLists}
          filter={filter}
          setFilter={setFilter}
          message={message}
          draftText={draftText}
          setDraftText={setDraftText}
        />
        {!isMobile && !selectedChat && (
          <div className="no-selected-message-wrap">
            <i className="fa-solid fa-envelope-open-text"></i>
            <p>Select a chat to start messaging</p>
          </div>
        )}
        {selectedChat && (
          <div className={`chat-message-container ${chatOpen ? 'chat-open' : ''}`} ref={chatContainerRef}>
            <div className="message-top">
              <div className="top-left">
                {isMobile && (
                  <span className="back" onClick={handleMobileChatClose}>
                    <i className="fa-solid fa-chevron-left"></i>
                  </span>
                )}
                <div className={`profile ${selectedChat.user.accountType === 'Team' ? 'team' : ''}`}>
                  <img src={selectedChat.user.image} className={selectedChat.user.accountType === 'Team' ? 'team-profile' : ''} />
                  {selectedChat.user.isOnline && <span className="active-badge"></span>}
                </div>
                <div className="user-info">
                  <div className="name-wrap">
                    <p className="name">{selectedChat.user.name}</p>
                    {selectedChat.user.isVerified && <i className="fa-regular fa-check-circle"></i>}
                  </div>
                  <div>
                    {!isMobile && (
                      <>
                        <p className="username">@{selectedChat.user.username}</p>
                        <span></span>
                        <p className="category">{selectedChat.user.title}</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="top-right">
                {isMobile ? (
                  <span>
                    <i className="fa-solid fa-ellipsis-h"></i>
                  </span>
                ) : (
                  <>
                    <div className="view-profile" title="View Profile">
                      View Profile
                    </div>
                    <div className="hire-btn" title="Hire Now">
                      <i className="fa-solid fa-plus"></i>
                      <p>Hire</p>
                    </div>
                    <div className="more-action" title="Menu">
                      <i className="fa-solid fa-ellipsis-v"></i>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="chat-message-middle">
              <div className="chat-message" ref={messagesEndRef}>
                {selectedChat.messages.length === 0 && (
                  <div className="empty-message">
                    <i className="fa-solid fa-comment-dots"></i>
                    <p>No messages yet <br /> Start the conversation and send the first message.</p>
                  </div>
                )}
                {selectedChat.messages.map((message) => {
                  return (
                    <Fragment key={message.id}>
                      {message.details.sender == 'user' && (
                        isMobile ? (
                          <div className="receive-wrap">
                            <img src="/profile.png" />
                            <div className="receive-msg-wrap">
                              <span className="text-wrap">
                                <p className="receive-msg-text">{message.details.text}
                                </p>
                                <p className="time">{dayjs(message.createdAt).format('h:mm A')}</p>
                              </span>
                            </div>
                          </div>
                        ) : (
                          <div className="receive-msg-wrap">
                            <span className="text-wrap">
                              <p className="receive-msg-text">{message.details.text}
                              </p>
                              <p className="time">{dayjs(message.createdAt).format('h:mm A')}</p>
                            </span>
                          </div>
                        )
                      )}
                      {message.details.sender === 'sender' && (
                        <div className="send-msg-wrap">
                          <span className="text-wrap">
                            <p className="send-msg-text">{message.details.text}</p>
                            <p className="time">{dayjs(message.createdAt).format('h:mm A')} <i className={`fa-${message.details.isSeen ? 'solid' : 'regular'} fa-check-circle`}></i></p>
                          </span>
                        </div>
                      )}
                    </Fragment>
                  )
                })}
              </div>
            </div>
            <div className="chat-message-bottom">
              {isMobile ? (
                <div className="message-bottom-cover">
                  <div className="message-input">
                    <span>
                      <i className="fa-solid fa-plus"></i>
                    </span>
                    <textarea placeholder="Type a message..." value={message} ref={messageInput} onChange={e => setMessage(e.target.value)} onInput={() => {
                      const input = messageInput.current;
                      input.style.height = '18px'
                      input.style.height = (input.scrollHeight) + 'px'
                      if (input.scrollHeight > 200) {
                        input.style.height = '200px'
                      }
                    }} onKeyDown={e => {
                        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                          e.preventDefault();
                          sendMessage();
                        }
                      }} />
                    <span className={`send ${message.trim() && 'ready'}`} onClick={sendMessage}>
                      <i className="fa-solid fa-paper-plane"></i>
                    </span>
                  </div>
                </div>
              ) : (
                <div className="send-msg-input-wrap">
                  <div className="wrap">
                    <div className="top">
                      <textarea placeholder="Type a message..." value={message} ref={messageInput} onChange={e => setMessage(e.target.value)} onInput={() => {
                        const input = messageInput.current;
                        input.style.height = '27px'
                        input.style.height = (input.scrollHeight - 10) + 'px'
                        if (input.scrollHeight > 250) {
                          input.style.height = '250px'
                        }
                      }} onKeyDown={e => {
                        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                          e.preventDefault();
                          sendMessage();
                        }
                      }}></textarea>
                    </div>
                    <div className="bottom">
                      <i className="fa-solid fa-paperclip"></i>
                      <i className="fa-regular fa-image"></i>
                      <i className="fa-solid fa-table-cells-large"></i>
                      <button onClick={sendMessage} className={message.trim() && 'active'}>Send <i className="fa-solid fa-paper-plane"></i></button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
      {!chatOpen && <BottomBar hadnlePlusDialogOpen={hadnlePlusDialogOpen} />}
      <PlusModal plusDialog={plusDialog} hadnlePlusDialogClose={hadnlePlusDialogClose} />
    </>
  )
}

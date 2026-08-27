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
  const [chatMessages, setChatMessages] = useState(null)
  const [selectedId, setSelectedId] = useState(null)
  useEffect(() => {
    const handleClickedChat = () => {
      setChatMessages(ChatLists.find(chat => chat.id === selectedId))
    }
    handleClickedChat();
  }, [selectedId])
  const messagesEndRef = useRef(null)
  const handleScrollTop = () => {
    const chat = messagesEndRef.current;
    if (!chat) return;
    chat.scrollTop = chat.scrollHeight;
  }
  useLayoutEffect(() => {
    handleScrollTop();
  }, [chatMessages])
  /* useEffect(() => {
    const containerElem = messagesEndRef.current;
    if (containerElem) {
      containerElem.scrollTo({
        top: containerElem.scrollHeight,
        behavior: 'smooth'
      })
    }
  }, [chatMessages?.messages]) */

  const [inputValue, setInputValue] = useState('')
  const [isInputEmpty, setIsInputEmpty] = useState(true)
  const messageInput = useRef(null)
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value)
    setIsInputEmpty(value.trim() === '')
  }
  /* const sendMessage = () => {
    if (inputValue.trim()) {
      const newMessage = {
        id: crypto.randomUUID(),
        sender: 'me',
        text: inputValue.trim(),
        timestamp: new Date().toISOString(),
        isRead: false
      }

      setChatMessages({...chatMessages, messages: [...chatMessages.messages, newMessage]})
      setInputValue('')
      setIsInputEmpty(true)
      messageInput.current.style.height = isMobile ? '18px' : '24px';
    }
  } */

  const [chatOpen, setChatOpen] = useState(false)
  const handleMobileChatClose = () => {
    setChatOpen(false)
    setSelectedId(null)
    chatMessages(null) 
  }

  const isMobile = window.innerWidth < 768;
  return (
    <>
      <SideBar notification={all} />
      <MobileHeader2 />
      <main className="message-main">
        <MessagePageSidebar setChatOpen={setChatOpen} selectedId={selectedId} setSelectedId={setSelectedId} handleScrollTop={handleScrollTop} />
        {!isMobile && !chatMessages && (
          <div className="no-selected-message-wrap">
            <i className="fa-solid fa-envelope-open-text"></i>
            <p>Select a chat to start messaging</p>
          </div>
        )}
        {chatMessages && (
          <div className={`chat-message-container ${chatOpen && 'chat-open'}`}>
            <div className="message-top">
              <div className="top-left">
                {isMobile && (
                  <span className="back" onClick={handleMobileChatClose}>
                    <i className="fa-solid fa-chevron-left"></i>
                  </span>
                )}
                <div className={`profile ${chatMessages.user.accountType === 'Team' ? 'team' : ''}`}>
                  <img src={chatMessages.user.image} className={chatMessages.user.accountType === 'Team' ? 'team-profile' : ''} />
                  {chatMessages.user.isOnline && <span className="active-badge"></span>}
                </div>
                <div className="user-info">
                  <div className="name-wrap">
                    <p className="name">{chatMessages.user.name}</p>
                    {chatMessages.user.isVerified && <i className="fa-regular fa-check-circle"></i>}
                  </div>
                  <div>
                    {!isMobile && (
                      <>
                        <p className="username">@{chatMessages.user.username}</p>
                        <span></span>
                        <p className="category">{chatMessages.user.title}</p>
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
                {chatMessages.messages.length === 0 && (
                  <h1>Nothing</h1>
                )}
                {chatMessages.messages.map((message) => {
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
              <div className="message-bottom-cover">
                {isMobile ? (
                  <>
                    <span>
                      <i className="fa-solid fa-plus"></i>
                    </span>
                    <div className="message-input">
                      <textarea placeholder="Type a message..." value={inputValue} ref={messageInput} onChange={handleInputChange} onInput={() => {
                        const input = messageInput.current;
                        input.style.height = '18px'
                        input.style.height = (input.scrollHeight) + 'px'
                        if (input.scrollHeight > 200) {
                          input.style.height = '200px'
                        }
                      }} />
                    </div>
                    <span>
                      <i className="fa-solid fa-image"></i>
                    </span>
                    <span className="send" /* onClick={sendMessage} */>
                      <i className="fa-solid fa-paper-plane"></i>
                    </span>
                  </>
                ) : (
                  <>
                    <div className="preview-Container">

                    </div>
                    <div className="bottom">
                      <div className="tools">
                        <div className="files">
                          <i className="fa-solid fa-plus"></i>
                          <input type="file" id="file-input" hidden />
                        </div>
                      </div>
                      <div className="message-wrap">
                        <textarea id="message-input" placeholder="Type a message..." value={inputValue} ref={messageInput} onChange={handleInputChange} onInput={() => {
                          const input = messageInput.current;
                          input.style.height = '30px'
                          input.style.height = (input.scrollHeight - 10) + 'px'
                          if (input.scrollHeight > 250) {
                            input.style.height = '250px'
                          }
                        }}></textarea>
                        <div className={`send-btn ${isInputEmpty ? '' : 'show-btn'}`} /* onClick={sendMessage} */>
                          <p>Send</p>
                          <i className="fa-solid fa-paper-plane"></i>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
      <BottomBar hadnlePlusDialogOpen={hadnlePlusDialogOpen} />
      <PlusModal plusDialog={plusDialog} hadnlePlusDialogClose={hadnlePlusDialogClose} />
    </>
  )
}
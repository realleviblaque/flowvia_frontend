import { useState, Fragment, useRef, useEffect, useLayoutEffect } from "react";
import { MessagePageSidebar } from "../../components/MessagePage/MessagePageSidebar";
import { SideBar } from "../../components/Sidebar";
import './MessagePage.css'
import { MobileHeader2 } from "../../components/MobileHeader2";
import { BottomBar } from "../../components/BottomBar";
import { PlusModal } from "../../components/PlusModal";
import { ChatLists } from "../../data/MessagePage/messages";
import dayjs from "../../lib/dayjs";
import { formatLastSentDate } from "../../utils/formatLastSentData";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AttachmentPreview } from "./AttachmentPreview";


export function MessagePage({all, hadnlePlusDialogOpen, hadnlePlusDialogClose, plusDialog}) {
  const [searchParams, setSearchParams] = useSearchParams();
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
  const [plusMediaOpen, setPlusMediaOpen] = useState(false)
  const [chatMenuOpen, setChatMenuOpen] = useState(false)
  const navigate = useNavigate()
  const [selectedMedia, setSelectedMedia] = useState([])
  const [selectedFiles, setSelectedFiles] = useState([])
  const photosInputRef = useRef(null)
  const filesInputRef = useRef(null)
  const chatId = searchParams.get('chat')
  const messageRef = useRef(message);
  const selectedIdRef = useRef(selectedId)
  const isMobile = window.innerWidth < 768;
  useLayoutEffect(() => {
    const handleDisplayChat = () => {
      if (!chatId) {
        setSelectedChat(null)
        setSelectedId(null)
        setChatOpen(false)
        return;
      }
      const chat = ChatLists.find(chat => chat.id === chatId);
      if (chat) {
        chat.messages.forEach((message) => {
          if (!message.details.isRead) {
            message.details.isRead = true;
          }
        })
        setSelectedId(chatId)
        requestAnimationFrame(() => setChatOpen(true))
        setSelectedChat({
          ...chat,
          messages: [...chat.messages]
        })
      } else {
        setSelectedChat(null)
        setSelectedId(null)
        setChatOpen(false)
      }
    }
    handleDisplayChat();
  }, [chatId])
  useEffect(() => {
    messageRef.current = message
  }, [message])
  useEffect(() => {
    selectedIdRef.current = selectedId;
  }, [selectedId])
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
    const handleBackBrowser = () => {
      const message = messageRef.current;
      const selectedId = selectedIdRef.current;
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
    handleBackBrowser();
  }, [chatId])
  useEffect(() => {
    const handlePopState = () => {
      console.log('POPSTATE FIRED')
    }
    window.addEventListener('popstate', handlePopState)
    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])
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
      chatContainerRef.current.style.height = `${viewport.height}px`;
      chatContainerRef.current.style.top = `${viewport.offsetTop}px`;
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
  useEffect(() => {
    const modal = document.querySelector('.plus-media-modal')
    const chatMenu = document.querySelector('.chat-menu')
    const plusIcon = document.querySelector('.plus-button')
    const menuIcon = document.querySelector('.menu-modal')
    const handleClosePlusMedia = (e) => {
      if (plusMediaOpen && modal && !modal.contains(e.target) && !plusIcon.contains(e.target)) {
        setPlusMediaOpen(false)
      }
      if (chatMenuOpen && chatMenu && !chatMenu.contains(e.target)  && !menuIcon.contains(e.target)) {
        setChatMenuOpen(false)
      }
    }
    document.addEventListener('click', handleClosePlusMedia)
    return () => document.removeEventListener('click', handleClosePlusMedia)
  }, [plusMediaOpen, chatMenuOpen])
  const handlePlusModal = (e) => {
    if (chatMenuOpen) return;
    e.preventDefault();
    setPlusMediaOpen(!plusMediaOpen)
  }
  const handleChatMenu = (e) => {
    if (plusMediaOpen) return;
    e.preventDefault();
    setChatMenuOpen(!chatMenuOpen)
  }
  const handleBack = () => {
    window.history.back();
    //setChatOpen(false)
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
    if (message.trim() || selectedFiles.length > 0 || selectedMedia.length > 0) {
      const chat = ChatLists.find(chat => chat.id === selectedId);
      if (!chat) return;
      const newMessage = {
        id: crypto.randomUUID(),
        createdAt: dayjs().toISOString(),
        updatedAt: null,
        details: {
          sender: 'sender',
          ...(message.trim() && {text: message.trim()}),
          ...(selectedMedia.length > 0 && {images: selectedMedia}),
          ...(selectedFiles.length > 0 && {files: selectedFiles}),
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
      setSelectedFiles([])
      setSelectedMedia([])
      if (isMobile) {
        messageInput.current.style.height = '18px'
      } else {
        messageInput.current.style.height = '24px';
      }
      messageInput.current.focus();
    }
  }
  const handlePhotosClick = () => {
    if (selectedMedia.length >= 4 || selectedFiles.length > 0) return;
    photosInputRef.current?.click();
    setPlusMediaOpen(false)
  }
  const handleFilesClick = () => {
    if (selectedFiles.length >= 4 || selectedMedia.length > 0) return;
    filesInputRef.current?.click();
    setPlusMediaOpen(false)
  }
  const addSelectedFiles = (files) => {
    if (!files.length) return;
    const media = [];
    const otheFiles = [];
    files.forEach((file) => {
      if (file.type.startsWith('image/') || file.type.startsWith('video/')) {
        media.push(file)
      } else {
        otheFiles.push(file)
      }
    })

    if (media.length > 0) {
      setSelectedMedia(prev => {
        const remianingSlots = 4 - prev.length;
        if (remianingSlots <= 0) return prev;
        return [
          ...prev,
          ...media.slice(0, remianingSlots)
        ]
      })
    }
    if (otheFiles.length > 0) {
      setSelectedFiles(prev => {
        const remianingSlots = 4 - prev.length;
        if (remianingSlots <= 0) return prev;
        return [
          ...prev,
          ...otheFiles.slice(0, remianingSlots)
        ]
      })
    }
  }
  const handlePhotosSelected = (e) => {
    const files = Array.from(e.target.files || []);
    addSelectedFiles(files)
    e.target.value = ''
    messageInput.current.focus();
  }
  const handleFilesSelected = (e) => {
    const files = Array.from(e.target.files || []);
    addSelectedFiles(files)
    e.target.value = ''
    messageInput.current.focus();
  }
  const handleRemoveMedia = (index) => {
    setSelectedMedia((prev) => prev.filter((_, mediaIndex) => mediaIndex !== index))
  }
  const handleRemoveFile = (index) => {
    setSelectedFiles((prev) => prev.filter((_, fileIndex) => fileIndex !== index))
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
          setSearchParams={setSearchParams}
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
                  <span className="back" onClick={handleBack}>
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
                  <span className="menu-modal" onClick={handleChatMenu}>
                    <i className="fa-solid fa-ellipsis-h"></i>
                  </span>
                ) : (
                  <>
                    <div className="view-profile" title="View Profile" onClick={() => navigate(`/user/${selectedChat.user.username}`)}>
                      View Profile
                    </div>
                    <div className="hire-btn" title="Hire Now">
                      <i className="fa-solid fa-plus"></i>
                      <p>Hire</p>
                    </div>
                    <div className="more-action menu-modal" title="Menu" onClick={handleChatMenu}>
                      <i className="fa-solid fa-ellipsis-v"></i>
                    </div>
                  </>
                )}
                <div className={`chat-menu ${chatMenuOpen ? 'open' : ''}`}>
                  {isMobile ? (
                    <>
                      <p onClick={() => navigate(`/user/${selectedChat.user.username}`)}>View profile</p>
                      <p>Hire</p>
                      <p>Serach messages</p>
                      <p>Mute notifications</p>
                      <p>Clear chat</p>
                      <p>Report user</p>
                      <p>Block user</p>
                      <p>Settings</p>
                    </>
                  ) : (
                    <>
                      <p>Serach messages</p>
                      <p>Mute notifications</p>
                      <p>Clear chat</p>
                      <p>Report user</p>
                      <p>Block user</p>
                      <p>Settings</p>
                    </>
                  )}
                </div>
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
                {selectedChat.messages.map((message, index) => {
                  const previousMessage = selectedChat.messages[index - 1];
                  const shouldShowDate = !previousMessage || !dayjs(message.createdAt).isSame(dayjs(previousMessage.createdAt), 'day')
                  return (
                    <Fragment key={message.id}>
                      {shouldShowDate && (
                        <div className="message-date">
                          <span>{formatLastSentDate(message.createdAt)}</span>
                        </div>
                      )}
                      {message.details.sender == 'user' && (
                        isMobile ? (
                          <>
                            {message.details.images && (
                              <div className="receive-wrap">
                                <img src="/profile.png" />
                                <div className="receive-image-msg-wrap">
                                  <div className="image-grid">
                                    {message.details.images.map((image) => {
                                    const imageUrl = URL.createObjectURL(image);
                                    return (
                                      <div className="media-box">
                                        <img loading="lazy" src={imageUrl} />
                                      </div>
                                    )
                                    })}
                                  </div>
                                  <span className="text-wrap">
                                    {message.details.text && <p className="receive-msg-text">{message.details.text}</p>}
                                    <p className="time">{dayjs(message.createdAt).format('h:mm A')}</p>
                                  </span>
                                </div>
                              </div>
                            )}
                            {(message.details.text && !message.details.images) && (
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
                            )}
                          </>
                        ) : (
                          <>
                            {message.details.images && (
                              <div className="receive-image-msg-wrap">
                                <div className="image-grid">
                                  {message.details.images.map((image) => {
                                  const imageUrl = URL.createObjectURL(image);
                                  return (
                                    <div className="media-box">
                                      <img loading="lazy" src={imageUrl} />
                                    </div>
                                  )
                                  })}
                                </div>
                                <span className="text-wrap">
                                  {message.details.text && <p className="receive-msg-text">{message.details.text}</p>}
                                  <p className="time">{dayjs(message.createdAt).format('h:mm A')}</p>
                                </span>
                              </div>
                            )}
                            {(message.details.text && !message.details.images) && (
                              <div className="receive-msg-wrap">
                                <span className="text-wrap">
                                  <p className="receive-msg-text">{message.details.text}
                                  </p>
                                  <p className="time">{dayjs(message.createdAt).format('h:mm A')}</p>
                                </span>
                              </div>
                            )}
                          </>
                        )
                      )}
                      {message.details.sender === 'sender' && (
                        <>
                          {message.details.images && (
                            <div className="send-image-msg-wrap">
                              <div className="image-grid">
                                {message.details.images.map((image, index) => {
                                const imageUrl = URL.createObjectURL(image);
                                return (
                                  <div className="media-box" key={`${image.name}-${index}`}>
                                    <img loading="lazy" src={imageUrl} />
                                  </div>
                                )
                                })}
                              </div>
                              <span className="text-wrap">
                                {message.details.text && <p className="send-msg-text">{message.details.text}</p>}
                                <p className="time">{dayjs(message.createdAt).format('h:mm A')} <i className={`fa-${message.details.isSeen ? 'solid' : 'regular'} fa-check-circle`}></i></p>
                              </span>
                            </div>
                          )}
                          {(message.details.text && !message.details.images) && (
                            <div className="send-msg-wrap">
                              <span className="text-wrap">
                                <p className="send-msg-text">{message.details.text}</p>
                                <p className="time">{dayjs(message.createdAt).format('h:mm A')} <i className={`fa-${message.details.isSeen ? 'solid' : 'regular'} fa-check-circle`}></i></p>
                              </span>
                            </div>
                          )}
                        </>
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
                    {(selectedFiles.length > 0 || selectedMedia.length > 0) && (
                      <div className="media-cover">
                        {selectedMedia.length > 0 && selectedMedia.map((file, index) => {
                          return (
                            <AttachmentPreview key={`${file.name}-${index}`} file={file} onRemove={() => handleRemoveMedia(index)} />
                          )
                        })}
                        {selectedFiles.length > 0 && selectedFiles.map((file, index) => {
                          return (
                            <AttachmentPreview key={`${file.name}-${index}`} file={file} onRemove={() => handleRemoveFile(index)} />
                          )
                        })}
                      </div>
                    )}
                    <div className="input-cover-area">
                      <span onClick={handlePlusModal} className="plus-button">
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
                      <span className={`send ${(message.trim() || selectedFiles.length > 0 || selectedMedia.length > 0) && 'ready'}`} onClick={sendMessage}>
                        <i className="fa-solid fa-paper-plane"></i>
                      </span>
                    </div>
                  </div>
                    <div className={`plus-media-modal ${plusMediaOpen ? 'open' : ''}`}>
                      <div className={(selectedMedia.length >= 4 || selectedFiles.length > 0) ? 'mute' : ''} onClick={handlePhotosClick}>
                        <input 
                          ref={photosInputRef}
                          type="file"
                          accept="image/*,video/*"
                          multiple
                          hidden 
                          onChange={handlePhotosSelected}
                        />
                        <i className="fa-regular fa-image"></i>
                        <p>Photos</p>
                      </div>
                      <div className={(selectedFiles.length >= 4 || selectedMedia.length > 0) ? 'mute' : ''} onClick={handleFilesClick}>
                        <input 
                          ref={filesInputRef}
                          type="file"
                          multiple
                          hidden 
                          onChange={handleFilesSelected}
                        />
                        <i className="fa-solid fa-paperclip"></i>
                        <p>Files</p>
                      </div>
                      <div>
                        <i className="fa-regular fa-folder"></i>
                        <p>Projects</p>
                      </div>
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
                      <input 
                        ref={filesInputRef}
                        type="file"
                        multiple
                        hidden 
                        onChange={handleFilesSelected}
                      />
                      <input 
                        ref={photosInputRef}
                        type="file"
                        accept="image/*,video/*"
                        multiple
                        hidden 
                        onChange={handleFilesSelected}
                      />
                      <i className="fa-solid fa-paperclip" onClick={handleFilesClick}></i>
                      <i className="fa-regular fa-image" onClick={handlePhotosClick}></i>
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

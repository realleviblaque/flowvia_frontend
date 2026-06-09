import { useState, Fragment, useRef, useEffect } from "react";
import { MessagePageSidebar } from "../../components/MessagePage/MessagePageSidebar";
import { SideBar } from "../../components/Sidebar";
import './MessagePage.css'
import { MessageTime } from "../../components/MessagePage/MessageTime";


export function MessagePage({all}) {
  const [chatMessages, setChatMessages] = useState({
    id: crypto.randomUUID(),
    name: 'Levi Blaque',
    image: 'profile.png',
    username: 'realleviblaque',
    title: 'Full Stack Developer',
    isActive: true,
    messages: [{
      id: crypto.randomUUID(),
      sender: 'user',
      text: 'Hello, Good Morning',
      timestamp: new Date().toISOString(),
      isRead: true
    }, {
      id: crypto.randomUUID(),
      sender: 'me',
      text: 'Good Morning',
      timestamp: new Date().toISOString(),
      isRead: true
    }, {
      id: crypto.randomUUID(),
      sender: 'user',
      text: 'How is everything',
      timestamp: new Date().toISOString()
    }, {
      id: crypto.randomUUID(),
      sender: 'me',
      text: 'We thank God bro..',
      timestamp: new Date().toISOString(),
      isRead: true
    }, {
      id: crypto.randomUUID(),
      sender: 'me',
      text: 'So the thing i told you about, have you think about it? because i am planning on moving on with it so i will appreciate you do the same, thanks anyway',
      timestamp: new Date().toISOString(),
      isRead: true
    }, {
      id: crypto.randomUUID(),
      sender: 'user',
      text: 'Ok no problem, but about the development of Flowvia are you still pushing it...?',
      timestamp: new Date().toISOString()
    }, {
      id: crypto.randomUUID(),
      sender: 'user',
      text: 'GoodLuck anyway...',
      timestamp: new Date().toISOString()
    }, {
      id: crypto.randomUUID(),
      sender: 'me',
      text: 'yeah, thanks for asking',
      timestamp: new Date().toISOString(),
      isRead: false
    }]
  })
  const messagesEndRef = useRef(null)

  useEffect(() => {
    const containerElem = messagesEndRef.current;
    if (containerElem) {
      containerElem.scrollTo({
        top: containerElem.scrollHeight,
        behavior: 'smooth'
      })
    }
  }, [chatMessages.messages])

  const [inputValue, setInputValue] = useState('')
  const [isInputEmpty, setIsInputEmpty] = useState(true)
  const messageInput = useRef(null)
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value)
    setIsInputEmpty(value.trim() === '')
  }
  const sendMessage = () => {
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
      messageInput.current.style.height = '24px'
    }
  }
  return (
    <>
      <SideBar notification={all} />

      <main className="message-main">
        <MessagePageSidebar />
        <div className="chat-message-container">
          {chatMessages.length === 0 && (
            <h1>Nothing</h1>
          )}
            <div className="message-top">
              <div className="top-left">
                <div className="profile">
                  <img src={chatMessages.image} />
                </div>
                <div className="user-info">
                  <p className="name">{chatMessages.name} <i className="fa-regular fa-check-circle"></i></p>
                  <div>
                    <p className="username">@{chatMessages.username}</p>
                    <span></span>
                    <p className="category">{chatMessages.title}</p>
                    {chatMessages.isActive && (
                      <>
                        <span></span>
                        <p className="actiivity">Online Now</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="top-right">
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
              </div>
            </div>
            <div className="chat-message-middle">
              <div className="chat-message" ref={messagesEndRef}>
                {chatMessages.messages.map((message) => {
                  return (
                    <Fragment key={message.id}>
                      {message.sender == 'user' && (
                        <div className="receive-msg-wrap">
                          <span className="text-wrap">
                            <p className="receive-msg-text">{message.text}
                            </p>
                            <p className="time">{<MessageTime message={message} />}</p>
                          </span>
                        </div>
                      )}
                      {message.sender === 'me' && (
                        <div className="send-msg-wrap">
                          <span className="text-wrap">
                            <p className="send-msg-text">{message.text}</p>
                            <p className="time">{<MessageTime message={message} />} <i className={message.isRead ? 'fa-solid fa-check-circle' : 'fa-regular fa-check-circle'}></i></p>
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
                    <div className={`send-btn ${isInputEmpty ? '' : 'show-btn'}`} onClick={sendMessage}>
                      <p>Send</p>
                      <i className="fa-solid fa-paper-plane"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </main>
    </>
  )
}
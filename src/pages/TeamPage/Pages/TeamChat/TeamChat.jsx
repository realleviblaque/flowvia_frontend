import { Fragment, useEffect, useRef, useState } from "react";
import { GeneralSidebar } from "../../../../components/TeamPage/GeneralSidebar";
import { TeamSidebar } from "../../../../components/TeamPage/TeamSidebar";
import { TeamChats } from "../../../../data/TeamPage/TeamChat/TeamChats";
import { getNotificationDate } from '../../../../utils/getNotificationDate'
import './TeamChat.css'
import { ChatWrap } from "./ChatWrap";

export function TeamChat({all}) {
  const [discussionOpen, setDiscussionOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false)
  const messageRef = useRef(null),
  messageInput = useRef(null);

  useEffect(() => {
    messageRef.current?.scrollTo({
      top: messageRef.current.scrollHeight,
      behavior: 'auto'
    })
  }, [])

  const handleInput = () => {
    const input = messageInput.current;
    input.style.height = '33px'
    input.style.height = (input.scrollHeight - 10) + 'px'
    if (input.scrollHeight > 250) {
      input.style.height = '250px';
      input.style.overflow = 'visible';
    }
  }
  
  return (
    <>
      <GeneralSidebar notification={all} />
      <TeamSidebar />
      <main className="teamPageMain">
        <header className="team-chat-header">
          <div className="left">
            <i className="fa-regular fa-message"></i>
            <div className="info">
              <p className="hd-txt">Team Chat</p>
              <div>
                <span></span>
                3 members online
              </div>
            </div>
          </div>
          <div className="right">
            <button className="discussion" 
              onClick={() => {
                setDiscussionOpen(!discussionOpen)
              }}
            >{discussionOpen ? 'Close' : 'Open'} Discussion Board <i className="fa-solid fa-arrow-right"></i></button>
            <button onClick={() => setShowSearch(!showSearch)}><i className="fa-solid fa-search"></i></button>
            <button><i className="fa-regular fa-bell"></i></button>
          </div>
        </header>
        <div className="chat-page">
          <div className="chat-section">
            <div className="chat-messages-wrap" ref={messageRef}>
              <div className={`search-bar ${showSearch && 'active'}`}>
                <input type="text" placeholder="Search message" />
              </div>
              {TeamChats.map((TeamChat) => {
                return (
                  <div key={TeamChat.id} className="messages-wrap">
                    <div className="date">
                      <span></span>
                      {getNotificationDate(TeamChat.createdAt)}
                      <span></span>
                    </div>
                    <div className="chats-wrap">
                      {TeamChat.Chats.map((Chat) => {
                        return (
                          <Fragment key={Chat.id}>
                            <ChatWrap Chat={Chat} />
                          </Fragment>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="send-msg-wrap">
              <div className="wrap">
                <div className="top">
                  <img src="/profile.png" />
                  <textarea placeholder="Message Flowvia Team..." ref={messageInput} onInput={handleInput} />
                </div>
                <div className="bottom">
                  <i className="fa-solid fa-paperclip"></i>
                  <i className="fa-solid fa-table-cells-large"></i>
                  <button>Send <i className="fa-solid fa-paper-plane"></i></button>
                </div>
              </div>
            </div>
          </div>
          <div className={`discussion-section ${discussionOpen && 'active'}`}>

          </div>
        </div>
      </main>
    </>
  )
}
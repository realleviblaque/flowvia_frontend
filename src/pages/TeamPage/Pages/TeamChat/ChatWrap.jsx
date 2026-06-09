export function ChatWrap({Chat}) {
  return (
    <div className="chats">
      <div className="profile">
        <img src={Chat.sender.profile} />
      </div>
      <div className="right">
        <div className="top">
          <p className="name">{Chat.sender.name}</p>
          <span className="role">{Chat.role}</span>
          <p className="time">4:12 PM</p>
        </div>
        <div className="bottom">
          {Chat.message && (
            <p className="message">{Chat.message}</p>
          )}
          {Chat.file && (
            <div className="file">
              <i className="fa-regular fa-file left"></i>
              <div className="details">
                <p className="name">{Chat.file.name}</p>
                <div>
                  <p>{Chat.file.size}</p>
                  <span></span>
                  <p>{Chat.file.type}</p>
                </div>
              </div>
              <i className="fa-solid fa-download"></i>
            </div>
          )}
          {Chat.project && (
            <div className="project-milestone">
              <div className="up">
                <p>Project Milestone</p>
                <span></span>
                <p>{Chat.project.title}m</p>
              </div>
              <div className="down">
                <p className="title">{Chat.project.phase} <i className="fa-solid fa-check"></i></p>
                <div className="progress"><span className="bar"></span></div>
                <div className="phase">
                  <p>Phase {Chat.project.completedPhase}/{Chat.project.totalPhase} done</p>
                  <p className="progress-count">75%</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
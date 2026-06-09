import formatBudet from "../../utils/formatBudget";

export function NotificationPageContent({content}) {
  return (
    content.type === 'hire request' ? (
      <div className={`notification-wrapper ${!content.read && 'new-notification'}`}>
        <div className="profile">
          <img src={content.sender.profileImg} className={content.sender.accountType === 'Team' ? 'team-profile' : ''} />
        </div>
        <div className="right">
          <div className="top">
            <p className="name">{content.sender.name}</p>
            <p className="notifi-content">sent you a hire request for</p>
            <p className="title">{content.title}</p>
          </div>
          <div className="middle">
            <div className="info">
              <p className="title">{content.details.title}</p>
              <div>
                <p>Budget:</p>
                <p>${formatBudet(content.details.minBud)}-${formatBudet(content.details.maxud)}</p>
                <span></span>
                <p>{content.details.deadline}</p>
              </div>
            </div>
          </div>
          <div className="bottom">
            <button className="accept-btn">Accept</button>
            <button className="view-btn">View Details</button>
            <button className="decline-btn">Decline</button>
          </div>
        </div>
        <div className="time">
          2 minutes ago
        </div>
      </div>
    ) : content.type === 'message' ? (
      <div className={`notification-wrapper ${!content.read && 'new-notification'}`}>
        <div className="profile">
          <img src={content.sender.profileImg} className={content.sender.accountType === 'Team' ? 'team-profile' : ''} />
        </div>
        <div className="right">
          <div className="top">
            <p className="name">{content.sender.name}</p>
            <p className="notifi-content">sent you a message:</p>
            <p className="message-wrap">"<span className="message">{content.details.text}</span>"</p>
          </div>
          <div className="bottom">
            <button className="reply-btn">Reply</button>
            <button className="view-btn">View Chat</button>
          </div>
        </div>
        <div className="time">
          2 minutes ago
        </div>
      </div>
    ) : content.type === 'work circle' ? (
      content.details.workType === 'new job' 
      ? (
          <div className={`notification-wrapper ${!content.read && 'new-notification'}`}>
            <div className="profile">
              <img src={content.sender.profileImg} className={content.sender.accountType === 'Team' ? 'team-profile' : ''} />
            </div>
            <div className="right">
              <div className="top">
                <p className="name">{content.sender.name}</p>
                <p className="notifi-content">from your work circle posted a new job:</p>
                <p className="title">"{content.details.title}"</p>
              </div>
              <div className="bottom">
                <button className="apply-btn">Apply</button>
                <button className="view-btn">View Job</button>
              </div>
            </div>
            <div className="time">
              2 minutes ago
            </div>
          </div>
      ) : content.details.workType === 'rehire' 
      ? (
          <div className={`notification-wrapper ${!content.read && 'new-notification'}`}>
            <div className="profile">
              <img src={content.sender.profileImg} className={content.sender.accountType === 'Team' ? 'team-profile' : ''} />
            </div>
            <div className="right">
              <div className="top">
                <p className="name">{content.sender.name}</p>
                <p className="notifi-content">from your work circle sent you a rehire request:</p>
                <p className="work-message-wrap">"<span className="work-message">{content.details.message}</span>"</p>
              </div>
              <div className="bottom">
                <button className="accept-btn">Accept Request</button>
                <button className="view-btn">View Request</button>
              </div>
            </div>
            <div className="time">
              2 minutes ago
            </div>
          </div>
      ) : ''
    ) : content.type === 'following' ? (
      <div className={`notification-wrapper ${!content.read && 'new-notification'}`}>
        <div className="profile">
          <img src={content.sender.profileImg} className={content.sender.accountType === 'Team' ? 'team-profile' : ''} />
        </div>
        <div className="right">
          <div className="top">
            <p className="name">{content.sender.name}</p>
            <p className="notifi-content">started following you</p>
          </div>
          <div className="bottom">
            <button className="follow-back-btn">Follow Back</button>
            <button className="view-btn">View Profile</button>
          </div>
        </div>
        <div className="time">
          2 minutes ago
        </div>
      </div>
    ) : content.type === 'review' ? (
      <div className={`notification-wrapper ${!content.read && 'new-notification'}`}>
        <div className="profile">
          <img src={content.sender.profileImg} className={content.sender.accountType === 'Team' ? 'team-profile' : ''} />
        </div>
        <div className="right">
          <div className="top">
            <p className="name">{content.sender.name}</p>
            <p className="notifi-content">left you a {content.details.star}-star review for the</p>
            <p className="title">{content.details.title}</p>
            <p className="notifi-content">project</p>
          </div>
          <div className="middle">
            <div className="info">
              <div className="review-stars">
                {content.details.star === 1 
                  ?
                    <>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </>
                  : content.details.star === 2 
                  ? 
                    <>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </>
                  : content.details.star === 3 
                  ? 
                    <>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </>
                  : content.details.star === 4 
                  ? 
                    <>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </>
                  : content.details.star === 5 
                  ? 
                    <>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </>
                  : ''}
              </div>
              <p className="review-txt">{content.details.text}</p>
            </div>
          </div>
          <div className="bottom">
            <button className="reply-btn">Reply</button>
            <button className="view-btn">View Review</button>
          </div>
        </div>
        <div className="time">
          2 minutes ago
        </div>
      </div>
    ) : content.type === 'mention' ? (
      <div className={`notification-wrapper ${!content.read && 'new-notification'}`}>
        <div className="profile">
          <img src={content.sender.profileImg} className={content.sender.accountType === 'Team' ? 'team-profile' : ''} />
        </div>
        <div className="right">
          <div className="top">
            <p className="name">{content.sender.name}</p>
            <p className="notifi-content">mentioned you in a post:</p>
            <p className="post-wrap">"<span className="post">{content.details.text}</span>"</p>
          </div>
          <div className="bottom">
            <button className="view-btn">View Post</button>
          </div>
        </div>
        <div className="time">
          2 minutes ago
        </div>
      </div>
    ) : content.type === 'project' ? (
      <div className={`notification-wrapper ${!content.read && 'new-notification'}`}>
        <div className="profile">
          <img src={content.sender.profileImg} className={content.sender.accountType === 'Team' ? 'team-profile' : ''} />
        </div>
        <div className="right">
          <div className="top">
            <p className="name">{content.sender.name}</p>
            <p className="notifi-content">marked</p>
            <p className="project-about1">{content.details.about}</p>
            <p className="notifi-content">as complete on the</p>
            <p className="title">{content.details.title}</p>
            <p className="notifi-content">project</p>
          </div>
          <div className="bottom">
            <button className="approve-btn">Approve</button>
            <button className="view-btn">View Project</button>
          </div>
        </div>
        <div className="time">
          2 minutes ago
        </div>
      </div>
    ) : ''
  )
}
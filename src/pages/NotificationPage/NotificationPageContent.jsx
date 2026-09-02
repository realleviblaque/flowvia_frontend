import dayjs from "../../lib/dayjs";
import formatBudet from "../../utils/formatBudget";
import { formatDate } from "../../utils/formatDate";
import { statusTimeAgo } from "../../utils/statusTimeAgo";

export function NotificationPageContent({notification}) {
  const isMobile = window.innerWidth < 768;
  return (
    <>
      {notification.category === 'social' && notification.type === 'post' && notification.action === 'liked' && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name"><span>{notification.actor.name}</span> liked your post "{notification.target.name}"</p>
              ) : (
                <>
                  <p className="name">{notification.actor.name}</p>
                  <p className="notifi-content">liked your post:</p>
                  <p className="post-wrap">"<span className="post">{notification.target.name}</span>"</p>
                </>
              )}
            </div>
            <div className="bottom">
              <button className="view-btn">View Post</button>
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'social' && notification.type === 'post' && notification.action === 'commented' && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name"><span>{notification.actor.name}</span> commented on your post "{notification.target.name}"</p>
              ) : (
                <>
                  <p className="name">{notification.actor.name}</p>
                  <p className="notifi-content">commented on your post:</p>
                  <p className="post-wrap">"<span className="post">{notification.target.name}</span>"</p>
                </>
              )}
            </div>
            <div className="bottom">
              <button className="view-btn">View Comment</button>
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'social' && notification.type === 'comment' && notification.action === 'replied' && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name"><span>{notification.actor.name}</span> reply to your comment "{notification.target.name}"</p>
              ) : (
                <>
                  <p className="name">{notification.actor.name}</p>
                  <p className="notifi-content">reply to your comment:</p>
                  <p className="post-wrap">"<span className="post">{notification.target.name}</span>"</p>
                </>
              )}
            </div>
            <div className="bottom">
              <button className="view-btn">View Reply</button>
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'social' && notification.type === 'user' && notification.action === 'followed' && !notification.metadata.isFollowedBack && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name"><span>{notification.actor.name}</span> started following you</p>
              ) : (
                <>
                  <p className="name">{notification.actor.name}</p>
                  <p className="notifi-content">started following you</p>
                </>
              )}
            </div>
            <div className="bottom">
              <button className="follow-back-btn">Follow Back</button>
              <button className="view-btn">View Profile</button>
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'social' && notification.type === 'user' && notification.action === 'followed' && notification.metadata.isFollowedBack && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name"><span>{notification.actor.name}</span> followed you back</p>
              ) : (
                <>
                  <p className="name">{notification.actor.name}</p>
                  <p className="notifi-content">followed you back</p>
                </>
              )}
            </div>
            <div className="bottom">
              <button className="view-btn">View Profile</button>
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'messages' && notification.type === 'message' && notification.action === 'received' && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name"><span>{notification.actor.name}</span> sent you a message: "{notification.metadata.messagePreview}"</p>
              ) : (
                <>
                  <p className="name">{notification.actor.name}</p>
                  <p className="notifi-content">sent you a message:</p>
                  <p className="message-wrap">"<span className="message">{notification.metadata.messagePreview}</span>"</p>
                </>
              )}
            </div>
            <div className="bottom">
              <button className="reply-btn">Reply</button>
              <button className="view-btn">View Chat</button>
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'messages' && notification.type === 'message_request' && notification.action === 'received' && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name"><span>{notification.actor.name}</span> sent you a message request: "{notification.metadata.messagePreview}"</p>
              ) : (
                <>
                  <p className="name">{notification.actor.name}</p>
                  <p className="notifi-content">sent you a message request:</p>
                  <p className="message-wrap">"<span className="message">{notification.metadata.messagePreview}</span>"</p>
                </>
              )}
            </div>
            <div className="bottom">
              <button className="reply-btn">Accept</button>
              <button className="view-btn">View Request</button>
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'hiring' && notification.type === 'hire_request' && notification.action === 'received' && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name"><span>{notification.actor.name}</span> sent you a hire request for <span>{notification.metadata.projectTitle}</span></p>
              ) : (
                <>
                  <p className="name">{notification.actor.name}</p>
                  <p className="notifi-content">sent you a hire request for</p>
                  <p className="title">{notification.metadata.projectTitle}</p>
                </>
              )}
            </div>
            <div className="middle">
              <div className="info">
                <p className="title">{notification.metadata.projectTitle}</p>
                <div>
                  <p>Budget:</p>
                  <p>${formatBudet(notification.metadata.budget)}</p>
                  <span></span>
                  <p>{formatDate(notification.metadata.deadline)}</p>
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
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'work_circle' && notification.type === 'rehire-request' && notification.action === 'received' && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name"><span>{notification.actor.name}</span> from your work circle want to hire you again: "{notification.target.name}"</p>
              ) : (
                <>
                  <p className="name">{notification.actor.name}</p>
                  <p className="notifi-content">from your work circle want to hire you again:</p>
                  <p className="work-message-wrap">"<span className="work-message">{notification.target.name}</span>"</p>
                </>
              )}
            </div>
            <div className="bottom">
              <button className="accept-btn">Accept Request</button>
              <button className="view-btn">View Request</button>
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'hiring' && notification.type === 'project' && notification.action === 'hired' && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name"><span>{notification.actor.name}</span> hired you for: "{notification.target.name}"</p>
              ) : (
                <>
                  <p className="name">{notification.actor.name}</p>
                  <p className="notifi-content">hired you for:</p>
                  <p className="work-message-wrap">"<span className="work-message">{notification.target.name}</span>"</p>
                </>
              )}
            </div>
            <div className="bottom">
              <button className="view-btn">View Project</button>
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'jobs' && notification.type === 'application' && notification.action === 'received' && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name"><span>{notification.actor.name}</span> applied to your job post "{notification.target.name}"</p>
              ) : (
                <>
                  <p className="name">{notification.actor.name}</p>
                  <p className="notifi-content">applied to your job post</p>
                  <p className="work-message-wrap">"<span className="work-message">{notification.target.name}</span>"</p>
                </>
              )}
            </div>
            <div className="bottom">
              <button className="view-btn">View Applicant</button>
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'jobs' && notification.type === 'application' && notification.action === 'accepted' && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name"><span>{notification.actor.name}</span> your application for "{notification.target.name}" was accepted</p>
              ) : (
                <>
                  <p className="name">{notification.actor.name}</p>
                  <p className="notifi-content">your application for</p>
                  <p className="work-message-wrap">"<span className="work-message">{notification.target.name}</span>"</p>
                  <p className="notifi-content">was accepted</p>
                </>
              )}
            </div>
            <div className="bottom">
              <button className="view-btn">View Project</button>
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'work_circle' && notification.type === 'job' && notification.action === 'created' && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name"><span>{notification.actor.name}</span> from your Work Circle posted a new job: "<span>{notification.target.name}</span>"</p>
              ) : (
                <>
                  <p className="name">{notification.actor.name}</p>
                  <p className="notifi-content">from your work circle posted a new job:</p>
                  <p className="title">"{notification.target.name}"</p>
                </>
              )}
            </div>
            <div className="bottom">
              <button className="apply-btn">Apply</button>
              <button className="view-btn">View Job</button>
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'projects' && notification.type === 'project' && notification.action === 'created' && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name">You created a new project: "<span>{notification.target.name}</span>"</p>
              ) : (
                <>
                  <p className="notifi-content">You created a new project:</p>
                  <p className="work-message-wrap">"<span className="work-message">{notification.target.name}</span>"</p>
                </>
              )}
            </div>
            <div className="bottom">
              <button className="view-btn">View Project</button>
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'projects' && notification.type === 'project' && notification.action === 'on_hold' && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name">Your project was put on hold: "<span>{notification.target.name}</span>"</p>
              ) : (
                <>
                  <p className="notifi-content">Your project was put on hold:</p>
                  <p className="work-message-wrap">"<span className="work-message">{notification.target.name}</span>"</p>
                </>
              )}
            </div>
            <div className="bottom">
              <button className="view-btn">View Project</button>
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'projects' && notification.type === 'project' && notification.action === 'completed' && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name">Congratulation you have completed your project "<span>{notification.target.name}</span>"</p>
              ) : (
                <>
                  <p className="notifi-content">Congratulation you have completed your project</p>
                  <p className="work-message-wrap">"<span className="work-message">{notification.target.name}</span>"</p>
                </>
              )}
            </div>
            <div className="bottom">
              <button className="view-btn">View Project</button>
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'work' && notification.type === 'milestone' && notification.action === 'completed' && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name">Congratulation you have completed milestone {notification.metadata.completedMilestone} of your project "<span>{notification.target.name}</span>"</p>
              ) : (
                <>
                  <p className="notifi-content">Congratulation you have completed milestone {notification.metadata.completedMilestone} of your project</p>
                  <p className="work-message-wrap">"<span className="work-message">{notification.target.name}</span>"</p>
                </>
              )}
            </div>
            <div className="bottom">
              <button className="view-btn">View Project</button>
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'work' && notification.type === 'phase' && notification.action === 'completed' && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name">Congratulation you have completed phase {notification.metadata.completedPhase} of your project "<span>{notification.target.name}</span>"</p>
              ) : (
                <>
                  <p className="notifi-content">Congratulation you have completed phase {notification.metadata.completedPhase} of your project</p>
                  <p className="work-message-wrap">"<span className="work-message">{notification.target.name}</span>"</p>
                </>
              )}
            </div>
            <div className="bottom">
              <button className="view-btn">View Project</button>
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'work' && notification.type === 'task' && notification.action === 'completed' && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name">Congratulation you have completed task {notification.metadata.completedTask} of your project "<span>{notification.target.name}</span>"</p>
              ) : (
                <>
                  <p className="notifi-content">Congratulation you have completed task {notification.metadata.completedTask} of your project</p>
                  <p className="work-message-wrap">"<span className="work-message">{notification.target.name}</span>"</p>
                </>
              )}
            </div>
            <div className="bottom">
              <button className="view-btn">View Project</button>
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'reviews' && notification.type === 'review' && notification.action === 'received' && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name"><span>{notification.actor.name}</span> left you a {notification.metadata.rating}-star review for the project <span>{notification.target.name}</span></p>
              ) : (
                <>
                  <p className="name">{notification.actor.name}</p>
                  <p className="notifi-content">left you a {notification.metadata.rating}-star review for the project</p>
                  <p className="title">{notification.target.name}</p>
                </>
              )}
            </div>
            <div className="middle">
              <div className="info">
                <div className="review-stars">
                  {notification.metadata.rating === 1 
                    ?
                      <>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                      </>
                    : notification.metadata.rating === 2 
                    ? 
                      <>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                      </>
                    : notification.metadata.rating === 3 
                    ? 
                      <>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                      </>
                    : notification.metadata.rating === 4 
                    ? 
                      <>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                      </>
                    : notification.metadata.rating === 5 
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
                <p className="review-txt">{notification.metadata.reviewPreview}</p>
              </div>
            </div>
            <div className="bottom">
              <button className="reply-btn">Reply</button>
              <button className="view-btn">View Review</button>
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'reviews' && notification.type === 'review' && notification.action === 'replied' && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name"><span>{notification.actor.name}</span> replied to your review "{notification.target.name}"</p>
              ) : (
                <>
                  <p className="name">{notification.actor.name}</p>
                  <p className="notifi-content">replied to your review</p>
                  <p className="message-wrap">"<span className="message">{notification.target.name}</span>"</p>
                </>
              )}
            </div>
            <div className="middle">
              <div className="info">
                <p className="review-txt">{notification.metadata.replyPreview}</p>
              </div>
            </div>
            <div className="bottom">
              <button className="view-btn">View Reply</button>
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'portfolio' && notification.type === 'project' && notification.action === 'added' && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name"><span>{notification.target.name}</span> was added to your portfolio</p>
              ) : (
                <>
                  <p className="name">{notification.target.name}</p>
                  <p className="notifi-content">was added to your portfolio</p>
                </>
              )}
            </div>
            <div className="bottom">
              <button className="view-btn">View Portfolio</button>
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'teams' && notification.type === 'team' && notification.action === 'created' && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name">Congratulation you have successfully created a team "<span>{notification.target.name}</span>"</p>
              ) : (
                <>
                  <p className="notifi-content">Congratulation you have successfully created a team</p>
                  <p className="name">"{notification.target.name}"</p>
                </>
              )}
            </div>
            <div className="bottom">
              <button className="view-btn">View Team</button>
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'teams' && notification.type === 'invitation' && notification.action === 'received' && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name"><span>{notification.actor.name}</span> sent you an invitation to join the team "<span>{notification.target.name}</span>"</p>
              ) : (
                <>
                  <p className="name">{notification.actor.name}</p>
                  <p className="notifi-content">sent you an invitation to join the team</p>
                  <p className="work-message-wrap">"<span className="work-message">{notification.target.name}</span>"</p>
                </>
              )}
            </div>
            <div className="bottom">
              <button className="accept-btn">Accept Invitation</button>
              <button className="view-btn">View Invitation</button>
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'teams' && notification.type === 'member' && notification.action === 'joined' && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name"><span>{notification.actor.name}</span> a new member joined the team "<span>{notification.target.name}</span>"</p>
              ) : (
                <>
                  <p className="name">{notification.actor.name}</p>
                  <p className="notifi-content">a new member joined the team</p>
                  <p className="work-message-wrap">"<span className="work-message">{notification.target.name}</span>"</p>
                </>
              )}
            </div>
            <div className="bottom">
              <button className="view-btn">View Tean</button>
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'teams' && notification.type === 'join_request' && notification.action === 'received' && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name"><span>{notification.actor.name}</span> sent you a request to join the team "<span>{notification.target.name}</span>"</p>
              ) : (
                <>
                  <p className="name">{notification.actor.name}</p>
                  <p className="notifi-content">sent you a request to join the team</p>
                  <p className="work-message-wrap">"<span className="work-message">{notification.target.name}</span>"</p>
                </>
              )}
            </div>
            <div className="bottom">
              <button className="accept-btn">Accept Request</button>
              <button className="view-btn">View Request</button>
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'teams' && notification.type === 'task' && notification.action === 'assigned' && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name"><span>{notification.actor.name}</span> assgined you a task</p>
              ) : (
                <>
                  <p className="name">{notification.actor.name}</p>
                  <p className="notifi-content">assgined you a task</p>
                </>
              )}
            </div>
            <div className="middle">
              <div className="info">
                <p className="title">{notification.target.name}</p>
                <div>
                  <p>Deadline:</p>
                  <p>{formatDate(notification.metadata.dueDate)}</p>
                </div>
              </div>
            </div>
            <div className="bottom">
              <button className="view-btn">View Task</button>
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'teams' && notification.type === 'availability' && notification.action === 'changed' && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name"><span>{notification.actor.name}</span> availability status was chaged to <span>{notification.metadata.newStatus}</span></p>
              ) : (
                <>
                  <p className="name">{notification.actor.name}</p>
                  <p className="notifi-content">availability status was chaged to</p>
                  <p className="work-message-wrap"><span className="work-message">{notification.metadata.newStatus}</span></p>
                </>
              )}
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'teams' && notification.type === 'member' && notification.action === 'removed' && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name"><span>{notification.actor.name}</span> was removed from the team <span>{notification.target.name}</span></p>
              ) : (
                <>
                  <p className="name">{notification.actor.name}</p>
                  <p className="notifi-content">was removed from the team</p>
                  <p className="work-message-wrap"><span className="work-message">{notification.target.name}</span></p>
                </>
              )}
            </div>
            <div className="bottom">
              <button className="view-btn">View Member</button>
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'teams' && notification.type === 'role' && notification.action === 'assigned' && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name"><span>{notification.actor.name}</span> assgined you a role <span>{notification.metadata.role}</span></p>
              ) : (
                <>
                  <p className="name">{notification.actor.name}</p>
                  <p className="notifi-content">assgined you a role</p>
                  <p className="work-message-wrap"><span className="work-message">{notification.metadata.role}</span></p>
                </>
              )}
            </div>
            <div className="bottom">
              <button className="view-btn">View Team</button>
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'teams' && notification.type === 'ownership' && notification.action === 'transferred' && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name"><span>{notification.actor.name}</span> transferred ownership of <span>{notification.target.name}</span></p>
              ) : (
                <>
                  <p className="name">{notification.actor.name}</p>
                  <p className="notifi-content">transferred ownership of</p>
                  <p className="work-message-wrap"><span className="work-message">{notification.target.name}</span></p>
                </>
              )}
            </div>
            <div className="bottom">
              <button className="view-btn">View Team</button>
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'teams' && notification.type === 'team' && notification.action === 'deleted' && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name"><span>{notification.actor.name}</span> deleted the team <span>{notification.target.name}</span></p>
              ) : (
                <>
                  <p className="name">{notification.actor.name}</p>
                  <p className="notifi-content">deleted the team</p>
                  <p className="work-message-wrap"><span className="work-message">{notification.target.name}</span></p>
                </>
              )}
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'payments' && notification.type === 'withdrawal' && notification.action === 'requested' && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name"><span>Your withdrawal request is being processing</span></p>
              ) : (
                <>
                  <p className="notifi-content">Your withdrawal request is being processing</p>
                </>
              )}
            </div>
            <div className="middle">
              <div className="info">
                <div>
                  <p>Amount:</p>
                  <p>{formatBudet(notification.metadata.amount)}</p>
                  <span></span>
                  <p>{notification.metadata.currency}</p>
                </div>
              </div>
            </div>
            <div className="bottom">
              <button className="view-btn">View Transaction</button>
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'payments' && notification.type === 'withdrawal' && notification.action === 'completed' && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name"><span>Your withdrawal was successfully proceed</span></p>
              ) : (
                <>
                  <p className="notifi-content">Your withdrawal was successfully proceed</p>
                </>
              )}
            </div>
            <div className="middle">
              <div className="info">
                <div>
                  <p>Amount:</p>
                  <p>{formatBudet(notification.metadata.amount)}</p>
                  <span></span>
                  <p>{notification.metadata.currency}</p>
                </div>
              </div>
            </div>
            <div className="bottom">
              <button className="view-btn">View Transaction</button>
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'payments' && notification.type === 'team_withdrawal' && notification.action === 'completed' && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name"><span>Your {notification.target.name} withdrawal was successfully proceed</span></p>
              ) : (
                <>
                  <p className="notifi-content">Your {notification.target.name} withdrawal was successfully proceed</p>
                </>
              )}
            </div>
            <div className="middle">
              <div className="info">
                <div>
                  <p>Amount:</p>
                  <p>{formatBudet(notification.metadata.amount)}</p>
                  <span></span>
                  <p>{notification.metadata.currency}</p>
                </div>
              </div>
            </div>
            <div className="bottom">
              <button className="view-btn">View Transaction</button>
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'payments' && notification.type === 'payment_method' && notification.action === 'changed' && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name"><span>You successfully updated your payment method</span></p>
              ) : (
                <>
                  <p className="notifi-content">You successfully updated your payment method</p>
                </>
              )}
            </div>
            <div className="bottom">
              <button className="view-btn">View Payment Method</button>
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'account' && notification.type === 'profile' && notification.action === 'updated' && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name"><span>You successfully updated your profile detials</span></p>
              ) : (
                <>
                  <p className="notifi-content">You successfully updated your profile detials</p>
                </>
              )}
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'account' && notification.type === 'email' && notification.action === 'changed' && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name"><span>You successfully change your email address</span></p>
              ) : (
                <>
                  <p className="notifi-content">You successfully change your email address</p>
                </>
              )}
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'account' && notification.type === 'phone' && notification.action === 'changed' && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name"><span>You successfully changed your phone number</span></p>
              ) : (
                <>
                  <p className="notifi-content">You successfully changed your phone number</p>
                </>
              )}
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'account' && notification.type === 'subscription' && notification.action === 'updated' && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name"><span>You successfully subscribed to {notification.target.name}</span></p>
              ) : (
                <>
                  <p className="notifi-content">You successfully subscribed to {notification.target.name}</p>
                </>
              )}
            </div>
            <div className="bottom">
              <button className="view-btn">View Plan</button>
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'security' && notification.type === 'login' && notification.action === 'new_device' && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name"><span>New device login</span></p>
              ) : (
                <>
                  <p className="notifi-content">New device login</p>
                </>
              )}
            </div>
            <div className="middle">
              <div className="info">
                <div>
                  <p>Device:</p>
                  <p>{notification.metadata.device}</p>
                  <span></span>
                   <p>Location:</p>
                  <p>{notification.metadata.location}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'security' && notification.type === 'password' && notification.action === 'changed' && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name"><span>You successfully changed your password</span></p>
              ) : (
                <>
                  <p className="notifi-content">You successfully changed your password</p>
                </>
              )}
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'system' && notification.type === 'feature' && notification.action === 'released' && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name"><span>New feature released</span></p>
              ) : (
                <>
                  <p className="notifi-content">New feature released</p>
                </>
              )}
            </div>
            <div className="middle">
              <div className="info">
                <div>
                  <p>{notification.metadata.description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
      {notification.category === 'system' && notification.type === 'maintenance' && notification.action === 'scheduled' && (
        <div className={`notification-wrapper ${!notification.readAt && 'new-notification'}`}>
          <div className="profile">
            <img src={notification.actor.image} className={notification.actor.accountType === 'Team' ? 'team-profile' : ''} />
          </div>
          <div className="right">
            <div className="top">
              {isMobile ? (
                <p className="name"><span>System {notification.target.name}</span></p>
              ) : (
                <>
                  <p className="notifi-content">System {notification.target.name}</p>
                </>
              )}
            </div>
            <div className="middle">
              <div className="info">
                <div>
                  <p>Start time:</p>
                  <p>{dayjs(notification.metadata.startTime).fromNow()}</p>
                  <span></span>
                  <p>Duration:</p>
                  <p>{notification.metadata.estimatedDuration}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="time">
            {statusTimeAgo(notification.createdAt)}
          </div>
        </div>
      )}
    </>
  )
}
import { useState } from "react";
import { formatDate } from "../../../../utils/formatDate";
import { generateStars } from "../../../../utils/generateStars";
import { Reviews } from "../../../../data/ProfilePage/reviews";
import dayjs from "../../../../lib/dayjs";
import { useLocation } from "react-router-dom";

export function Review({review, setReviews, filter, user}) {
  const [openReply, setOpenReply] = useState(false)
  const [value, setValue] = useState('')
  const location = useLocation();
  const userProfile = location.pathname === '/profile';
  const handleSendReply = (revId) => {
    const updatedReviews = Reviews.map(rev => {
      if (rev.id === revId) {
        return {
          ...rev,
          reply: value.trim(),
          updatedAt:  dayjs().toISOString()
        }
      }
      return rev
    })
    switch (filter) {
      case 'All':
        setReviews(updatedReviews)
        break;
      case '5 Star':
        setReviews(updatedReviews.filter(r => r.stars === 5))
        break;
      case '4 Star':
        setReviews(updatedReviews.filter(r => r.stars === 4))
        break;
      case '3 Star':
        setReviews(updatedReviews.filter(r => r.stars === 3))
        break;
      case '2 Star':
        setReviews(updatedReviews.filter(r => r.stars === 2))
        break;
      case '1 Star':
        setReviews(updatedReviews.filter(r => r.stars === 1))
        break;
      default:
        setReviews(updatedReviews)
        break;
    }
    setOpenReply(false)
    setValue('')
  }
  const handleClose = () => {
    setOpenReply(prev => !prev)
    setValue('')
  }
  return (
    <div className="reviews-container">
      <div className="top-review">
        <div className="left">
          <img src={review.sender.profile} className={review.sender.accountTYpe === 'Team' ? 'team-profile' : ''} />
        </div>
        <div className="middle">
          <p className="name">{review.sender.name}</p>
          <div className="user-info">
            <p className="username">@{review.sender.username}</p>
            <span></span>
            <p>{review.sender.accountTYpe}</p>
            <span></span>
            <p>{formatDate(review.createdAt)}</p>
          </div>
        </div>
        <div className="right">
          {generateStars(review.stars)}
        </div>
      </div>
      <div className="middle-review">
        <span className="project-info">
          <i className="fa-solid fa-table-cells-large"></i>
          <p>{review.project.title}</p>
        </span>
        <p className="review-msg">{review.reviewMessage}</p>
      </div>
      <div className="bottom-review">
        {(userProfile && !review.reply) && (
          <div className="up">
            <p className="reply-btn" onClick={handleClose}><i className="fa-solid fa-reply"></i> {openReply ? 'Close' : 'Reply'}</p>
          </div>
        )}
        {review.reply && (
          <div className="reply-container">
            <p className="hd-txt">{userProfile ? 'YOUR' : user.profile.firstName?.toUpperCase() || user.profile.companyName?.toUpperCase().split(' ').slice(0, 1) || user.profile.teamName?.toUpperCase().split(' ').slice(0, 1)} {userProfile ? 'REPLY' : 'REPLIED'}</p>
            <p className="date">{formatDate(review.updatedAt)}</p>
            <p className="reply-msg">{review.reply}</p>
          </div>
        )}
        {!review.reply && openReply && (
          <div className="reply-wrap">
            <p className="hd-txt">{value.trim() ? 'Replying' : 'Reply'} to {review.sender.name} Review</p>
            <textarea type="text" placeholder="Type your reply message..." maxLength={500} onChange={e => setValue(e.target.value)} onKeyDown={e => {
              if (e.ctrlKey && e.key === 'Enter') {
                handleSendReply(review.id)
              }
            }} />
            <p className="count">{value.trim().length} / 500</p>
            <button className={value.trim() && 'open'} onClick={() => handleSendReply(review.id)}>Reply</button>
          </div>
        )}
      </div>
    </div>
  )
}
import { useState } from "react";
import { checkAccountType } from "../../utils/checkAccountType";

export function PostComment({comment, handleReply}) {
  const [liked, setLiked] = useState(false);
  const handleCommentLike = (com) => {
    if (liked) {
      com.likes -= 1;
      setLiked(false)
    } else {
      com.likes += 1;
      setLiked(true)
    }
  }
  return (
    <div className="comment-wrapper">
      <div className="comment-left">
        <img src={comment.user.profile} />
      </div>
      <div className="comment-right">
        <div className="comment-top">
          <div className="middle">
            <p className="name">{comment.user.name}</p>
            <div className={`badge ${checkAccountType(comment.user)}`}>{comment.user.accountType}</div>
            <span></span>
            <p className="post-time">{comment.date}</p>
          </div>
          <div className="post-option">
            <i className="fa-solid fa-ellipsis-v"></i>
          </div>
        </div>
        <div className="comment-bottom">
          {comment.img && (
          <img src={comment.img} />
          )}
          <p className="text">{comment.text}</p>
        </div>
        <div className="comment-action">
          <div className="left">
            <p className={`like ${liked && 'liked'}`} onClick={() => handleCommentLike(comment)}>Like</p>
            {comment.likes === 0 ? '' : (
              <span>
                <i className="fa-solid fa-heart"></i>
                <p>{comment.likes}</p>
              </span>
            )}
            <div className="line"></div>
            <p className="reply" onClick={() => handleReply(comment)}>Reply</p>
          </div>
        </div>
      </div>
    </div>
  )
}
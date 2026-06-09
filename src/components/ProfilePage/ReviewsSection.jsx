import { useState } from "react";
import { ProfilePageRightSidebar } from "./ProfilePageRightSidebar";
import { Reviews } from "../../data/ProfilePage/reviews";

export function ReviewsSection() {
  const [viewReviews, setViewReviews] = useState('All')
  return (
    <>
      <div className="main-portfolio-wrap">
        <div className="review-project-top">
          <div className={viewReviews === 'All' ? 'current' : ''} onClick={() => setViewReviews('All')}>All <span>(20)</span></div>
          <div className={viewReviews === '5 Star' ? 'current' : ''} onClick={() => setViewReviews('5 Star')}>5 stars <span>(0)</span></div>
          <div className={viewReviews === '4 Star' ? 'current' : ''} onClick={() => setViewReviews('4 Star')}>4 stars <span>(0)</span></div>
          <div className={viewReviews === '3 Star' ? 'current' : ''} onClick={() => setViewReviews('3 Star')}>3 stars <span>(0)</span></div>
          <div className={viewReviews === '2 Star' ? 'current' : ''} onClick={() => setViewReviews('2 Star')}>2 stars <span>(0)</span></div>
          <div className={viewReviews === '1 Star' ? 'current' : ''} onClick={() => setViewReviews('1 Star')}>1 stars <span>(0)</span></div>
        </div>
        <div className="review-project-container">
          {Reviews.slice().reverse().map((review) => {
            return (
              <div key={review.id} className="reviews-container">
                <div className="top-review">
                  <div className="left">
                    <img src={review.sender.profile} />
                  </div>
                  <div className="middle">
                    <p className="name">{review.sender.name}</p>
                    <div className="user-info">
                      <p>@{review.sender.username}</p>
                      <span></span>
                      <p>{review.sender.accountTYpe}</p>
                      <span></span>
                      <p>Feb 2025</p>
                    </div>
                  </div>
                  <div className="right">
                    {review.stars === 1 && (
                      <>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                      </>
                    )}
                    {review.stars === 2 && (
                      <>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                      </>
                    )}
                    {review.stars === 3 && (
                      <>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                      </>
                    )}
                    {review.stars === 4 && (
                      <>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                      </>
                    )}
                    {review.stars === 5 && (
                      <>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </>
                    )}
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
                  {!review.reply && (
                    <div className="up">
                      <p className="reply-btn"><i className="fa-solid fa-reply"></i> Reply</p>
                    </div>
                  )}
                  {review.reply && (
                    <div className="reply-container">
                      <p className="hd-txt">YOUR REPLY</p>
                      <p className="reply-msg">{review.reply}</p>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <ProfilePageRightSidebar />
    </>
  )
}
import { Fragment } from 'react'
import { user } from '../../data/ProfilePage/user'
import './ProfilePageRightSidebar.css'
import { generateStars } from '../../utils/generateStars';

export function ProfilePageRightSidebar() {
  let linkCount = 0;
  return (
    <div className="acivity-sidebar">
      <div className="skils-wrap">
        <div className="top">
          <p>Skills</p>
          {user.skills.length > 0 && <p className="skill-edit-btn">Edit</p>}
        </div>
        <div className="skills-container">
          {user.skills.length === 0 && (
            <div className='no-skills'>
              <p>You have not added any skills yet</p>
              <button>Add Skills</button>
            </div>
          )}
          <div className="skill-wrap-fill">
            {user.skills.map((skill) => {
              return (
                <span key={skill.id}>{skill.name}</span>
              )
            })}
          </div>
        </div>
      </div>
      <div className="recent-preview-wrap">
        <div className="top">
          <p>Reviews</p>
          {user.reviews.length > 0 && <p className="preview-see-all-btn">See all</p>}
        </div>
        {user.reviews.length === 0 && (
          <div className="no-reviews">
            <p>No review yet</p>
            <p>Complete projects to get feedback from clients</p>
          </div>
        )}
        <div className="reviews-wrap">
          {user.reviews.slice(0, 2).map((review) => {
            return (
              <Fragment key={review.id}>
                <div className="reviews-container">
                  <div className="top-review">
                    <div className="review-user-pic">
                      <img src={review.profile} />
                    </div>
                    <div className="name">
                      <p>{review.name}</p>
                    </div>
                    <div className="stars">
                      {generateStars(review.stars)}
                    </div>
                  </div>
                  <div className="bottom-review">
                    <p>{review.reviewMessage}</p>
                  </div>
                </div>
              </Fragment>
            )
          })}
        </div>
      </div>
      <div className="links-container">
        <div className="top">
          <p>Links</p>
          {user.links.length > 0 && <p className="link-eidt-btn">Edit</p>}
        </div>
        {user.links.length === 0 && (
          <div className="no-links">
            <p>You have not added any links yet</p>
            <button>Add Links</button>
          </div>
        )}
        <div className="link-content">
          {user.links.map((link) => {
            linkCount ++;
            return (
              linkCount <= 4 && (
                <div className="link-wrap" key={link.id}>
                  <div className="color-area">
                    <span className="color"></span>
                  </div>
                  <div className="link-address">
                    <p>{link.url}</p>
                  </div>
                </div>
              )
            )
          })}
        </div>
      </div>
    </div>
  )
}
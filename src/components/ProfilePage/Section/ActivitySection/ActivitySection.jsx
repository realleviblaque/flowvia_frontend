import { useLocation, useNavigate } from "react-router-dom"
import { ProfilePageRightSidebar } from "../../../../components/ProfilePage/ProfilePageRightSidebar"
import './ActivitySection.css'
import { useState } from "react"

export function ActivitySection({user}) {
  const [posts, setPosts] = useState([])
  const navigate = useNavigate();
  const location = useLocation();
  const userProfile = location.pathname === '/profile';
  
  const goToCreatePost = () => {
    navigate('/create/post?f=profile')
  }
  const name = 
    user.accountType === 'Recruiter' 
      ? user.profile.companyName.split(' ').map(n => n[0]).join('').slice(0, 2) 
    : user.accountType === 'Team' 
      ? user.profile.teamName.split(' ').map(n => n[0]).join('').slice(0, 2) 
    : user.profile.firstName.slice(0, 1) + user.profile.lastName.slice(0, 1)
  ;
  return (
    <section className="activity-section">
      <div className="main-post-wrap">
        {userProfile && (
          <div className="post-container-input">
            <div className="top-post">
              <div className="prof-wrap">
                {user.profile.image ? <img src={user.profile.image} /> : <p>{name.toUpperCase()}</p>}
              </div>
              <div className="post-input-btn" onClick={goToCreatePost}>
                Share an update...
              </div>
              <div className="phone-options">
                <i className="fa-solid fa-image" onClick={goToCreatePost}></i>
                <i className="fa-solid fa-pencil" onClick={goToCreatePost}></i>
              </div>
            </div>
            <div className="bottom-post">
              <div className="left-image-btn" onClick={goToCreatePost}>
                <i className="fa-solid fa-image"></i>
              </div>
              <div className="right-post-btn">
                <button onClick={goToCreatePost}>Post</button>
              </div>
            </div>
          </div>
        )}
        <div className="activity-container">
          {posts.length === 0 && (
            <div className="empty-posts">
              <i className="fa-solid fa-feather-alt"></i>
              <p>No posts yet</p>
              {userProfile ? (
                <>
                  <p>Share an updates across Flowvia!</p>
                  <button onClick={goToCreatePost}>Create a Post</button>
                </>
              ) : (
                <p>{user.profile.firstName || user.profile.companyName?.split(' ').slice(0, 1) || user.profile.teamName?.split(' ').slice(0, 1)} has not shared any updates on Flowvia!</p>
              )}
            </div>
          )}
          {posts.map((post) => {
            return (
              <div key={post.id} className="post-container">
                <div className="post-header">
                  <div className="left">
                    <img className="post-user-profile" src={post.userImg} />
                  </div>
                  <div className="middle">
                    <div className="post-info-top">
                      <p className="name">{post.user}</p>
                      <span></span>
                      <p className="post-time">{post.postDate}</p>
                    </div>
                    <div className="post-info-bottom">
                      <p className="username">@{post.username}</p>
                      <span></span>
                      <p className="category">Flowvia Company</p>
                      <span className='phone'></span>
                      <p className="date">2hr ago</p>
                    </div>
                  </div>
                  <div className="post-option">
                    <i className="fa-solid fa-ellipsis-v"></i>
                  </div>
                </div>
                <div className="post-body">
                  <p className="body-text">
                    {post.postText}
                  </p>
                  {post.postProject ? '' : post.postImg && (
                    <div className="body-image">
                      <img src={post.postImg} />
                    </div>
                  )}
                </div>
                {post.postProject && (
                  <div className="post-project">
                    <div className="project-cover" style={post.postProject.image && {background: `linear-gradient(rgba(0,0,0,0.3)), url('${post.postProject.image}') center no-repeat`, backgroundSize: 'cover'}}>
                      {!post.postProject.image && <span>{post.postProject.title}</span>}
                    </div>
                    <div className="project-details">
                      <p className="title">{post.postProject.title}</p>
                      <p className="description">{post.postProject.description}</p>
                      <div className="details">
                        <div>
                          Remote
                        </div>
                        <span></span>
                        <div>
                          Long-Term Contract
                        </div>
                      </div>
                      <div className="action">
                        <div className="left-action-project">
                          <div className="budget">{post.postProject.budget}</div>
                          <div className="deadline">{post.postProject.deadline}</div>
                        </div>
                        <div className="right-action-project">
                          <button className="opportunity-btn">View Opportunity</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="footer-post">
                  <div className="react-wrap">
                    <div>
                      <i className="fa-regular fa-heart"></i>
                      <p className="like-count">{post.likes}</p>
                    </div>
                    <div>
                      <i className="fa-regular fa-comment"></i>
                      <p className="comment-count">{post.comment}</p>
                    </div>
                    <div>
                      <i className="fa-solid fa-share-alt"></i>
                      <p className="share-count">{post.share}</p>
                    </div>
                  </div>
                  <div className="save-post">
                    <div>
                      <i className="fa-regular fa-bookmark"></i>
                      <p className="save-count">{post.save}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <ProfilePageRightSidebar user={user} />
    </section>
  )
}
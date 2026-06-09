import { checkAccountType } from '../../utils/checkAccountType'
import './HomePagePost.css'

export function HomePagePost({post}) {
  return (
    <div className="post-container">
      <div className="post-header">
        <div className="left">
          <img className="post-user-profile" src={post.userImg} />
        </div>
        <div className="middle">
          <div className="post-info-top">
            <p className="name">{post.user}</p>
            <div className={`badge ${checkAccountType(post)}`}>{post.accountType}</div>
            <span></span>
            <p className="post-time">{post.postDate}</p>
          </div>
          <div className="post-info-bottom">
            <p className="username">@{post.username}</p>
            <span></span>
            <p className="category">Flowvia Company</p>
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
            {!post.postProject.image && (post.postProject.title)}
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
            <i className="fa-solid fa-share"></i>
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
}
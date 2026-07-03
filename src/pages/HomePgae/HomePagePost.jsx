import { useState } from 'react'
import { checkAccountType } from '../../utils/checkAccountType'
import './HomePagePost.css'
import dayjs from 'dayjs';

export function HomePagePost({post, savePosts, setSavePosts}) {
  const [liked, setLiked] = useState(false);
  const isBookmarked = savePosts.some(item => item.postId === post.id);

  const handleLikeClick = (post) => {
    if (liked) {
      post.likes -= 1;
      setLiked(false)
    } else {
      post.likes += 1;
      setLiked(true)
    }
  }

  const handleBookmark = (post) => {
    const exists = savePosts.some(prev => prev.postId === post.id);
    if (exists) {
      setSavePosts(prev => prev.filter(saved => saved.postId !== post.id));
    } else {
      const bookmark = {
        id: crypto.randomUUID(),
        createdAt: dayjs().toISOString(),
        postId: post.id,
        user: {
          name: post.user,
          username: post.username,
          profile: post.userImg,
          accountType: post.accountType
        },
      };

      if (post.postText) {
        bookmark.post = {
          id: crypto.randomUUID(),
          text: post.postText,
        };
      }

      if (post.postImg) {
        bookmark.post = {
          id: crypto.randomUUID(),
          image: post.postImg,
        };
      }
      if (post.postText && post.postImg) {
        bookmark.post = {
          id: crypto.randomUUID(),
          text: post.postText,
          image: post.postImg,
        };
      }

      if (post.postProject) {
        bookmark.job = {
          title: post.postProject.title,
          minBud: post.postProject.minBud,
          maxBud: post.postProject.maxBud,
          type: 'Remote',
          deadline: post.postProject.deadline
        }
      }

      setSavePosts(prev => [
        bookmark,
        ...prev
      ])
    }
  }
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
                <div className="budget">${post.postProject.minBud} - ${post.postProject.maxBud}K</div>
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
          <div className={liked ? 'liked' : ''} onClick={() => handleLikeClick(post)}>
            <i className={`fa-${liked ? 'solid' : 'regular'} fa-heart`}></i>
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
          <div className={isBookmarked ? 'bookmarked' : ''} onClick={() => handleBookmark(post)}>
            <i className={`fa-${isBookmarked ? 'solid' : 'regular'} fa-bookmark`}></i>
          </div>
        </div>
      </div>
    </div>
  )
}
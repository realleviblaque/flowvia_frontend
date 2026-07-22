import { useState } from 'react';
import { checkAccountType } from '../../utils/checkAccountType'
import './HomePagePost.css'
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import formatBudet from '../../utils/formatBudget';

export function HomePagePost({post, savePosts, setSavePosts, handlePostView}) {
  const [liked, setLiked] = useState(false);
  const isBookmarked = savePosts.some(item => item.postId === post.id);
  const naviagte = useNavigate();

  const handleLikeClick = (post) => {
    if (liked) {
      post.likes = post.likes.filter(p => p.name !== 'Levi Blaque');
      setLiked(false)
    } else {
      post.likes.push({
        name: 'Levi Blaque'
      });
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
          name: post.sender.name,
          username: post.sender.username,
          profile: post.sender.profileImg,
          accountType: post.sender.accountType
        },
      };

      if (post.text) {
        bookmark.post = {
          id: crypto.randomUUID(),
          text: post.text,
        };
      }

      if (post.postImage) {
        bookmark.post = {
          id: crypto.randomUUID(),
          image: post.postImage,
        };
      }
      if (post.text && post.postImage) {
        bookmark.post = {
          id: crypto.randomUUID(),
          text: post.text,
          image: post.postImage,
        };
      }

      if (post.postOpportunity) {
        const [{title, minBud, maxBud, location, deadline}] = post.postOpportunity
        bookmark.job = {
          title: title,
          minBud: minBud,
          maxBud: maxBud,
          type: location,
          deadline: deadline
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
        <div className="left" onClick={() => naviagte(`/user/${post.sender.username}`)}>
          <img className="post-user-profile" src={post.sender.profileImg} />
        </div>
        <div className="middle" onClick={() => handlePostView(post.sender)}>
          <div className="post-info-top">
            <p className="name">{post.sender.name}</p>
            <div className={`badge ${checkAccountType(post.sender)}`}>{post.sender.accountType}</div>
            <span></span>
            <p className="post-time">{dayjs(post.createdAt).format('h')}</p>
          </div>
          <div className="post-info-bottom">
            <p className="username">@{post.sender.username}</p>
            <span></span>
            <p className="category">Flowvia Company</p>
            <span className='phone'></span>
            <p className="date">{dayjs(post.createdAt).format('h')}</p>
          </div>
        </div>
        <div className="post-option">
          <i className="fa-solid fa-ellipsis-v"></i>
        </div>
      </div>
      <div className="post-body">
        {post.text && (
          <p className="body-text" onClick={() => handlePostView(post.sender)}>
            {post.text}
          </p>
        )}
        {post.postImage && (
          <div className="body-image">
            <img src={post.postImage} />
          </div>
        )}
      </div>
      {post.postOpportunity && (
        post.postOpportunity.map((project) => {
          return (
            <div className="post-project" key={project.id}>
              <div className="project-cover" style={project.image && {background: `linear-gradient(rgba(0,0,0,0.3)), url('${project.image}') center no-repeat`, backgroundSize: 'cover'}}>
                {!project.image && <span>{project.title}</span>}
              </div>
              <div className="project-details">
                <p className="title">{project.title}</p>
                <p className="description">{project.description}</p>
                <div className="details">
                  <div>
                    {project.location}
                  </div>
                  <span></span>
                  <div>
                    {project.projectType}
                  </div>
                </div>
                <div className="action">
                  <div className="left-action-project">
                    <div className="budget">${formatBudet(project.minBud)} - ${formatBudet(project.maxBud)}</div>
                    <div className="deadline">{project.deadline}</div>
                  </div>
                  <div className="right-action-project">
                    <button className="opportunity-btn">View Opportunity</button>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      )}
      <div className="footer-post">
        <div className="react-wrap">
          <div className={liked ? 'liked' : ''} onClick={() => handleLikeClick(post)}>
            <i className={`fa-${liked ? 'solid' : 'regular'} fa-heart`}></i>
            <p className="like-count">{post.likes.length}</p>
          </div>
          <div onClick={() => handlePostView(post.sender)}>
            <i className="fa-regular fa-comment"></i>
            <p className="comment-count">{post.comment.length}</p>
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
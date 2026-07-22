import { SideBar } from "../../components/Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import { posts } from "../../data/HomePage/posts";
import { checkAccountType } from "../../utils/checkAccountType";
import { Fragment, useRef, useState } from "react";
import dayjs from "dayjs";
import './FullPost.css'
import { RightSideBar } from "../../components/HomePage/RightSIdeBar";
import { PostComment } from "./PostComment";
import formatBudet from "../../utils/formatBudget";

export function FullPost({all, savePosts, setSavePosts}) {
  /*
  const [comments, setComments] = useState([{
    id: crypto.randomUUID(),
    user: {
      profile: '/profile.png',
      name: 'Levi Blaque',
      username: 'realleviblaque',
      accountType: 'Freelancer'
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, eveniet dolor. Neque eius, alias placeat labore minima temporibus consequuntur accusantium. Exercitationem soluta earum quidem rerum repellendus nemo necessitatibus. Provident, libero!
    Provident odio asperiores, ea adipisci consequatur totam libero ratione, similique explicabo autem veniam? Eveniet dolorem ipsam harum sed assumenda fugiat rem odio, veritatis dolore id quaerat expedita numquam ut voluptatibus.
    Autem culpa deserunt quod aliquam natus quis nostrum iste veniam pariatur esse vel, optio sapiente obcaecati aut, quia, fugiat illum voluptatibus deleniti dolore ratione tenetur! Tempora molestiae odit neque molestias?`,
    date: '4h',
    likes: 0,
  }, {
    id: crypto.randomUUID(),
    user: {
      profile: '/profile.png',
      name: 'Levi Blaque',
      username: 'levieteam',
      accountType: 'Team'
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, eveniet dolor. Neque eius, alias placeat labore minima temporibus consequuntur accusantium. Exercitationem soluta earum quidem re`,
    date: '4h',
    img: '/profile.png',
    likes: 0,
  }, {
    id: crypto.randomUUID(),
    user: {
      profile: '/profile.png',
      name: 'Levi Blaque',
      username: 'leecruiter',
      accountType: 'Recruiter'
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, eveniet dolor. Neque eius, alias placeat labore minima temporibus consequuntur accusantium. Exercitationem soluta earum quidem rerum repellendus nemo necessitatibus. Provident, libero!
    Provident odio asperiores, ea adipisci consequatur totam libero ratione, similique explicabo autem veniam? Eveniet dolorem ipsam harum sed assumenda fugiat rem odio, veritatis dolore id quaerat expedita numquam ut voluptatibus.
    Autem culpa deserunt quod aliquam natus quis nostrum iste veniam pariatur esse vel, optio sapiente obcaecati aut, quia, fugiat illum voluptatibus deleniti dolore ratione tenetur! Tempora molestiae odit neque molestias?`,
    date: '4h',
    likes: 0,
  }]);
  */
  
  const { username, id } = useParams();
  const post = posts?.find(p => p.sender.id === id && p.sender.username === username);
  const [liked, setLiked] = useState(false);
  const isBookmarked = savePosts.some(item => item.postId === post?.id);
  const navigate = useNavigate();
  const commentRef = useRef(null)
  const [commentValue, setCommentValue] = useState('')
  const [reply, setReply] = useState('')

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
  const handleComment = (e) => {
    const value = e.target.value;
    setCommentValue(value)
  }
  const handleCommentInput = () => {
    const input = commentRef.current;
    input.style.height = '18px'
    input.style.height = (input.scrollHeight) + 'px'
    if (input.scrollHeight > 200) {
      input.style.height = '200px';
    }
  }
  const handleCommentSend = (comment) => {
    if (commentValue.trim()) {
      const newComment = {
        id: crypto.randomUUID(),
        createdAt: dayjs().toISOString(),
        user: {
          profile: '/profile.png',
          name: 'Levi Blaque',
          username: 'realleviblaque',
          accountType: 'Freelancer'
        },
        text: commentValue.trim(),
        date: '4h',
        likes: [],
      }

      /* setComments((prev) => [
        newComment,
        ...prev
      ]) */
      comment.unshift(newComment);

      setCommentValue('')
      commentRef.current.style.height = '28px'
    }
  }
  const handleReply = (e) => {
    setReply(e.user.username)
  }
  return (
    <>
      <SideBar notification={all} />
      <header className="full-post-header">
        <i className="fa-solid fa-chevron-left" onClick={() => navigate(-1)}></i>
        <p>Posts</p>
      </header>
      <main className={`full-post-main ${!post && 'no-post'} ${reply.trim() !== '' ? 'add-new' : ''}`}>
        {!post && (
          <div>
            <i className="fa-solid fa-exclamation-triangle"></i>
            <p>Post not found</p>
          </div>
        )}
        {post && (
          <>
            <Fragment key={post.id}>
              <div className="post-view-container">
                <div className="upside">
                  <div className="post-header">
                    <div className="left" onClick={() => navigate(`/user/${post.sender.username}`)}>
                      <img className="post-user-profile" src={post.sender.profileImg} />
                    </div>
                    <div className="middle">
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
                      <p className="body-text">
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
                </div>
                <div className="footer-post">
                  <div className="react-wrap">
                    <div className={liked ? 'liked' : ''} onClick={() => handleLikeClick(post)}>
                      <i className={`fa-${liked ? 'solid' : 'regular'} fa-heart`}></i>
                      <p className="like-count">{post.likes.length}</p>
                    </div>
                    <div>
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
                <div className={`downside ${reply.trim() !== '' ? 'add-new' : ''}`}>
                  <div className={`comment-container ${post.comment.length === 0 && 'no-comment'}`}>
                    {post.comment.length === 0 && (
                      <div>
                        <i className="fa-solid fa-comment-slash"></i>
                        <p>No comments yet. Be the first to comment!</p>
                      </div>
                    )}
                    {post.comment.length > 0 && (
                      post.comment.map((comment) => {
                        return (
                          <Fragment key={comment.id}>
                            <PostComment comment={comment} handleReply={handleReply} />
                          </Fragment>
                        )
                      })
                    )}
                  </div>
                  <div className="comment-input-wrap">
                    <div className="top">
                      {reply.trim() === '' ? '' : (
                        <div className="reply-cover">
                          <p>Replying to <span>@{reply.trim()}</span></p>
                          <i className="fa-solid fa-x" onClick={() => setReply('')}></i>
                        </div>
                      )}
                    </div>
                    <div className="bottom">
                      <i className="fa-solid fa-image"></i>
                      <textarea placeholder="Write a comment..." ref={commentRef} value={commentValue} onChange={handleComment} onInput={handleCommentInput} ></textarea>
                      <i className={`fa-solid fa-paper-plane ${commentValue.trim() && 'active'}`} onClick={() => handleCommentSend(post.comment)}></i>
                    </div>
                  </div>
                </div>
              </div>
              <RightSideBar />
            </Fragment>
          </>
        )}
      </main>
    </>
  )
}
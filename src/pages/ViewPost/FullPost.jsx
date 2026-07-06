import { SideBar } from "../../components/Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import { posts } from "../../data/HomePage/posts";
import { checkAccountType } from "../../utils/checkAccountType";
import { Fragment, useState } from "react";
import dayjs from "dayjs";
import './FullPost.css'
import { RightSideBar } from "../../components/HomePage/RightSIdeBar";

export function FullPost({all, savePosts, setSavePosts}) {
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
  }, {
    id: crypto.randomUUID(),
    user: {
      profile: '/profile.png',
      name: 'Levi Blaque',
      username: 'realleviblaque',
      accountType: 'Team'
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, eveniet dolor. Neque eius, alias placeat labore minima temporibus consequuntur accusantium. Exercitationem soluta earum quidem re`,
    date: '4h',
    img: '/profile.png'
  }, {
    id: crypto.randomUUID(),
    user: {
      profile: '/profile.png',
      name: 'Levi Blaque',
      username: 'realleviblaque',
      accountType: 'Recruiter'
    },
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, eveniet dolor. Neque eius, alias placeat labore minima temporibus consequuntur accusantium. Exercitationem soluta earum quidem rerum repellendus nemo necessitatibus. Provident, libero!
    Provident odio asperiores, ea adipisci consequatur totam libero ratione, similique explicabo autem veniam? Eveniet dolorem ipsam harum sed assumenda fugiat rem odio, veritatis dolore id quaerat expedita numquam ut voluptatibus.
    Autem culpa deserunt quod aliquam natus quis nostrum iste veniam pariatur esse vel, optio sapiente obcaecati aut, quia, fugiat illum voluptatibus deleniti dolore ratione tenetur! Tempora molestiae odit neque molestias?`,
    date: '4h',
  }]);
  setComments
  const { username, id } = useParams();
  const post = posts?.find(p => p.id === id && p.username === username);
  const [liked, setLiked] = useState(false);
  const isBookmarked = savePosts.some(item => item.postId === post?.id);
  const navigate = useNavigate();

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
    <>
      <SideBar notification={all} />
      <header className="full-post-header">
        <i className="fa-solid fa-chevron-left" onClick={() => navigate(-1)}></i>
        <p>Posts</p>
      </header>
      <main className={`full-post-main ${!post && 'no-post'}`}>
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
                </div>
                <div className="footer-post">
                  <div className="react-wrap">
                    <div className={liked ? 'liked' : ''} onClick={() => handleLikeClick(post)}>
                      <i className={`fa-${liked ? 'solid' : 'regular'} fa-heart`}></i>
                      <p className="like-count">{post.likes}</p>
                    </div>
                    <div>
                      <i className="fa-regular fa-comment"></i>
                      <p className="comment-count">{comments.length}</p>
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
                <div className="downside">
                  <div className={`comment-container ${comments.length === 0 && 'no-comment'}`}>
                    {comments.length === 0 && (
                      <div>
                        <i className="fa-solid fa-comment-slash"></i>
                        <p>No comments yet. Be the first to comment!</p>
                      </div>
                    )}
                    {comments.length > 0 && (
                      comments.map((comment) => {
                        return (
                          <div className="comment-wrapper" key={comment.id}>
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
                                  <p className="reply">Reply</p>
                                  <span>
                                    <i className="fa-solid fa-heart"></i>
                                    <p>11</p>
                                  </span>
                                </div>
                                <div className="right">
                                  <i className="fa-regular fa-heart"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    )}
                  </div>
                  <div className="comment-input-wrap">
                    <i className="fa-solid fa-image"></i>
                    <textarea placeholder="Write a comment..."></textarea>
                    <i className="fa-solid fa-paper-plane"></i>
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
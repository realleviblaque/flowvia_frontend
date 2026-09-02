import { useNavigate, useParams } from "react-router-dom";
import { Users } from "../../data/Users/users";
import { SideBar } from "../../components/Sidebar";
import { MobileHeader2 } from "../../components/MobileHeader2";
import { useEffect, useRef, useState } from "react";
import { ProfilePageNavBar } from "../../components/ProfilePage/ProfilePageNavBar";
import { ProfilePosts } from "../../data/ProfilePage/posts";
import { ProfilePageRightSidebar } from "../../components/ProfilePage/ProfilePageRightSidebar";
import { ProjectSection } from "../../components/ProfilePage/ProjectSection";
import { ReviewsSection } from "../../components/ProfilePage/ReviewsSection";
import { BottomBar } from "../../components/BottomBar";
import { PlusModal } from "../../components/PlusModal";
import dayjs from "dayjs";
import formatCount from '../../utils/formatCount'
import './UserProfile.css'

export function UserProfile({all, hadnlePlusDialogOpen, plusDialog, hadnlePlusDialogClose}) {
  const { username } = useParams();
  const user = Users.find(p => p.profile.username === username)
  
  const [viewingSection, setViewingSection] = useState('Activity')
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const container = scrollRef.current;
    if (!container) return;

    if (container.scrollTop > 505) {
      el.style.borderTop = 'none';
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: 'auto', block: 'start' })
      })
    }
  }, [viewingSection])

  const handleTabClick = (tab) => {
    const container = scrollRef.current;
    const section = sectionRef.current;
    
    if (!container || !section) return;

    if (tab === viewingSection && container.scrollTop > 520) {
      container.scrollTo({
        top: section.offsetTop - 61,
        behavior: 'smooth'
      })
      return;
    }

    setViewingSection(tab)
  }
  const isMobile = window.innerWidth < 768;
  return (
    <> 
      <SideBar notification={all} />
      <MobileHeader2 />
      {!user && (
        <main>
          <div className="empty-user-result">
            <i className="fa-solid fa-user-slash"></i>
            <p className="hd-txt">User Not Found</p>
            <p className="txt">This profile doesn't exist or is no longer available.</p>
            <button onClick={() => navigate(-1)}>Go Back</button>
          </div>
        </main>
      )}
      {user && (
        <main>
          <div className="user-profile-page-container" ref={scrollRef}>
            <div className="user-profile-top-container">
              <div className={`cover-pic-wrap ${user.accountType === 'Recruiter' ? 'recruiter' :user.accountType === 'Team' ? 'team' : ''}`}>
                {user.profile.cover && (
                  <img src={user.cover} />
                )}
              </div>
              <div className="profle-action-wrap">
                <div className={`profile-img ${user.accountType === 'Team' ? 'team' : ''} ${user.accountType === 'Recruiter' ? 'recruiter' : ''}`}>
                  <img className='pic' src={user.profile.image} />
                  {user.info.isOnline && (
                    <span className="active"></span>
                  )}
                </div>
                {isMobile ? (
                  <div className="profile-action">
                    <button className="message-profile">
                      <i className="fa-regular fa-envelope"></i>
                    </button>
                    {user.accountType === 'Recruiter' ? '' : (
                      <button className="hire-profile">
                        <span>Hire</span>
                      </button>
                    )}
                    <button className="more-profile">
                      <i className="fa-solid fa-ellipsis-h"></i>
                    </button>
                    <button className="follow-profile">
                      <i className="fa-solid fa-plus"></i>
                      <span>Follow</span>
                    </button>
                  </div>
                ) : (
                    <div className="profile-action">
                      <button className="follow-profile">
                        <i className="fa-solid fa-plus"></i>
                        <span>Follow</span>
                      </button>
                      {user.accountType === 'Recruiter' ? '' : (
                        <button className="hire-profile">
                          <span>Hire</span>
                        </button>
                      )}
                      <button className="message-profile">
                        <span>Message</span>
                      </button>
                      <button className="more-profile">
                        <i className="fa-solid fa-ellipsis-h"></i>
                      </button>
                    </div>
                )}
              </div>
              <div className="profile-details">
                <div className="profile-name-wrap">
                  <p className="name">{user.profile.name} {user.info.isVerified && (<i className={`fa-regular fa-check-circle ${user.accountType === 'Team' ? 'team' : ''} ${user.accountType === 'Recruiter' ? 'recruiter' : ''}`}></i>)}</p>
                  <div className={`account-badge ${user.accountType === 'Team' ? 'team-badge' : ''} ${user.accountType === 'Recruiter' ? 'recruiter-badge' : ''}`}>
                    {user.accountType}
                  </div>
                  {user.info.isVerified ? '' : (
                    <div className="verified-wrap">
                      <i className="fa-regular fa-check-circle"></i>
                      <p>Get Verified</p>
                    </div>
                  )}
                </div>
                <div className="profile-username-category">
                  <p className="username">@{user.profile.username}</p>
                  <span></span>
                  <p>{user.profile.title}</p>
                </div>
                <div className="profile-more">
                  {user.profile.bio && (
                    <p className="bio">
                      {user.profile.bio}
                    </p>
                  )}
                  <div className="more-info">
                    {user.profile.website && (
                      <div className="link-wrap">
                        <i className="fa-solid fa-link"></i>
                        <a href={user.profile.website} target="_blank">{user.profile.website}</a>
                      </div>
                    )}
                    {user.email && (
                      <div className="email-wrap">
                        <i className="fa-solid fa-envelope"></i>
                        <p className="email">{user.email}</p>
                      </div>
                    )}
                    <div className="joined-date-info">
                      <i className="fa-solid fa-calendar-alt"></i>
                      <p className="joined-date">Joined <span>{dayjs(user.createdAt).format('MMMM YYYY')}</span></p>
                    </div>
                  </div>
                  <div className="follow-details-count">
                    <div>
                      <span className="following">{formatCount(user.profile.counts.following)}</span>
                      <p>Following</p>
                    </div>
                    <div>
                      <span className="followers">{formatCount(user.profile.counts.followers)}</span>
                      <p>Followers</p>
                    </div>
                    <div>
                      <span className="post-total">{formatCount(user.profile.counts.posts)}</span>
                      <p>Posts</p>
                    </div>
                    {user.accountType === 'Recruiter' ? (
                      <div>
                        <span className="projects-count">{formatCount(user.profile.counts.jobs)}</span>
                        <p>Jobs</p>
                      </div>
                    ) : (
                      <div>
                        <span className="projects-count">{user.profile.counts.project}</span>
                        <p>Projects</p>
                      </div>
                    )}
                  </div>
                  <div className="profile-category">
                    <div className={`first-category ${user.accountType === 'Recruiter' ? 'recruiter' : ''} ${user.accountType === 'Team' ? 'team' : ''}`}>{user.profile.title}</div>
                    {user.profile.additionalTitle && (
                      <div className="second-category">{user.profile.additionalTitle}</div>
                    )}
                    {user.accountType === 'Recruiter' ? (
                      user.info.openToHire && (
                        <div className="third-category">Open to Hire</div>
                      )
                    ) : (
                      <>
                        {user.info.openToWork && (
                          <div className={`third-category ${user.accountType === 'Team' ? 'team' : ''}`}>Open to work</div>
                        )}
                        {user.info.openToHire && (
                          <div className='forth-category'>Open to Hire</div>
                        )}
                      </>
                    )}
                  </div>
                  <div className="worked-with-container">
                    <div className="worked-top">
                      <p>WORKED WITH</p>
                      <p>People who hired you</p>
                    </div>
                    <div className="worked-with-wrap">
                      <div className="worked-peopled-pic">
                        <img src="/profile.png" />
                        <img src="/profile.png" />
                        <img src="/profile.png" />
                      </div>
                      <div className="worked-people-details">
                        <div className="worked-name-container">
                          <p className="client-name">Tunde Nwosu</p>
                        </div>
                        <div className="more-worked-with">
                          <p><span>+14</span> more</p>
                          <div></div>
                          <p>all completed jobs</p>
                        </div>
                      </div>
                      <div className="arrow-btn-view">
                        <i className="fa-solid fa-chevron-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Starting Next From Here Downward */}
            <div className="user-profile-bottom" ref={sectionRef}>
              <ProfilePageNavBar viewingSection={viewingSection} handleTabClick={handleTabClick} />

              {viewingSection === 'Activity' && (
                <section className="activity-section">
                  <div className="main-post-wrap">
                    <div className="activity-container">
                      {ProfilePosts.slice().reverse().map((post) => {
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
                  <ProfilePageRightSidebar />
                </section>
              )}
              {viewingSection === 'Projects' && (
                <section className="project-section">
                  <ProjectSection />
                </section>
              )}
              {viewingSection === 'Portfolio' && (
                <section className="portfolio-section">
                  <div className="main-portfolio-wrap">
                    <div className="portfolio-project-bottom">
                      <div className="cards">
                        <div>
                          <p className="txt">200+</p>
                          <button>View Portfolio</button>
                        </div>
                        <p className="head-txt">All Projects</p>
                      </div>
                      <div className="cards">
                        <div>
                          <p className="txt">100+</p>
                          <button>View Portfolio</button>
                        </div>
                        <p className="head-txt">Client Projects</p>
                      </div>
                      <div className="cards">
                        <div>
                          <p className="txt">80+</p>
                          <button>View Portfolio</button>
                        </div>
                        <p className="head-txt">Team Projects</p>
                      </div>
                      <div className="cards">
                        <div>
                          <p className="txt">20+</p>
                          <button>View Portfolio</button>
                        </div>
                        <p className="head-txt">Ongoing Projects</p>
                      </div>
                    </div>
                  </div>
                  <ProfilePageRightSidebar />
                </section>
              )}
              {viewingSection === 'About' && (
                <section className="about-section">
                  <div className="main-about-wrap">
                    <div className="bio-part">
                      <div className="top">
                        <p>Bio</p>
                        <button>Edit</button>
                      </div>
                      <div className="bottom">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae asperiores, natus rem, impedit corporis nobis veritatis molestias cupiditate optio enim est ipsa ducimus, repellat sunt quis quaerat modi. Maxime, dolorum.</p>
                      </div>
                    </div>
                    <div className="about-part">
                      <div className="top">
                        <p>About</p>
                        <button>Edit</button>
                      </div>
                      <div className="bottom">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto fuga illo magni pariatur fugiat. Inventore dolorem, molestias dicta quis nesciunt et placeat harum illo rerum mollitia voluptates tenetur impedit.

                          <br />
                          <br />
                        Aut sunt numquam nostrum dignissimos dicta provident accusamus maxime obcaecati vitae ullam, magni fuga voluptates at fugit amet asperiores quia, quidem hic sit ad est recusandae. Veritatis pariatur dignissimos debitis.

                        <br />
                        <br />
                        At debitis, id suscipit sapiente dolores voluptates in natus cupiditate dolorum explicabo, voluptas veniam culpa consequatur dolor enim, necessitatibus cum incidunt praesentium asperiores totam dignissimos quo? Totam repudiandae nam unde?</p>
                      </div>
                    </div>
                    <div className="professioal-part">
                      <div className="top">
                        <p>Professional Details</p>
                        <button>Edit</button>
                      </div>
                      <div className="bottom">
                        <div className="left">
                          <div>
                            <span className="left-side user">
                              <i className="fa-regular fa-user"></i>
                            </span>
                            <span className="right-side">
                              <p className="hd-txt">Professional Title</p>
                              <p className="txt">Full Stack Developer</p>
                            </span>
                          </div>
                          <div>
                            <span className="left-side hour">
                              <i className="fa-regular fa-clock"></i>
                            </span>
                            <span className="right-side">
                              <p className="hd-txt">Hourly Rate</p>
                              <p className="txt">$15 - $40 <span>/ hr</span></p>
                            </span>
                          </div>
                          <div>
                            <span className="left-side work">
                              <i className="fa-regular fa-square-plus"></i>
                            </span>
                            <span className="right-side">
                              <p className="hd-txt">Work Type</p>
                              <p className="txt work-type">Remote <span></span> Contract</p>
                            </span>
                          </div>
                          <div>
                            <span className="left-side location">
                              <i className="fa-solid fa-map-marker-alt"></i>
                            </span>
                            <span className="right-side">
                              <p className="hd-txt">Location</p>
                              <p className="txt">Lagos, Nigeria</p>
                            </span>
                          </div>
                        </div>
                        <div className="right">
                          <div>
                            <span className="left-side avail">
                              <i className="fa-regular fa-clock"></i>
                            </span>
                            <span className="right-side">
                              <p className="hd-txt">Availability</p>
                              <p className="txt"><span></span> Open to Work</p>
                            </span>
                          </div>
                          <div>
                            <span className="left-side project">
                              <i className="fa-solid fa-laptop"></i>
                            </span>
                            <span className="right-side">
                              <p className="hd-txt">Project Budget</p>
                              <p className="txt">$500 - $3,000 <span>/ project</span></p>
                            </span>
                          </div>
                          <div>
                            <span className="left-side member">
                              <i className="fa-regular fa-calendar-alt"></i>
                            </span>
                            <span className="right-side">
                              <p className="hd-txt">Member Since</p>
                              <p className="txt">January 2025</p>
                            </span>
                          </div>
                          <div>
                            <span className="left-side website">
                              <i className="fa-solid fa-globe"></i>
                            </span>
                            <span className="right-side web">
                              <p className="hd-txt">Website</p>
                              <p className="txt">leviblaque.dev</p>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="skills-part">
                      <div className="top">
                        <p>Skills</p>
                        <button>Edit</button>
                      </div>
                      <div className="bottom">
                        <div className="skill-wrap">
                          <span>TypeScript</span>
                          <span>React</span>
                          <span>Node.js</span>
                          <span>PostgreSQL</span>
                          <span>REST APIs</span>
                          <span>Python</span>
                          <span>Git / GitHub</span>
                          <span>Forex Trader</span>
                        </div>
                      </div>
                    </div>
                    <div className="links-part">
                      <div className="top">
                        <p>Links & Contact</p>
                        <button>Edit</button>
                      </div>
                      <div className="bottom">
                        <div className="links-wrap">
                          <div>
                            <span className="github">
                              <i className="fa-brands fa-github"></i>
                            </span>
                            <span>
                              <p className="hd-txt">Github</p>
                              <p>github.com/realleviblaque</p>
                            </span>
                          </div>
                          <div>
                            <span className="linkedin">
                              <i className="fa-brands fa-linkedin"></i>
                            </span>
                            <span>
                              <p className="hd-txt">LinkedIn</p>
                              <p>linkedin.com/in/realleviblaque</p>
                            </span>
                          </div>
                          <div>
                            <span className="x">
                              <i className="fa-brands fa-x-twitter"></i>
                            </span>
                            <span>
                              <p className="hd-txt">Twitter / X</p>
                              <p>x.com/realleviblaque</p>
                            </span>
                          </div>
                          <div>
                            <span className="web">
                              <i className="fa-solid fa-globe"></i>
                            </span>
                            <span>
                              <p className="hd-txt">Website</p>
                              <p>leviblaque.dev</p>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ProfilePageRightSidebar />
                </section>
              )}
              {viewingSection === 'Reviews' && (
                <section className="reviews-section">
                  <ReviewsSection />
                </section>
              )}
            </div>
          </div>
        </main>
      )}
      <BottomBar hadnlePlusDialogOpen={hadnlePlusDialogOpen} />
      <PlusModal plusDialog={plusDialog} hadnlePlusDialogClose={hadnlePlusDialogClose} />
    </>
  )
}
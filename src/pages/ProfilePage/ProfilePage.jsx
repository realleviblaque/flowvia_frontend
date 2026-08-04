import { useEffect, useRef, useState } from "react";
import { ProfilePageNavBar } from "../../components/ProfilePage/ProfilePageNavBar";
import { ProfilePageRightSidebar } from "../../components/ProfilePage/ProfilePageRightSidebar";
import { SideBar } from "../../components/Sidebar";
import { ProfilePosts } from "../../data/ProfilePage/posts";
import './ProfilePage.css'
import { ProjectSection } from "../../components/ProfilePage/ProjectSection";
import { ReviewsSection } from "../../components/ProfilePage/ReviewsSection";
import { MobileHeader2 } from "../../components/MobileHeader2";
import { BottomBar } from "../../components/BottomBar";
import { PlusModal } from "../../components/PlusModal";

export function ProfilePage({all, hadnlePlusDialogOpen, hadnlePlusDialogClose, plusDialog}) {
  const [viewingSection, setViewingSection] = useState('Activity')
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);

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
  return (
    <> 
      <SideBar notification={all} />
      <MobileHeader2 />
      <main>
        <div className="profile-page-container" ref={scrollRef}>
          <div className="profile-top-container">
            <div className="cover-pic-wrap">
              <button className="edit-cover-btn">
                <i className="fa-solid fa-pencil"></i>
                <span>Edit cover</span>
              </button>
            </div>
            <div className="profle-action-wrap">
              <div className="profile-img">
                <img className="pic" src="/profile.png" />
                <span className="active"></span>
              </div>
              <div className="profile-action">
                <button className="edit-profile">
                  <i className="fa-solid fa-pencil"></i>
                  <span>Edit Profile</span>
                </button>
                <button className="share-profile">
                  <span>Share</span>
                </button>
                <button className="more-profile">
                  <i className="fa-solid fa-ellipsis-v"></i>
                </button>
              </div>
            </div>
            <div className="profile-details">
              <div className="profile-name-wrap">
                <p className="name">Levi Blaque <i className="fa-regular fa-check-circle"></i></p>
                <div className="account-badge">
                  Freelancer
                </div>
                <div className="verified-wrap">
                  <i className="fa-regular fa-check-circle"></i>
                  <p>Get Verified</p>
                </div>
              </div>
              <div className="profile-username-category">
                <p className="username">@realleviblaque</p>
                <span></span>
                <p>Full-Stack Developer</p>
              </div>
              <div className="profile-more">
                <p className="bio">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.
                </p>
                <div className="more-info">
                  <div className="link-wrap">
                    <i className="fa-solid fa-link"></i>
                    <a href="">leviblaque.dev</a>
                  </div>
                  <div className="email-wrap">
                    <i className="fa-solid fa-envelope"></i>
                    <p className="email">realleviblaque@gmail.com</p>
                  </div>
                  <div className="joined-date-info">
                    <i className="fa-solid fa-calendar-alt"></i>
                    <p className="joined-date">Joined <span>January 2025</span></p>
                  </div>
                </div>
                <div className="follow-details-count">
                  <div>
                    <span className="following">318</span>
                    <p>Following</p>
                  </div>
                  <div>
                    <span className="followers">1.2K</span>
                    <p>Followers</p>
                  </div>
                  <div>
                    <span className="post-total">47</span>
                    <p>Posts</p>
                  </div>
                  <div>
                    <span className="projects-count">24</span>
                    <p>Projects</p>
                  </div>
                </div>
                <div className="profile-category">
                  <div className="first-category">Full-Stack Developer</div>
                  <div className="second-category">Forex Trader</div>
                  <div className="third-category">Open to work</div>
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
          <div className="profile-bottom" ref={sectionRef}>
            <ProfilePageNavBar viewingSection={viewingSection} handleTabClick={handleTabClick} />

            {viewingSection === 'Activity' && (
              <section className="activity-section">
                <div className="main-post-wrap">
                  <div className="post-container-input">
                    <div className="top-post">
                      <div className="prof-wrap">
                        <img src="/profile.png" />
                      </div>
                      <div className="post-input-btn">
                        Share an update...
                      </div>
                      <div className="phone-options">
                        <i className="fa-solid fa-image"></i>
                        <i className="fa-solid fa-pencil"></i>
                      </div>
                    </div>
                    <div className="bottom-post">
                      <div className="left-image-btn">
                        <i className="fa-solid fa-image"></i>
                      </div>
                      <div className="right-post-btn">
                        <button>Post</button>
                      </div>
                    </div>
                  </div>
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
                      <p className="head-txt">Public Projects</p>
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
      <BottomBar hadnlePlusDialogOpen={hadnlePlusDialogOpen} />
      <PlusModal plusDialog={plusDialog} hadnlePlusDialogClose={hadnlePlusDialogClose} />
    </>
  )
}
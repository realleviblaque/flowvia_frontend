import { useEffect, useRef, useState } from "react";
import { ProfilePageNavBar } from "../../components/ProfilePage/ProfilePageNavBar";
import { SideBar } from "../../components/Sidebar";
import './UserProfile.css'
import { MobileHeader2 } from "../../components/MobileHeader2";
import { BottomBar } from "../../components/BottomBar";
import { PlusModal } from "../../components/PlusModal";
import { user } from "../../data/ProfilePage/user";
import dayjs from "../../lib/dayjs";
import formatCount from "../../utils/formatCount";
import { ActivitySection } from "./Section/Activity/ActivitySection";
import { ProjectSection } from "./Section/Projects/ProjectSection";
import { PortfolioSection } from "./Section/Portfolio/PortfolioSection";
import { AboutSection } from "./Section/About/AboutSection";
import { ReviewSection } from "./Section/Review/ReviewSection";
import { useNavigate } from "react-router-dom";

export function UserProfile({all, hadnlePlusDialogOpen, hadnlePlusDialogClose, plusDialog}) {
  const [viewingSection, setViewingSection] = useState('Activity')
  const [openMoreMenu, setOpenMoreMenu] = useState(false)
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);
  const name = user.firstName.slice(0, 1) + user.lastName.slice(0, 1);
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
  const copyToClipboard = async (link) => {
    try {
      await navigator.clipboard.writeText(link);
      setOpenMoreMenu(false)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }
  const handleShareClick = async () => {
    const profileUrl = `${window.location.origin}/user/${user.username}`;
    try {
      if (navigator.share) {
        await navigator.share({
          title: `${user.username} on Flowvia!`,
          text: `Check out ${user.username}'s profile on Flowvia.`,
          url: profileUrl,
        })
        setOpenMoreMenu(false)
        return;
      }
      await navigator.clipboard.writeText(profileUrl);
      setOpenMoreMenu(false);
    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error('Failed to share profile:', error)
      }
    }
  }
  return (
    <> 
      <SideBar notification={all} />
      <MobileHeader2 copyToClipboard={copyToClipboard} openMoreMenu={openMoreMenu} setOpenMoreMenu={setOpenMoreMenu} handleShareClick={handleShareClick} user={user} />
      <main>
        <div className="profile-page-container" ref={scrollRef}>
          <div className="profile-top-container">
            <div className="cover-pic-wrap">
              {user?.cover && <img src={user.cover} />}
              <button className="edit-cover-btn">
                <i className="fa-solid fa-pencil"></i>
                <span onClick={() => navigate('/profile/cover')}>Edit cover</span>
              </button>
            </div>
            <div className="profle-action-wrap">
              <div className={`profile-img ${user?.image ? '' : 'no-image'}`}>
                {user?.image ? <img className="pic" src={user.image} /> : <div className="name-Profiler">{name.toUpperCase()}</div>}
                <span className="active"></span>
              </div>
              <div className="profile-action">
                <button className="edit-profile" onClick={() => navigate('/settings?p')}>
                  <i className="fa-solid fa-pencil"></i>
                  <span>Edit Profile</span>
                </button>
                <button className="share-profile" onClick={handleShareClick}>
                  <span>Share</span>
                </button>
                <button className="more-profile" onClick={() => setOpenMoreMenu(prev => !prev)}>
                  <i className="fa-solid fa-ellipsis-v"></i>
                </button>
                <div className={`more-options ${openMoreMenu ? 'open' : ''}`}>
                  <div onClick={() => navigate('/create/post/drafts')}>
                    <p>Drafts</p>
                    <i className="fa-solid fa-file-alt"></i>
                  </div>
                  <div onClick={() => copyToClipboard(`${window.location.origin}/user/${user.username}`)}>
                    <p>Copy profile link</p>
                    <i className="fa-solid fa-link"></i>
                  </div>
                  <div onClick={() => copyToClipboard(`${window.location.origin}/user/${user.username}/porfolio`)}>
                    <p>Copy portfolio link</p>
                    <i className="fa-solid fa-link"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-details">
              <div className="profile-name-wrap">
                <div className="name-wrap">
                  <p className="name">{user.firstName} {user.lastName}</p>
                  {user.info.isVerified && <i className="fa-regular fa-check-circle"></i>}
                </div>
                <div className="account-badge">
                  {user.accountType}
                </div>
                {!user.info.isVerified && (
                  <div className="verified-wrap">
                    <i className="fa-regular fa-check-circle"></i>
                    <p>Get Verified</p>
                  </div>
                )}
              </div>
              <div className="profile-username-category">
                <p className="username">@{user.username}</p>
                <span></span>
                <p>{user.title}</p>
              </div>
              <div className="profile-more">
                <p className="bio">{user.bio}</p>
                <div className="more-info">
                  <div className="link-wrap">
                    <i className="fa-solid fa-link"></i>
                    <a href={`https://${user.website}`}>{user.website}</a>
                  </div>
                  <div className="email-wrap">
                    <i className="fa-solid fa-envelope"></i>
                    <p className="email">{user.email}</p>
                  </div>
                  <div className="joined-date-info">
                    <i className="fa-solid fa-calendar-alt"></i>
                    <p className="joined-date">Joined <span>{dayjs(user.createdAt).format('MMMM YYYY')}</span></p>
                  </div>
                </div>
                <div className="follow-details-count">
                  <div>
                    <span className="following">{formatCount(user.counts.following)}</span>
                    <p>Following</p>
                  </div>
                  <div>
                    <span className="followers">{formatCount(user.counts.followers)}</span>
                    <p>Followers</p>
                  </div>
                  <div>
                    <span className="post-total">{formatCount(user.counts.projects)}</span>
                    <p>Posts</p>
                  </div>
                  <div>
                    <span className="projects-count">{user.counts.posts}</span>
                    <p>Projects</p>
                  </div>
                </div>
                <div className="profile-category">
                  <div className="first-category">{user.title}</div>
                  {user?.additionalTitle && <div className="second-category">Forex Trader</div>}
                  {user.info.openToWork && <div className="third-category">Open to work</div>}
                  {user.info.openToHire && <div className="forth-category">Open to Hire</div>}
                </div>
                <div className="worked-with-container">
                  <div className="worked-top">
                    <p>WORKED WITH</p>
                    <p>People who hired you</p>
                  </div>
                  <div className="worked-with-wrap">
                    {user.workedWith.length === 0 && (
                      <div className="empty-work-with">You have not work with any clients</div>
                    )}
                    {user.workedWith.length > 0 && (
                      <>
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
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-bottom" ref={sectionRef}>
            <ProfilePageNavBar viewingSection={viewingSection} handleTabClick={handleTabClick} />

            {viewingSection === 'Activity' && <ActivitySection />}
            {viewingSection === 'Projects' && <ProjectSection />}
            {viewingSection === 'Portfolio' && <PortfolioSection />}
            {viewingSection === 'About' && <AboutSection />}
            {viewingSection === 'Reviews' && <ReviewSection />}
          </div>
        </div>
      </main>
      <BottomBar hadnlePlusDialogOpen={hadnlePlusDialogOpen} />
      <PlusModal plusDialog={plusDialog} hadnlePlusDialogClose={hadnlePlusDialogClose} />
    </>
  )
}
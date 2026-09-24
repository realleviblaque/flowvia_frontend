import { useLocation, useNavigate } from "react-router-dom";
import formatCount from "../../utils/formatCount";
import dayjs from "../../lib/dayjs";
import './ProfileTop.css'

export function ProfileTop({user, setOpenMoreMenu, openMoreMenu}) {
  const navigate = useNavigate();
  const location = useLocation()
  const userProfile = location.pathname === '/profile';
  const publicProfile = location.pathname.startsWith('/user')
  const isMobile = window.innerWidth < 768;
  const name = 
    user.accountType === 'Recruiter' 
      ? user.profile.companyName.split(' ').map(n => n[0]).join('').slice(0, 2) 
    : user.accountType === 'Team' 
      ? user.profile.teamName.split(' ').map(n => n[0]).join('').slice(0, 2) 
    : user.profile.firstName.slice(0, 1) + user.profile.lastName.slice(0, 1)
  ;
  const copyToClipboard = async (link) => {
    try {
      await navigator.clipboard.writeText(link);
      setOpenMoreMenu(false)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }
  const handleShareClick = async () => {
    const profileUrl = `${window.location.origin}/user/${user.profile.username}`;
    try {
      if (navigator.share) {
        await navigator.share({
          title: `${user.profile.username} on Flowvia!`,
          text: `Check out ${user.profile.username}'s profile on Flowvia.`,
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
    <div className="profile-top-container">
      <div className={`cover-pic-wrap ${user.accountType === 'Recruiter' ? 'recruiter' :user.accountType === 'Team' ? 'team' : ''}`}>
        {user.profile.coverPicture && <img src={user.profile.coverPicture} />}
        {userProfile && (
          <button className="edit-cover-btn">
            <i className="fa-solid fa-pencil"></i>
            <span onClick={() => navigate('/profile/cover')}>Edit cover</span>
          </button>
        )}
      </div>
      <div className="profle-action-wrap">
        <div className={`profile-img ${user.accountType === 'Team' ? 'team' : ''} ${user.accountType === 'Recruiter' ? 'recruiter' : ''} ${user.profile?.image ? '' : 'no-image'}`}>
          {user.profile.image ? <img className="pic" src={user.profile.image} /> : <div className={`name-Profile ${user.accountType === 'Recruiter' ? 'recruiter' :user.accountType === 'Team' ? 'team' : ''}`}>{name.toUpperCase()}</div>}
          {(publicProfile && user.info.isOnline) && <span className="active"></span>}
          {userProfile && <span className="active"></span>}
        </div>
        <div className="profile-action">
          {userProfile && (
            <>
              <button className="edit-profile" onClick={() => navigate('/settings?p')}>
                <i className="fa-solid fa-pencil"></i>
                <span>Edit Profile</span>
              </button>
              <button className="share-profile" onClick={handleShareClick}>
                <span>Share</span>
              </button>
            </>
          )}
          {publicProfile && (
            <>
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
                  </div>
              )}
            </>
          )}
          <button className="more-profile" onClick={() => setOpenMoreMenu(prev => !prev)}>
            <i className="fa-solid fa-ellipsis-v"></i>
          </button>
          <div className={`more-options ${openMoreMenu ? 'open' : ''}`}>
            {userProfile && (
              <div onClick={() => navigate('/create/post/drafts')}>
                <p>Drafts</p>
                <i className="fa-solid fa-file-alt"></i>
              </div>
            )}
            {publicProfile && (
              <div onClick={handleShareClick}>
                <p>Share</p>
                <i className="fa-solid fa-share"></i>
              </div>
            )}
            <div onClick={() => copyToClipboard(`${window.location.origin}/user/${user.profile.username}`)}>
              <p>Copy profile link</p>
              <i className="fa-solid fa-link"></i>
            </div>
            <div onClick={() => copyToClipboard(`${window.location.origin}/user/${user.profile.username}/porfolio`)}>
              <p>Copy portfolio link</p>
              <i className="fa-solid fa-link"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-details">
        <div className="profile-name-wrap">
          <div className="name-wrap">
            <p className="name">{user.accountType === 'Recruiter' ? user.profile.companyName :user.accountType === 'Team' ? user.profile.teamName : `${user.profile.firstName}  ${user.profile.lastName}`}</p>
            {user.info.isVerified && <i className={`fa-regular fa-check-circle ${user.accountType === 'Team' ? 'team' : ''} ${user.accountType === 'Recruiter' ? 'recruiter' : ''}`}></i>}
          </div>
          <div className={`account-badge ${user.accountType === 'Team' ? 'team-badge' : ''} ${user.accountType === 'Recruiter' ? 'recruiter-badge' : ''}`}>
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
          <p className="username">@{user.profile.username}</p>
          <span></span>
          <p>{user.profile.title}</p>
        </div>
        <div className="profile-more">
          <p className="bio">{user.profile.bio}</p>
          <div className="more-info">
            <div className="link-wrap">
              <i className="fa-solid fa-link"></i>
              <a href={`https://${user.profile.website}`} target="_blank">{user.profile.website}</a>
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
                <span className="projects-count">{formatCount(user.profile.counts.candidatesHired)}</span>
                <p>Hired</p>
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
            {user.profile.additionalTitle && <div className="second-category">{user.profile.additionalTitle}</div>}
            {user.accountType === 'Recruiter' ? user.info.openToHire && <div className="third-category">Open to Hire</div> : (
              <>
                {user.info.openToWork && <div className={`third-category ${user.accountType === 'Team' ? 'team' : ''}`}>Open to work</div>}
                {user.info.openToHire && <div className="forth-category">Open to Hire</div>}
              </>
            )}
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
  )
}
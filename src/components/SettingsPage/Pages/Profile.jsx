import './Profile.css'

export function Profile() {
  const isMobile = window.innerWidth < 768;
  return (
    <div className="profile-information">
      {isMobile ? '' : (
        <div className="top">
          <p className="head-txt">Profile Information</p>
          <p className="txt">This is how you appear on your public profile and in marketplace search.</p>
        </div>
      )}
      <div className="bottom">
        <div className="profile-uplod-container">
          <div className="profile">
            <img src="/profile.png" />
          </div>
          <div className="action">
            <button>Upload Photo</button>
            <p className="txt">JPG, PNG or WEBP</p>
            <p className="remove">Remove photo</p>
          </div>
        </div>
        <div className="profile-input-container">
          <div className="input-wrap">
            <div className="name-sec">
              <div>
                <p>First Name</p>
                <input type="text" defaultValue="Levi" placeholder="Enter your first name" />
              </div>
              <div>
                <p>Last Name</p>
                <input type="text" defaultValue="Blaque" placeholder="Enter your last name" />
              </div>
            </div>
            <div className="input-cont">
              <p>Username</p>
              <input type="text" defaultValue="realleviblaque" placeholder="Enter your username" />
            </div>
          </div>
          <div className="input-wrap">
            <div className="input-cont">
              <p>Professional Title</p>
              <input type="text" defaultValue="Full Stack Developer" placeholder="Enter your professional title" />
            </div>
            <div className="input-cont">
              <p>Location</p>
              <input type="text" defaultValue="Lagos, Nigeria" placeholder="Enter your location" />
            </div>
          </div>
          <div className="input-wrap">
            <div className="input-cont">
              <p>Bio</p>
              <textarea placeholder="Enter your bio" defaultValue='Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt libero corrupti ipsam tenetur consectetur temporibus molestiae illo inventore dicta neque blanditiis facilis hic maxime exercitationem porro, vitae impedit unde. Quidem.'></textarea>
              <p className="textarea-count">100 / 300 characters</p>
            </div>
          </div>
          <div className="input-wrap">
            <div className="input-cont">
              <p>Website</p>
              <input type="text" defaultValue="leviblaue.dev" placeholder="Enter your professional title" />
            </div>
            <div className="input-cont">
              <p>Account Type</p>
              <div className="account-type">Freelancer Account</div>
            </div>
          </div>
          <div className="input-wrap">
            <div className="input-cont">
              <p>Social Links</p>
              <div className="social-links-wrap">
                <div className="social-wrap">
                  <div className="left">
                    <span></span>
                    <p>GitHub</p>
                  </div>
                  <div className="right">
                    <p>githbub.com/realleviblaque</p>
                    <span>Edit</span>
                  </div>
                </div>
                <div className="social-wrap">
                  <div className="left">
                    <span></span>
                    <p>LinkdIn</p>
                  </div>
                  <div className="right">
                    <p>linkedin.com/in/realleviblaque</p>
                    <span>Edit</span>
                  </div>
                </div>
                <div className="social-wrap">
                  <div className="left">
                    <span></span>
                    <p>Twitter/X</p>
                  </div>
                  <div className="right">
                    <p>twitter.com/realleviblaque</p>
                    <span>Edit</span>
                  </div>
                </div>
                <div className="social-wrap">
                  <div className="left">
                    <span></span>
                    <p>TikTok</p>
                  </div>
                  <div className="right">
                    <p>tiktok.com/realleviblaque</p>
                    <span>Edit</span>
                  </div>
                </div>
              </div>
              <div className="add-social">
                <button>Add Social Link</button>
              </div>
            </div>
          </div>
          <div className="input-wrap">
            <div className="action-btn">
              <button className="save-btn">Save Changes</button>
              <button className="cancle-btn">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
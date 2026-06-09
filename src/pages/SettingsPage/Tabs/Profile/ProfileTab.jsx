import { SideBar } from "../../../../components/Sidebar";
import { SettingsPageSidebar } from "../../../../components/SettingsPage/SettingsPageSIdebar";
import './ProfileTab.css'

export function ProfileTab({all}) {
  return (
    <>
      <SideBar notification={all} />
      <main className="settings-page-main">
        <SettingsPageSidebar />
        <div className="settings-sidebar-content">
          <div className="profile-section">
            <div className="profile-preview">
              <div className="profile-img-prev">
                <img src="/profile.png" />
                <span className="active-badge"></span>
              </div>
              <div className="profile-details-prev">
                <p className="name">Levi Blaque</p>
                <div className="detils-prev">
                  <p className="username">@realleviblaque</p>
                  <span></span>
                  <p className="account-type">Freelancer Account</p>
                </div>
                <div className="avail-prev">
                  <span className="prof-title">Full Stack Developer</span>
                  <span className="open-to-work">Open to Work</span>
                  <span className="unverified">Unverified</span>
                </div>
              </div>
              <div className="profile-prev-btn">
                <button>Edit Profile</button>
              </div>
            </div>
            <div className="get-verifeid-container">
              <div className="left">
                <span>
                  <i className="fa-solid fa-shield-halved"></i>
                </span>
              </div>
              <div className="text-content">
                <p className="head-txt">Get Verified on Flowvia</p>
                <p className="txt">Verified accouns get more visibility, higher trust from recruiters, and a badge beside thier name.</p>
              </div>
              <div className="get-btn">
                <button>Get Verified</button>
              </div>
            </div>
            <div className="profile-information">
              <div className="top">
                <p className="head-txt">Profile Information</p>
                <p className="txt">This is how you appear on your public profile and in marketplace search.</p>
              </div>
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
            <div className="work-status-profile-container">
              <div className="top">
                <p className="head-txt">Work Status & Availability</p>
                <p className="txt">Controls what others see about your current status on your profile and in marketplace.</p>
              </div>
              <div className="avail-wrap">
                <div className="avail">
                  <div className="left">
                    <p className="head-txt">Open to Work</p>
                    <p className="txt">Show that you're available for new projects on your profile</p>
                  </div>
                  <div className="right">
                    <input type="checkbox" defaultChecked />
                  </div>
                </div>
                <div className="avail">
                  <div className="left">
                    <p className="head-txt">Open to Hiring</p>
                    <p className="txt">Show an active hiring post in the marketplace</p>
                  </div>
                  <div className="right">
                    <input type="checkbox" />
                  </div>
                </div>
                <div className="avail">
                  <div className="left">
                    <p className="head-txt">Appear in Marketplace Search</p>
                    <p className="txt">Allow clients to find your profile in Freelancers search</p>
                  </div>
                  <div className="right">
                    <input type="checkbox" defaultChecked />
                  </div>
                </div>
                <div className="avail">
                  <div className="left">
                    <p className="head-txt">Show Online Status</p>
                    <p className="txt">Let others see that you're currently active</p>
                  </div>
                  <div className="right">
                    <input type="checkbox" defaultChecked />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
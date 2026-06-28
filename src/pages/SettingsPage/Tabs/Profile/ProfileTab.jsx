import { SideBar } from "../../../../components/Sidebar";
import { SettingsPageSidebar } from "../../../../components/SettingsPage/SettingsPageSIdebar";
import './ProfileTab.css'
import { Profile } from "../../../../components/SettingsPage/Pages/Profile";

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
            <Profile />
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
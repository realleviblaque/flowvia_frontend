import { SideBar } from "../../../../components/Sidebar";
import { SettingsContentHeader } from "../../../../components/SettingsPage/SettingsContentHeader";
import { SettingsPageSidebar } from "../../../../components/SettingsPage/SettingsPageSIdebar";
import './ProfileVisibilityTab.css'

export function ProfileVisibilityTab({all}) {
  return (
    <>
      <SideBar notification={all} />
      <main className="settings-page-main">
        <SettingsPageSidebar />
        <div className="settings-sidebar-content">
          <div className="profile-visibility-tab-section">
            <SettingsContentHeader />
            <div className="profile-visibility-tab-content">
              <div className="top-part">
                <p className="head-txt">Profile Visibility</p>
                <p className="txt">Control who can discover and view your profile across the platform and on the web.</p>
              </div>
              <div className="content">
                <div className="profile-box">
                  <p className="hd-txt">Public Profile</p>
                  <div className="inner">
                    <div>
                      <span className="left">
                        <input type="radio" name="profile" />
                      </span>
                      <span className="right">
                        <p className="head-txt">Public</p>
                        <p className="txt">Anyone can find and view your profile, including search engines</p>
                      </span>
                    </div>
                    <div>
                      <span className="left">
                        <input type="radio" name="profile" />
                      </span>
                      <span className="right">
                        <p className="head-txt">Private</p>
                        <p className="txt">Only Flowvia users can see your profile - hidden from search engines</p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="profile-box">
                  <p className="hd-txt">Marketplace Visibility</p>
                  <div className="inner">
                    <div>
                      <span className="left">
                        <input type="radio" name="marketplace" />
                      </span>
                      <span className="right">
                        <p className="head-txt">Visible</p>
                        <p className="txt">Your profile appears in Freelancers search, hiring recommendations</p>
                      </span>
                    </div>
                    <div>
                      <span className="left">
                        <input type="radio" name="marketplace" />
                      </span>
                      <span className="right">
                        <p className="head-txt">Hidden</p>
                        <p className="txt">Your profile does not appear in marketplace search or recommendations</p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="profile-box">
                  <p className="hd-txt">Search Engine Visibility</p>
                  <div className="inner">
                    <div>
                      <span className="left">
                        <input type="radio" name="search-engine" />
                      </span>
                      <span className="right">
                        <p className="head-txt">Enabled</p>
                        <p className="txt">Google and other search engines can index your public profile Flowvia profile</p>
                      </span>
                    </div>
                    <div>
                      <span className="left">
                        <input type="radio" name="search-engine" />
                      </span>
                      <span className="right">
                        <p className="head-txt">Disabled</p>
                        <p className="txt">Your profile is excluded from search engine indexing via noindex</p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="action-btn">
                  <button className="save-btn">Save Changes</button>
                  <button className="cancle-btn">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
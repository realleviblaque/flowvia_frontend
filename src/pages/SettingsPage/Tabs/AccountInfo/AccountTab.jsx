import { SideBar } from "../../../../components/Sidebar";
import { SettingsPageSidebar } from "../../../../components/SettingsPage/SettingsPageSIdebar";
import './AccountTab.css'
import { SettingsContentHeader } from "../../../../components/SettingsPage/SettingsContentHeader";

export function AccountTab({all}) {
  return (
    <>
      <SideBar notification={all} />
      <main className="settings-page-main">
        <SettingsPageSidebar />
        <div className="settings-sidebar-content">
          <div className="account-information-section">
            <SettingsContentHeader />
            <div className="account-information-content">
              <div className="top-part">
                <p className="head-txt">Account Information</p>
                <p className="txt">----.</p>
              </div>
              <div className="content">
                <div className="info-wrap">
                  <div className="wrap">
                    <p className="head-txt">Email Address</p>
                    <input type="email" placeholder="Enter your email address" defaultValue="youremail@gmail.com" />
                    <div>
                      <p>Used for login and notification</p>
                      <span></span>
                      <p className="verified">Verified <i className="fa-solid fa-check"></i></p>
                    </div>
                  </div>
                  <div className="wrap">
                    <p className="head-txt">Phone Number</p>
                    <input type="tel" placeholder="+234 000 000 0000" />
                    <div>
                      <p>Optional</p>
                      <span></span>
                      <p>Used for account recovery</p>
                    </div>
                  </div>
                </div>
                <div className="info-wrap">
                  <div className="wrap">
                    <p className="head-txt">Account Type</p>
                    <div className="account-type">Freelancer Account</div>
                  </div>
                  <div className="wrap">
                    <p className="head-txt">Member Since</p>
                    <div className="join-since">January 10, 2025</div>
                  </div>
                </div>
                <div className="info-wrap">
                  <div className="wrap">
                    <p className="head-txt">Country</p>
                    <div className="country">Nigeria</div>
                  </div>
                </div>
                <div className="info-action">
                  <button className="save-btn">Save Changes</button>
                  <button>Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
import { SideBar } from "../../../../components/Sidebar";
import { SettingsPageSidebar } from "../../../../components/SettingsPage/SettingsPageSIdebar";
import './PasswordTab.css'
import { SettingsContentHeader } from "../../../../components/SettingsPage/SettingsContentHeader";

export function PasswordTab({all}) {
  return (
    <>
      <SideBar notification={all} />
      <main className="settings-page-main">
        <SettingsPageSidebar />
        <div className="settings-sidebar-content">
          <div className="password-tab-section">
            <SettingsContentHeader />
            <div className="password-tab-content">
              <div className="top-part">
                <p className="head-txt">Change Password</p>
                <p className="txt">Choose a strong password of at least 8 characters with a mix of letters, numbers, and symbols.</p>
              </div>
              <div className="content">
                <div className="up">
                  <div>
                    <p className="head-txt">Current Password</p>
                    <input type="text" placeholder="Enter current password" />
                  </div>
                  <div>
                    <p className="head-txt">New Password</p>
                    <input type="text" placeholder="Min. 8 characters" />
                  </div>
                  <div>
                    <p className="head-txt">Confrim New Password</p>
                    <input type="text" placeholder="Repeat new password" />
                  </div>
                </div>
                <div className="action-btn">
                  <button className="save-btn">Update Password</button>
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
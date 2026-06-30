import { SideBar } from "../../../../components/Sidebar";
import { SettingsPageSidebar } from "../../../../components/SettingsPage/SettingsPageSIdebar";
import './PasswordTab.css'
import { SettingsContentHeader } from "../../../../components/SettingsPage/SettingsContentHeader";
import { Password } from "../../../../components/SettingsPage/Pages/Password/Password";

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
              <Password />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
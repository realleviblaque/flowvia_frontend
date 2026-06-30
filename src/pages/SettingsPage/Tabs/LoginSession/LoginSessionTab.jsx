import { SideBar } from "../../../../components/Sidebar";
import { SettingsContentHeader } from "../../../../components/SettingsPage/SettingsContentHeader";
import { SettingsPageSidebar } from "../../../../components/SettingsPage/SettingsPageSIdebar";
import './LoginSessionTab.css'
import { LoginSession } from "../../../../components/SettingsPage/Pages/Login/LoginSession";

export function LoginSessionTab({all}) {
  return (
    <>
      <SideBar notification={all} />
      <main className="settings-page-main">
        <SettingsPageSidebar />
        <div className="settings-sidebar-content">
          <div className="login-section-tab-section">
            <SettingsContentHeader />
            <div className="login-section-tab-content">
              <div className="top-part">
                <p className="head-txt">Login Sessions</p>
                <p className="txt">All devices and broswers currently signed in to your account.Revoke any sessions you don't recognise.</p>
              </div>
              <LoginSession />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
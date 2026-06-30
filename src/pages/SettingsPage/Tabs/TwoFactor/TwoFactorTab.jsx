import { SideBar } from "../../../../components/Sidebar";
import { SettingsContentHeader } from "../../../../components/SettingsPage/SettingsContentHeader";
import { SettingsPageSidebar } from "../../../../components/SettingsPage/SettingsPageSIdebar";
import './TwoFactorTab.css'
import { Two2Factor } from "../../../../components/SettingsPage/Pages/2Factor/2Factor";

export function TwoFactorTab({all}) {
  return (
    <>
      <SideBar notification={all} />
      <main className="settings-page-main">
        <SettingsPageSidebar />
        <div className="settings-sidebar-content">
          <div className="two-factor-tab-section">
            <SettingsContentHeader />
            <div className="two-factor-tab-content">
              <div className="top-part">
                <p className="head-txt">Two-Factor Authentication</p>
                <p className="txt">Add a extra layer of security. You'll be asked for a code each time you log in.</p>
              </div>
              <Two2Factor />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
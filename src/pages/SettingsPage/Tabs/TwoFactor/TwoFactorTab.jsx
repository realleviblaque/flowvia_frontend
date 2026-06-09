import { SideBar } from "../../../../components/Sidebar";
import { SettingsContentHeader } from "../../../../components/SettingsPage/SettingsContentHeader";
import { SettingsPageSidebar } from "../../../../components/SettingsPage/SettingsPageSIdebar";
import './TwoFactorTab.css'

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
              <div className="content">
                <div className="head">
                  <div className="left">
                    <p className="head-txt">Enable Two-Factor Authentication</p>
                    <p className="txt">Once enabled, you'll need your authenticator app to log in. Strongly recommended.</p>
                  </div>
                  <div className="right">
                    <input type="checkbox" />
                  </div>
                </div>
                <div className="two-card">
                  <p className="head-txt">Supported Authenticator Apps</p>
                  <p className="txt">Google Authenticator</p>
                </div>
                <div className="backup">
                  <p className="txt">Backup Email (Optional)</p>
                  <input type="text" placeholder="Recovery email if you lose access to your authenticator" />
                </div>
                <div className="action-btn">
                  <button className="save-btn">Enable 2FA</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
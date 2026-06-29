import { SideBar } from "../../../../components/Sidebar";
import { SettingsContentHeader } from "../../../../components/SettingsPage/SettingsContentHeader";
import { SettingsPageSidebar } from "../../../../components/SettingsPage/SettingsPageSIdebar";
import './EmailNotificationTab.css'
import { EmailNotification } from "../../../../components/SettingsPage/Pages/EmailNotification/EmailNotification";

export function EmailNotificationTab({all}) {
  return (
    <>
      <SideBar notification={all} />
      <main className="settings-page-main">
        <SettingsPageSidebar />
        <div className="settings-sidebar-content">
          <div className="email-notifi-tab-section">
            <SettingsContentHeader />
            <div className="email-notifi-tab-content">
              <div className="top-part">
                <p className="head-txt">Email Notifications</p>
                <p className="txt">Choose which emails Flowvia sends to your inboc. Critical security emails are always sent.</p>
              </div>
              <EmailNotification />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
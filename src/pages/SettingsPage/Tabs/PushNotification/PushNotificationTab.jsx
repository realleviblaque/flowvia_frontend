import { SideBar } from "../../../../components/Sidebar";
import { SettingsContentHeader } from "../../../../components/SettingsPage/SettingsContentHeader";
import { SettingsPageSidebar } from "../../../../components/SettingsPage/SettingsPageSIdebar";
import './PushNotificationTab.css'
import { PushNotification } from "../../../../components/SettingsPage/Pages/PushNotification/PushNotification";

export function PushNotificationTab({all}) {
  return (
    <>
      <SideBar notification={all} />
      <main className="settings-page-main">
        <SettingsPageSidebar />
        <div className="settings-sidebar-content">
          <div className="push-notifi-tab-section">
            <SettingsContentHeader />
            <div className="push-notifi-tab-content">
              <div className="top-part">
                <p className="head-txt">Push Notifications</p>
                <p className="txt">In-app and mobile push alerts - delivered in real time.</p>
              </div>
              <PushNotification />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
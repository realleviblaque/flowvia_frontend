import { SideBar } from "../../../../components/Sidebar";
import { SettingsContentHeader } from "../../../../components/SettingsPage/SettingsContentHeader";
import { SettingsPageSidebar } from "../../../../components/SettingsPage/SettingsPageSIdebar";
import './SubscriptionTab.css'
import { Subscription } from "../../../../components/SettingsPage/Pages/Subscription/Subscription";

export function SubscriptionTab({all}) {
  return (
    <>
      <SideBar notification={all} />
      <main className="settings-page-main">
        <SettingsPageSidebar />
        <div className="settings-sidebar-content">
          <div className="subsciption-section">
            <SettingsContentHeader />
            <Subscription />
          </div>
        </div>
      </main>
    </>
  )
}
import { SideBar } from "../../../../components/Sidebar";
import { SettingsContentHeader } from "../../../../components/SettingsPage/SettingsContentHeader";
import { SettingsPageSidebar } from "../../../../components/SettingsPage/SettingsPageSIdebar";
import './OnlineTab.css'
import { OnlineStatus } from "../../../../components/SettingsPage/Pages/OnlineStatus/OnlineStatus";

export function OnlineTab({all}) {
  return (
    <>
      <SideBar notification={all} />
      <main className="settings-page-main">
        <SettingsPageSidebar />
        <div className="settings-sidebar-content">
          <div className="online-status-tab-section">
            <SettingsContentHeader />
            <div className="online-status-tab-content">
              <div className="top-part">
                <p className="head-txt">Online Status</p>
                <p className="txt">Controls what others can see about your presence and activity on Flowvia.</p>
              </div>
              <OnlineStatus />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
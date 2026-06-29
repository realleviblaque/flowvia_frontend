import { SideBar } from "../../../../components/Sidebar";
import { SettingsContentHeader } from "../../../../components/SettingsPage/SettingsContentHeader";
import { SettingsPageSidebar } from "../../../../components/SettingsPage/SettingsPageSIdebar";
import './BlockedTab.css'
import { Block } from "../../../../components/SettingsPage/Pages/Block/Bloack";

export function BlockedTab({all}) {
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
                <p className="head-txt">Blocked Users</p>
                <p className="txt">Blocked users cannot message you, view your profile, or interact with your posts.</p>
              </div>
              <Block />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
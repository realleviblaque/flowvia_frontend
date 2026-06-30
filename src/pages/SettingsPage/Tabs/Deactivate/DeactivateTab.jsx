import { SideBar } from "../../../../components/Sidebar";
import { SettingsContentHeader } from "../../../../components/SettingsPage/SettingsContentHeader";
import { SettingsPageSidebar } from "../../../../components/SettingsPage/SettingsPageSIdebar";
import './DeactivateTab.css'
import { Deactivate } from "../../../../components/SettingsPage/Pages/Deactivate/Deactivate";

export function DeactivateTab({all}) {
  return (
    <>
      <SideBar notification={all} />
      <main className="settings-page-main">
        <SettingsPageSidebar />
        <div className="settings-sidebar-content">
          <div className="deactivate-section">
            <SettingsContentHeader />
            <div className="deactivate-content">
              <div className="top-part">
                <p className="head-txt">Deactivate Account</p>
                <p className="txt">Temporary - your account will be hidden but not deleted. You can reactivate at any time.</p>
              </div>
              <Deactivate />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
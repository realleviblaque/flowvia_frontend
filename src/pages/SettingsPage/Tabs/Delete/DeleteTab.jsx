import { SideBar } from "../../../../components/Sidebar";
import { SettingsContentHeader } from "../../../../components/SettingsPage/SettingsContentHeader";
import { SettingsPageSidebar } from "../../../../components/SettingsPage/SettingsPageSIdebar";
import './DeleteTab.css'
import { Delete } from "../../../../components/SettingsPage/Pages/Delete/Delete";

export function DeleteTab({all}) {
  return (
    <>
      <SideBar notification={all} />
      <main className="settings-page-main">
        <SettingsPageSidebar />
        <div className="settings-sidebar-content">
          <div className="delete-section">
            <SettingsContentHeader />
            <div className="delete-content">
              <div className="top-part">
                <p className="head-txt">Delete Account</p>
                <p className="txt">Permanent - this canot be undone. All your data will be deleted forever.</p>
              </div>
              <Delete />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
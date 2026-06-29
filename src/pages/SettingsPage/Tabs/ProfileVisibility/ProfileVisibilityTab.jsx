import { SideBar } from "../../../../components/Sidebar";
import { SettingsContentHeader } from "../../../../components/SettingsPage/SettingsContentHeader";
import { SettingsPageSidebar } from "../../../../components/SettingsPage/SettingsPageSIdebar";
import './ProfileVisibilityTab.css'
import { ProfileVisibility } from "../../../../components/SettingsPage/Pages/ProfileVisibility/ProfileVisibility";

export function ProfileVisibilityTab({all}) {
  return (
    <>
      <SideBar notification={all} />
      <main className="settings-page-main">
        <SettingsPageSidebar />
        <div className="settings-sidebar-content">
          <div className="profile-visibility-tab-section">
            <SettingsContentHeader />
            <div className="profile-visibility-tab-content">
              <div className="top-part">
                <p className="head-txt">Profile Visibility</p>
                <p className="txt">Control who can discover and view your profile across the platform and on the web.</p>
              </div>
              <ProfileVisibility />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
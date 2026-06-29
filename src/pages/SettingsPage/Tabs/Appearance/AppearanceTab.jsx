import { SideBar } from "../../../../components/Sidebar";
import { SettingsContentHeader } from "../../../../components/SettingsPage/SettingsContentHeader";
import { SettingsPageSidebar } from "../../../../components/SettingsPage/SettingsPageSIdebar";
import './AppearanceTab.css'
import { Appearance } from "../../../../components/SettingsPage/Pages/Appearance/Appearance";

export function AppearanceTab({all}) {
  return (
    <>
      <SideBar notification={all} />
      <main className="settings-page-main">
        <SettingsPageSidebar />
        <div className="settings-sidebar-content">
          <div className="appearance-section">
            <SettingsContentHeader />
            <div className="appearance-content">
              <div className="top-part">
                <p className="head-txt">Appearance</p>
                <p className="txt">Choose your preferred theme for the Flowvia interface.</p>
              </div>
              <Appearance />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
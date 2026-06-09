import { SideBar } from "../../../../components/Sidebar";
import { SettingsContentHeader } from "../../../../components/SettingsPage/SettingsContentHeader";
import { SettingsPageSidebar } from "../../../../components/SettingsPage/SettingsPageSIdebar";
import './DeactivateTab.css'

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
              <div className="content">
                <p className="head-txt">What happens when you deactivate?</p>
                <p className="txt">Your profile is hidden from the marketplace and search results. <br /> Active projects and messages are paused - not deleted. <br />Your Work Circle, portfolio, and reviews are all preserved. <br />Log back in at any time to reactivate - everything stays intact.</p>
                <p className="hd-txt">Confirm Your Password to Continue</p>
                <input type="password" placeholder="Enter current password" />
                <button>Deactivate My Account</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
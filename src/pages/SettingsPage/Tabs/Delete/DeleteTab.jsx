import { SideBar } from "../../../../components/Sidebar";
import { SettingsContentHeader } from "../../../../components/SettingsPage/SettingsContentHeader";
import { SettingsPageSidebar } from "../../../../components/SettingsPage/SettingsPageSIdebar";
import './DeleteTab.css'

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
              <div className="content">
                <p className="head-txt">Before you delete your account</p>
                <p className="txt">Deleting your account will permanently remove all your projects, portfolio, reviews, work circle, job posts, and marketplace listings. <br /><br /> This action cannot be reversed. If you just want a break, consider deactivating insteaf.</p>
                <p className="hd-txt">Enter Your Password to Confirm Deletion</p>
                <input type="password" placeholder="Enter current password" />
                <button>Delete my account permanently</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
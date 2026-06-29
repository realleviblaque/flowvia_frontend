import { SideBar } from "../../../../components/Sidebar";
import { SettingsPageSidebar } from "../../../../components/SettingsPage/SettingsPageSIdebar";
import './AccountTab.css'
import { SettingsContentHeader } from "../../../../components/SettingsPage/SettingsContentHeader";
import { AccountInfo } from "../../../../components/SettingsPage/Pages//AccountInfo/AccountInfo";

export function AccountTab({all}) {
  return (
    <>
      <SideBar notification={all} />
      <main className="settings-page-main">
        <SettingsPageSidebar />
        <div className="settings-sidebar-content">
          <div className="account-information-section">
            <SettingsContentHeader />
            <div className="account-information-content">
              <div className="top-part">
                <p className="head-txt">Account Information</p>
                <p className="txt">----.</p>
              </div>
              <AccountInfo />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
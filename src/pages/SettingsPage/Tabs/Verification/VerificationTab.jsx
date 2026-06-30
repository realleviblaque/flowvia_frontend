import { SideBar } from "../../../../components/Sidebar";
import { SettingsContentHeader } from "../../../../components/SettingsPage/SettingsContentHeader";
import { SettingsPageSidebar } from "../../../../components/SettingsPage/SettingsPageSIdebar";
import './VerificationTab.css'
import { Verification } from "../../../../components/SettingsPage/Pages/Verification/Verification";

export function VerificationTab({all}) {
  return (
    <>
      <SideBar notification={all} />
      <main className="settings-page-main">
        <SettingsPageSidebar />
        <div className="settings-sidebar-content">
          <div className="verification-tab-section">
            <SettingsContentHeader />
            <div className="verification-tab-content">
              <div className="top-part">
                <p className="head-txt">Account Verification</p>
                <p className="txt">Verified accounts get a badge, higher search ranking, and significantly more trust from clients and recruiters.</p>
              </div>
              <Verification />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
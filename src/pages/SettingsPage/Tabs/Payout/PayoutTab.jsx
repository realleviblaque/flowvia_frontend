import { SideBar } from "../../../../components/Sidebar";
import { SettingsContentHeader } from "../../../../components/SettingsPage/SettingsContentHeader";
import { SettingsPageSidebar } from "../../../../components/SettingsPage/SettingsPageSIdebar";
import './PayoutTab.css'
import { Payout } from "../../../../components/SettingsPage/Pages/Payout/Payout";

export function PayoutTab({all}) {
  return (
    <>
      <SideBar notification={all} />
      <main className="settings-page-main">
        <SettingsPageSidebar />
        <div className="settings-sidebar-content">
          <div className="payout-section">
            <SettingsContentHeader />
            <Payout />
          </div>
        </div>
      </main>
    </>
  )
}
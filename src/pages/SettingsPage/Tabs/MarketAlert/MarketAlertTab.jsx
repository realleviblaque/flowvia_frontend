import { SideBar } from "../../../../components/Sidebar";
import { SettingsContentHeader } from "../../../../components/SettingsPage/SettingsContentHeader";
import { SettingsPageSidebar } from "../../../../components/SettingsPage/SettingsPageSIdebar";
import './MarketAlertTab.css'
import { MarketNotification } from "../../../../components/SettingsPage/Pages/MarketNotification/MarketAlertNotification";

export function MarketAlertTab({all}) {
  return (
    <>
      <SideBar notification={all} />
      <main className="settings-page-main">
        <SettingsPageSidebar />
        <div className="settings-sidebar-content">
          <div className="market-alert-tab-section">
            <SettingsContentHeader />
            <div className="market-alert-tab-content">
              <div className="top-part">
                <p className="head-txt">Markeplace Alerts</p>
                <p className="txt">Stay on top of new jobs, applicants, and opportunities matched to your skills and rate.</p>
              </div>
              <MarketNotification />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
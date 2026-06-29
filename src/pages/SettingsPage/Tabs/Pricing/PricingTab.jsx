import { SideBar } from "../../../../components/Sidebar";
import { SettingsContentHeader } from "../../../../components/SettingsPage/SettingsContentHeader";
import { SettingsPageSidebar } from "../../../../components/SettingsPage/SettingsPageSIdebar";
import './PricingTab.css'
import { Pricing } from "../../../../components/SettingsPage/Pages/Pricing/Pricing";

export function PricingTab({all}) {
  return (
    <>
      <SideBar notification={all} />
      <main className="settings-page-main">
        <SettingsPageSidebar />
        <div className="settings-sidebar-content">
          <div className="pricing-tab-section">
            <SettingsContentHeader />
            <div className="pricing-tab-content">
              <div className="top-part">
                <p className="head-txt">Pricing & Availability</p>
                <p className="txt">Controls how you appear in the marketplace and what recruiters see about your rates and status.</p>
              </div>
              <Pricing />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}